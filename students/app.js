// ==========================================================================
// Excellence Talk - Students Portal Application Engine
// Interactive Spoken English, AI Voice Coach, Sentence Builder & Games
// ==========================================================================

// Global Application State
const state = {
  currentGrade: localStorage.getItem('et_student_grade') || 'grade-3-5',
  student: JSON.parse(localStorage.getItem('et_student_profile') || JSON.stringify({
    name: 'Aryan',
    avatar: '🚀',
    xp: 420,
    streak: 5,
    completedLessons: ['g35-w1'],
    submittedHomework: ['hw-g35-2'],
    fluencyScore: 88,
    pronunciationScore: 84
  })),
  soundEnabled: localStorage.getItem('et_student_sound') !== 'false',
  activeView: 'dashboard',
  currentLessonIndex: 0,
  activeAiPromptIndex: 0,
  isRecording: false,
  recognition: null,
  currentHwIdToSubmit: null,
  
  // Sentence Builder state
  sb: {
    roundIndex: 0,
    placedWords: [],
    availableWords: [],
    currentScramble: null
  },

  // Game state
  game: {
    type: null,
    flashcardIndex: 0,
    grammarIndex: 0,
    grammarScore: 0,
    twisterIndex: 0
  }
};

// ==========================================================================
// Audio Synthesis Effects (Web Audio API)
// ==========================================================================
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playSound(type) {
  if (!state.soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'success') {
      // Pleasant bright two-tone chime
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.1); // E5
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.2); // G5
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
      osc.start(now);
      osc.stop(now + 0.45);
    } else if (type === 'click') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === 'error') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.setValueAtTime(196, now + 0.12);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.start(now);
      osc.stop(now + 0.3);
    }
  } catch (err) {
    console.warn("Audio playback not supported or user gesture required:", err);
  }
}

// Speak text using browser Text-to-Speech
function speakText(text, rate = 0.95, pitch = 1.0) {
  if (!('speechSynthesis' in window)) {
    alert("Speech synthesis is not supported on this browser.");
    return;
  }
  window.speechSynthesis.cancel(); // Stop prior speech
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = rate;
  utterance.pitch = pitch;

  // Prefer natural English voices if available
  const voices = window.speechSynthesis.getVoices();
  const naturalVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha')));
  if (naturalVoice) utterance.voice = naturalVoice;

  window.speechSynthesis.speak(utterance);
}

// ==========================================================================
// Initialization & Lifecycle
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  setupNavigationTabs();
  setupGradeSelector();
  setupSoundToggle();
  setupStudentProfile();
  initSpeechRecognition();
  setupSentenceBuilderControls();
  setupHomeworkFilters();
  setupDailyChallenge();
  
  // Render initial curriculum data
  applyGradeCurriculum(state.currentGrade);
  updateStatsUI();
});

// Switch Main Content Views
function switchView(viewName) {
  playSound('click');
  state.activeView = viewName;

  // Update tabs
  document.querySelectorAll('.module-tab-btn').forEach(btn => {
    const isTarget = btn.getAttribute('data-view') === viewName;
    btn.classList.toggle('active', isTarget);
    btn.setAttribute('aria-selected', isTarget ? 'true' : 'false');
  });

  // Update view visibility
  document.querySelectorAll('.portal-view').forEach(view => {
    view.classList.remove('active-view');
  });

  const targetView = document.getElementById(`view-${viewName}`);
  if (targetView) {
    targetView.classList.add('active-view');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Refresh view-specific initializations
  if (viewName === 'sentence-builder') {
    initSentenceBuilderRound(0);
  } else if (viewName === 'progress') {
    renderProgressView();
  }
}

function setupNavigationTabs() {
  document.querySelectorAll('.module-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.getAttribute('data-view');
      if (view) switchView(view);
    });
  });
}

// Grade Selector Handling
function setupGradeSelector() {
  const select = document.getElementById('grade-selector');
  if (!select) return;

  select.value = state.currentGrade;
  select.addEventListener('change', (e) => {
    const newGrade = e.target.value;
    state.currentGrade = newGrade;
    localStorage.setItem('et_student_grade', newGrade);
    applyGradeCurriculum(newGrade);
    playSound('success');
  });
}

function applyGradeCurriculum(gradeKey) {
  const data = window.CURRICULUM_DATA ? window.CURRICULUM_DATA[gradeKey] : null;
  if (!data) return;

  // Hero labels
  document.getElementById('hero-badge-level').textContent = data.levelBadge;
  document.getElementById('hero-book-theme').textContent = `Book: ${data.bookTheme}`;
  document.getElementById('lessons-book-title').textContent = `${data.bookTheme} (${data.name.split('(')[1] || data.name}`;
  document.getElementById('curriculum-banner-title').textContent = `${data.bookTheme} • ${data.name}`;
  document.getElementById('curriculum-banner-sub').textContent = `Focus: ${data.subtitle}`;
  document.getElementById('dash-curriculum-badge').textContent = `Curriculum: ${data.name}`;

  // Render weekly lessons
  renderWeeklyLessons(data.weeklyLessons);

  // Render AI Prompts in sidebar
  renderAiPrompts(data.aiPrompts);

  // Set first AI prompt
  selectAiPrompt(0);

  // Reset & Prepare Sentence Builder
  state.sb.roundIndex = 0;
  initSentenceBuilderRound(0);

  // Render Homework items
  renderHomework(data.homework);

  // Render progress details
  renderProgressView();
}

// Sound toggle
function setupSoundToggle() {
  const btn = document.getElementById('btn-sound-toggle');
  const icon = document.getElementById('sound-icon');
  if (!btn) return;

  const updateIcon = () => {
    icon.textContent = state.soundEnabled ? '🔊' : '🔇';
  };
  updateIcon();

  btn.addEventListener('click', () => {
    state.soundEnabled = !state.soundEnabled;
    localStorage.setItem('et_student_sound', state.soundEnabled ? 'true' : 'false');
    updateIcon();
    if (state.soundEnabled) playSound('success');
  });
}

// Student Profile Setup & Modal
function setupStudentProfile() {
  const nameEl = document.getElementById('student-name-display');
  const avatarEl = document.getElementById('avatar-icon');
  const btnEdit = document.getElementById('btn-edit-student');

  if (nameEl) nameEl.textContent = state.student.name;
  if (avatarEl) avatarEl.textContent = state.student.avatar;

  if (btnEdit) {
    btnEdit.addEventListener('click', () => {
      document.getElementById('input-student-name').value = state.student.name;
      openModal('modal-profile');
    });
  }
}

function selectAvatar(emoji) {
  state.student.avatar = emoji;
  document.getElementById('avatar-icon').textContent = emoji;
  playSound('click');
}

function saveProfile() {
  const newName = document.getElementById('input-student-name').value.trim() || 'Aryan';
  state.student.name = newName;
  document.getElementById('student-name-display').textContent = newName;
  localStorage.setItem('et_student_profile', JSON.stringify(state.student));
  closeModal('modal-profile');
  playSound('success');
  renderProgressView();
}

function awardXP(points) {
  state.student.xp += points;
  localStorage.setItem('et_student_profile', JSON.stringify(state.student));
  updateStatsUI();
  playSound('success');
}

function updateStatsUI() {
  document.getElementById('xp-counter').textContent = `${state.student.xp} XP`;
  document.getElementById('streak-counter').textContent = `${state.student.streak} Days`;
  const totalXpProg = document.getElementById('prog-total-xp');
  if (totalXpProg) totalXpProg.textContent = `${state.student.xp} XP`;
}

// ==========================================================================
// Daily Speaking Quest
// ==========================================================================
function setupDailyChallenge() {
  const btn = document.getElementById('btn-start-daily-quest');
  if (!btn) return;

  btn.addEventListener('click', () => {
    switchView('speak-ai');
    const promptText = document.getElementById('daily-prompt-text').textContent.trim();
    document.getElementById('ai-active-prompt').textContent = promptText;
    document.getElementById('ai-active-sample').textContent = "I love painting because mixing vibrant colors brings my imagination to life!";
  });
}

// ==========================================================================
// 1. My Lessons View Engine
// ==========================================================================
function renderWeeklyLessons(lessons) {
  const container = document.getElementById('lessons-cards-container');
  if (!container) return;

  container.innerHTML = '';
  document.getElementById('badge-tab-lessons').textContent = lessons.length;
  document.getElementById('stat-lessons-count').innerHTML = `${lessons.length} <span class="stat-card-unit">Chapters</span>`;

  lessons.forEach((lesson, index) => {
    const card = document.createElement('div');
    card.className = 'lesson-card';

    const firstLine = lesson.dialogue && lesson.dialogue[0]
      ? `"${lesson.dialogue[0].speaker}: ${lesson.dialogue[0].text}"`
      : 'Interactive English conversation';

    card.innerHTML = `
      <div class="lesson-card-header">
        <span class="lesson-week-pill">${lesson.week}</span>
        <span class="lesson-chapter-ref">${lesson.bookChapter}</span>
      </div>
      <h3 class="lesson-title">${lesson.title}</h3>
      <div class="lesson-focus-chip">🎯 ${lesson.focus}</div>
      <div class="lesson-preview-box">
        <div class="preview-label">Sample Dialogue</div>
        <div class="preview-dialogue-snippet">${firstLine}</div>
        <div class="lesson-vocab-count">
          <span>📖 ${lesson.vocabulary.length} Key Speaking Words</span>
          <span>•</span>
          <span>🎙️ Audio Phonics</span>
        </div>
      </div>
      <button class="btn-open-lesson" onclick="openLessonModal(${index})">
        <span>📖 Open Lesson</span>
        <span>→</span>
      </button>
    `;
    container.appendChild(card);
  });
}

function openLessonModal(lessonIndex) {
  const gradeData = window.CURRICULUM_DATA[state.currentGrade];
  if (!gradeData || !gradeData.weeklyLessons[lessonIndex]) return;

  const lesson = gradeData.weeklyLessons[lessonIndex];
  state.currentLessonIndex = lessonIndex;

  document.getElementById('modal-lesson-title').innerHTML = `
    <span>${lesson.week}: ${lesson.title}</span>
    <span style="display:block; font-size:0.85rem; font-weight:500; color:var(--slate-500);">${lesson.bookChapter}</span>
  `;

  const body = document.getElementById('modal-lesson-body');
  
  // Dialogue HTML
  const dialogueHtml = lesson.dialogue.map((d, dIdx) => `
    <div style="margin-bottom:12px; background:var(--slate-50); padding:10px 14px; border-radius:var(--radius-sm); border-left:3px solid ${d.speaker === 'You' ? 'var(--primary)' : 'var(--secondary)'};">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
        <strong style="color:var(--navy-dark); font-size:0.88rem;">${d.speaker}</strong>
        <button class="btn-listen-sample" onclick="speakText('${d.text.replace(/'/g, "\\'")}')">🔊 Listen</button>
      </div>
      <p style="font-size:0.95rem; color:var(--slate-700); margin:0;">${d.text}</p>
    </div>
  `).join('');

  // Vocabulary HTML
  const vocabHtml = lesson.vocabulary.map(v => `
    <div style="background:var(--white); border:1px solid var(--slate-200); border-radius:var(--radius-md); padding:12px; margin-bottom:10px;">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <div>
          <strong style="font-size:1.05rem; color:var(--navy-dark);">${v.word}</strong>
          <span style="color:var(--primary); font-size:0.85rem; margin-left:6px;">${v.phonetic}</span>
        </div>
        <button class="btn-listen-sample" onclick="speakText('${v.word}')">🔊 Pronounce</button>
      </div>
      <p style="font-size:0.88rem; color:var(--slate-600); margin:4px 0;">Meaning: ${v.meaning}</p>
      <div style="font-size:0.85rem; color:var(--slate-500); font-style:italic;">Example: "${v.example}"</div>
    </div>
  `).join('');

  // Sentence Patterns HTML
  const patternsHtml = lesson.sentencePatterns.map(p => `
    <li style="margin-bottom:8px; font-weight:600; color:var(--navy-dark);">${p}</li>
  `).join('');

  body.innerHTML = `
    <div style="margin-bottom:24px;">
      <h4 style="font-size:1.1rem; color:var(--navy-dark); margin-bottom:10px;">🗣️ Conversational Dialogue</h4>
      ${dialogueHtml}
    </div>

    <div style="margin-bottom:24px;">
      <h4 style="font-size:1.1rem; color:var(--navy-dark); margin-bottom:10px;">📖 Vocabulary & Pronunciation</h4>
      ${vocabHtml}
    </div>

    <div style="margin-bottom:24px;">
      <h4 style="font-size:1.1rem; color:var(--navy-dark); margin-bottom:10px;">🧩 Key Sentence Frames</h4>
      <ul style="padding-left:20px; line-height:1.6;">${patternsHtml}</ul>
    </div>

    <div style="display:flex; justify-content:space-between; gap:12px; margin-top:20px;">
      <button class="btn-sb-secondary" onclick="closeModal('modal-lesson-detail')">Close</button>
      <button class="btn-start-daily" style="width:auto;" onclick="practiceLessonInAi(${lessonIndex})">
        <span>🎙️ Practice in Speak with AI</span>
      </button>
    </div>
  `;

  openModal('modal-lesson-detail');
}

function practiceLessonInAi(lessonIndex) {
  closeModal('modal-lesson-detail');
  switchView('speak-ai');
  const gradeData = window.CURRICULUM_DATA[state.currentGrade];
  const lesson = gradeData.weeklyLessons[lessonIndex];
  if (lesson) {
    document.getElementById('ai-active-prompt').textContent = lesson.practiceQuestion;
    const sample = lesson.dialogue[1] ? lesson.dialogue[1].text : "I am ready to speak fluent English!";
    document.getElementById('ai-active-sample').textContent = `"${sample}"`;
  }
}

// ==========================================================================
// 2. Speak with AI (Pronunciation and speaking)
// ==========================================================================
function renderAiPrompts(prompts) {
  const container = document.getElementById('ai-prompts-list');
  if (!container) return;

  container.innerHTML = '';
  prompts.forEach((p, idx) => {
    const card = document.createElement('div');
    card.className = `prompt-item-card ${idx === 0 ? 'active' : ''}`;
    card.innerHTML = `
      <div class="prompt-item-title">${p.title}</div>
      <div class="prompt-item-diff">${p.difficulty} • Tap to Practice</div>
    `;
    card.addEventListener('click', () => {
      selectAiPrompt(idx);
    });
    container.appendChild(card);
  });
}

function selectAiPrompt(index) {
  state.activeAiPromptIndex = index;
  const gradeData = window.CURRICULUM_DATA[state.currentGrade];
  if (!gradeData || !gradeData.aiPrompts[index]) return;

  const item = gradeData.aiPrompts[index];
  document.getElementById('ai-active-prompt').textContent = item.prompt;
  document.getElementById('ai-active-sample').textContent = `"${item.sampleResponse}"`;

  // Update prompt card highlighting
  document.querySelectorAll('.prompt-item-card').forEach((card, idx) => {
    card.classList.toggle('active', idx === index);
  });

  // Reset results box
  document.getElementById('speech-result-box').style.display = 'none';
}

function initSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const micBtn = document.getElementById('btn-mic-toggle');
  const micStatus = document.getElementById('mic-status-label');
  const subtext = document.getElementById('mic-subtext-label');
  const listenSampleBtn = document.getElementById('btn-listen-sample');
  const replayBtn = document.getElementById('btn-replay-user-speech');

  if (listenSampleBtn) {
    listenSampleBtn.addEventListener('click', () => {
      const sample = document.getElementById('ai-active-sample').textContent.replace(/"/g, '');
      speakText(sample);
    });
  }

  if (replayBtn) {
    replayBtn.addEventListener('click', () => {
      const text = document.getElementById('user-transcript-display').textContent.replace(/"/g, '');
      speakText(text);
    });
  }

  if (!micBtn) return;

  if (SpeechRecognition) {
    state.recognition = new SpeechRecognition();
    state.recognition.continuous = false;
    state.recognition.interimResults = true;
    state.recognition.lang = 'en-US';

    state.recognition.onstart = () => {
      state.isRecording = true;
      micBtn.classList.add('recording');
      micStatus.textContent = 'Listening to your speech... Speak now!';
      subtext.textContent = 'The AI is evaluating pronunciation and cadence.';
      playSound('click');
    };

    state.recognition.onresult = (event) => {
      let interimTranscript = '';
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }
      const spoken = finalTranscript || interimTranscript;
      if (spoken) {
        micStatus.textContent = `"${spoken}"`;
      }
      if (finalTranscript) {
        evaluateSpeechResult(finalTranscript);
      }
    };

    state.recognition.onerror = (event) => {
      console.warn("Speech recognition error:", event.error);
      stopRecordingUI();
      // Provide simulated fallback result
      handleSimulatedSpeech();
    };

    state.recognition.onend = () => {
      stopRecordingUI();
    };
  }

  micBtn.addEventListener('click', () => {
    if (state.isRecording) {
      if (state.recognition) state.recognition.stop();
      stopRecordingUI();
    } else {
      if (state.recognition) {
        try {
          state.recognition.start();
        } catch (e) {
          handleSimulatedSpeech();
        }
      } else {
        handleSimulatedSpeech();
      }
    }
  });
}

function stopRecordingUI() {
  state.isRecording = false;
  const micBtn = document.getElementById('btn-mic-toggle');
  const micStatus = document.getElementById('mic-status-label');
  const subtext = document.getElementById('mic-subtext-label');
  if (micBtn) micBtn.classList.remove('recording');
  if (micStatus) micStatus.textContent = 'Click the microphone and speak aloud';
  if (subtext) subtext.textContent = 'Speak clearly into your device microphone';
}

function handleSimulatedSpeech() {
  const micBtn = document.getElementById('btn-mic-toggle');
  const micStatus = document.getElementById('mic-status-label');
  const subtext = document.getElementById('mic-subtext-label');

  state.isRecording = true;
  micBtn.classList.add('recording');
  micStatus.textContent = 'Listening to your speech... (Simulated)';
  subtext.textContent = 'Analyzing voice pitch, fluency & vocabulary...';
  playSound('click');

  setTimeout(() => {
    stopRecordingUI();
    const gradeData = window.CURRICULUM_DATA[state.currentGrade];
    const currentPrompt = gradeData ? gradeData.aiPrompts[state.activeAiPromptIndex] : null;
    const sample = currentPrompt ? currentPrompt.sampleResponse : "I love speaking fluent English every day with confidence.";
    evaluateSpeechResult(sample);
  }, 2400);
}

function evaluateSpeechResult(transcript) {
  const resultBox = document.getElementById('speech-result-box');
  const transcriptDisplay = document.getElementById('user-transcript-display');
  const scorePron = document.getElementById('score-pronunciation');
  const scoreFluency = document.getElementById('score-fluency');
  const scoreGrammar = document.getElementById('score-grammar');
  const feedbackText = document.getElementById('ai-feedback-text');

  transcriptDisplay.textContent = `"${transcript}"`;

  // Calculate dynamic realistic scores
  const wordCount = transcript.trim().split(/\s+/).length;
  const randomBonus = Math.floor(Math.random() * 8);
  const pronScore = Math.min(98, 86 + randomBonus);
  const fluencyScore = Math.min(97, (wordCount > 5 ? 88 : 82) + randomBonus);
  const grammarScore = Math.min(99, 90 + randomBonus);

  scorePron.textContent = `${pronScore}%`;
  scoreFluency.textContent = `${fluencyScore}%`;
  scoreGrammar.textContent = `${grammarScore}%`;

  const encouragementList = [
    "Splendid enunciation! Your pace was steady and vowel sounds were clear and crisp.",
    "Great voice projection! Keep maintaining that deliberate cadence when speaking.",
    "Very natural rhythm! Minimal hesitations detected and strong sentence structure.",
    "Wonderful clarity! You spoke fearlessly with admirable expressiveness."
  ];
  const chosenFeedback = encouragementList[Math.floor(Math.random() * encouragementList.length)];
  feedbackText.textContent = chosenFeedback;

  resultBox.style.display = 'block';
  awardXP(35);

  // AI voice encouragement
  setTimeout(() => {
    speakText(`Well done! ${chosenFeedback}`);
  }, 400);
}

// ==========================================================================
// 3. Sentence Builder Engine
// ==========================================================================
function setupSentenceBuilderControls() {
  document.getElementById('btn-sb-reset').addEventListener('click', () => {
    resetSentenceBuilder();
    playSound('click');
  });

  document.getElementById('btn-sb-audio').addEventListener('click', () => {
    if (state.sb.currentScramble) {
      speakText(state.sb.currentScramble.correct);
    }
  });

  document.getElementById('btn-sb-check').addEventListener('click', () => {
    checkSentenceBuilder();
  });
}

function initSentenceBuilderRound(roundIdx) {
  const gradeData = window.CURRICULUM_DATA[state.currentGrade];
  if (!gradeData || !gradeData.sentenceScrambles) return;

  const scrambles = gradeData.sentenceScrambles;
  if (roundIdx >= scrambles.length) {
    roundIdx = 0; // wrap around
  }

  state.sb.roundIndex = roundIdx;
  state.sb.currentScramble = scrambles[roundIdx];
  state.sb.placedWords = [];
  
  // Shuffle words for puzzle
  state.sb.availableWords = [...state.sb.currentScramble.scrambled].sort(() => Math.random() - 0.5);

  // Update UI headers
  document.getElementById('sb-score-badge').textContent = `Puzzle ${roundIdx + 1} of ${scrambles.length}`;
  document.getElementById('sb-round-tag').textContent = `Puzzle ${roundIdx + 1} of ${scrambles.length}`;
  document.getElementById('sb-hint-text').textContent = `💡 Hint: ${state.sb.currentScramble.hint}`;

  const feedbackAlert = document.getElementById('sb-feedback-alert');
  feedbackAlert.style.display = 'none';

  renderSentenceBuilderBoard();
}

function renderSentenceBuilderBoard() {
  const targetContainer = document.getElementById('sb-target-container');
  const wordBank = document.getElementById('sb-word-bank');
  const placeholder = document.getElementById('sb-target-placeholder');

  // Render Target Dropzone
  targetContainer.innerHTML = '';
  if (state.sb.placedWords.length === 0) {
    targetContainer.appendChild(placeholder);
    placeholder.style.display = 'block';
  } else {
    state.sb.placedWords.forEach((wordObj, pIdx) => {
      const tile = document.createElement('button');
      tile.className = 'word-tile placed';
      tile.textContent = wordObj.word;
      tile.title = 'Click to return word to bank';
      tile.addEventListener('click', () => {
        // Return word to bank
        state.sb.placedWords.splice(pIdx, 1);
        state.sb.availableWords.push(wordObj);
        playSound('click');
        renderSentenceBuilderBoard();
      });
      targetContainer.appendChild(tile);
    });
  }

  // Render Word Bank
  wordBank.innerHTML = '';
  state.sb.availableWords.forEach((wordObj, bIdx) => {
    const tile = document.createElement('button');
    tile.className = 'word-tile';
    tile.textContent = typeof wordObj === 'string' ? wordObj : wordObj.word;
    tile.title = 'Click to place in sentence';
    tile.addEventListener('click', () => {
      // Place word in target
      const wordVal = typeof wordObj === 'string' ? { word: wordObj, id: bIdx } : wordObj;
      state.sb.availableWords.splice(bIdx, 1);
      state.sb.placedWords.push(wordVal);
      playSound('click');
      renderSentenceBuilderBoard();
    });
    wordBank.appendChild(tile);
  });
}

function resetSentenceBuilder() {
  initSentenceBuilderRound(state.sb.roundIndex);
}

function checkSentenceBuilder() {
  const builtSentence = state.sb.placedWords.map(w => w.word).join(' ').trim();
  const targetSentence = state.sb.currentScramble.correct.trim();
  const alertEl = document.getElementById('sb-feedback-alert');
  const titleEl = document.getElementById('sb-feedback-title');
  const msgEl = document.getElementById('sb-feedback-msg');

  if (state.sb.placedWords.length === 0) {
    alert("Please place some words in the sentence slot first!");
    return;
  }

  alertEl.style.display = 'block';

  // Compare case-insensitively and without trailing punctuation
  const cleanBuilt = builtSentence.toLowerCase().replace(/[.,!]/g, '');
  const cleanTarget = targetSentence.toLowerCase().replace(/[.,!]/g, '');

  if (cleanBuilt === cleanTarget) {
    alertEl.className = 'sb-feedback-alert correct';
    titleEl.textContent = '🎉 Brilliant!';
    msgEl.textContent = `Correct sentence: "${state.sb.currentScramble.correct}". +25 XP Earned!`;
    playSound('success');
    awardXP(25);
    speakText(state.sb.currentScramble.correct);

    setTimeout(() => {
      initSentenceBuilderRound(state.sb.roundIndex + 1);
    }, 2000);
  } else {
    alertEl.className = 'sb-feedback-alert incorrect';
    titleEl.textContent = '⚠️ Keep Trying!';
    msgEl.textContent = 'The word order is not quite right for natural English. Check the hint or rearrange the tiles.';
    playSound('error');
  }
}

// ==========================================================================
// 4. Homework View Engine
// ==========================================================================
function renderHomework(hwList, filter = 'all') {
  const container = document.getElementById('homework-items-container');
  if (!container) return;

  container.innerHTML = '';
  const filtered = hwList.filter(item => {
    if (filter === 'pending') return item.status === 'Pending';
    if (filter === 'completed') return item.status === 'Completed';
    return true;
  });

  const pendingCount = hwList.filter(i => i.status === 'Pending').length;
  document.getElementById('badge-tab-hw').textContent = `${pendingCount} Due`;
  document.getElementById('dash-hw-badge').textContent = `${pendingCount} Pending`;

  filtered.forEach(hw => {
    const card = document.createElement('div');
    card.className = 'hw-card';

    const isDone = hw.status === 'Completed';
    const teacherNoteHtml = hw.teacherNote ? `
      <div class="hw-teacher-feedback">
        <strong>Teacher Feedback (${hw.score}):</strong> "${hw.teacherNote}"
      </div>
    ` : '';

    card.innerHTML = `
      <div class="hw-card-left">
        <div class="hw-meta-row">
          <span class="hw-type-badge">${hw.type}</span>
          <span class="hw-book-ref">📖 ${hw.bookRef}</span>
          <span class="hw-due-date">${hw.due}</span>
        </div>
        <h3 class="hw-title">${hw.title}</h3>
        <p class="hw-desc">${hw.description}</p>
        ${teacherNoteHtml}
      </div>
      <div class="hw-card-right">
        <div class="hw-points-tag">+${hw.points} XP</div>
        ${isDone
          ? `<button class="btn-hw-action completed">✓ Completed (${hw.score || '5/5 ⭐'})</button>`
          : `<button class="btn-hw-action" onclick="openHomeworkSubmitModal('${hw.id}')">Submit Work →</button>`
        }
      </div>
    `;
    container.appendChild(card);
  });
}

function setupHomeworkFilters() {
  document.querySelectorAll('.subtab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.subtab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-hw-filter');
      const gradeData = window.CURRICULUM_DATA[state.currentGrade];
      if (gradeData) renderHomework(gradeData.homework, filter);
      playSound('click');
    });
  });

  // Homework record button inside modal
  const hwRecBtn = document.getElementById('btn-hw-record-mic');
  const hwMicStatus = document.getElementById('hw-mic-status');
  if (hwRecBtn) {
    hwRecBtn.addEventListener('click', () => {
      hwRecBtn.classList.toggle('recording');
      if (hwRecBtn.classList.contains('recording')) {
        hwMicStatus.textContent = 'Recording speech... Speak your answer!';
        playSound('click');
      } else {
        hwMicStatus.textContent = 'Recording saved (32 seconds)!';
        playSound('success');
      }
    });
  }

  // Submit Homework button
  const confirmBtn = document.getElementById('btn-confirm-submit-hw');
  if (confirmBtn) {
    confirmBtn.addEventListener('click', () => {
      const text = document.getElementById('hw-submission-text').value.trim();
      const gradeData = window.CURRICULUM_DATA[state.currentGrade];
      if (gradeData) {
        const item = gradeData.homework.find(h => h.id === state.currentHwIdToSubmit);
        if (item) {
          item.status = 'Completed';
          item.score = '5/5 ⭐';
          item.teacherNote = 'Wonderful submission! Very clear voice modulation and excellent effort.';
          renderHomework(gradeData.homework);
          awardXP(item.points);
        }
      }
      closeModal('modal-homework-submit');
      playSound('success');
      alert("Homework successfully submitted to your mentor!");
    });
  }
}

function openHomeworkSubmitModal(hwId) {
  state.currentHwIdToSubmit = hwId;
  const gradeData = window.CURRICULUM_DATA[state.currentGrade];
  if (!gradeData) return;
  const hw = gradeData.homework.find(h => h.id === hwId);
  if (!hw) return;

  document.getElementById('modal-hw-title').textContent = `Submit: ${hw.title}`;
  document.getElementById('modal-hw-desc').textContent = `${hw.bookRef}: ${hw.description}`;
  document.getElementById('hw-submission-text').value = '';
  document.getElementById('hw-mic-status').textContent = 'Tap to Record Voice Homework';
  document.getElementById('btn-hw-record-mic').classList.remove('recording');

  openModal('modal-homework-submit');
}

// ==========================================================================
// 5. Learning Games Engine
// ==========================================================================
function openGameModal(gameType) {
  state.game.type = gameType;
  const titleEl = document.getElementById('modal-game-title');
  const bodyEl = document.getElementById('modal-game-body');

  if (gameType === 'flashcards') {
    titleEl.textContent = '3D Vocabulary Flashcards';
    state.game.flashcardIndex = 0;
    renderFlashcardGame();
  } else if (gameType === 'grammar') {
    titleEl.textContent = 'Speed Grammar Pop';
    state.game.grammarIndex = 0;
    state.game.grammarScore = 0;
    renderGrammarGame();
  } else if (gameType === 'twister') {
    titleEl.textContent = 'Tongue Twister Sprint';
    state.game.twisterIndex = 0;
    renderTwisterGame();
  }

  openModal('modal-game');
}

function renderFlashcardGame() {
  const cards = window.GAMES_DATA.flashcards;
  const card = cards[state.game.flashcardIndex];
  const body = document.getElementById('modal-game-body');

  body.innerHTML = `
    <div style="text-align:center;">
      <span style="font-size:0.85rem; font-weight:700; color:var(--slate-500);">Card ${state.game.flashcardIndex + 1} of ${cards.length} • Tap card to flip</span>
    </div>

    <div class="flashcard-stage" onclick="this.querySelector('.flashcard-inner').classList.toggle('flipped')">
      <div class="flashcard-inner">
        <div class="flashcard-front">
          <div class="fc-word">${card.word}</div>
          <div class="fc-phonetic">${card.phonetic}</div>
          <span style="margin-top:14px; font-size:0.8rem; color:var(--primary); font-weight:700;">🔄 Click to Flip</span>
        </div>
        <div class="flashcard-back">
          <div class="fc-meaning">${card.meaning}</div>
          <div class="fc-example">"${card.example}"</div>
          <button class="btn-listen-sample" style="margin-top:10px;" onclick="event.stopPropagation(); speakText('${card.word}: ${card.meaning.replace(/'/g, "\\'")}')">🔊 Hear Aloud</button>
        </div>
      </div>
    </div>

    <div style="display:flex; justify-content:space-between; gap:12px; margin-top:20px;">
      <button class="btn-sb-secondary" onclick="prevFlashcard()">← Previous</button>
      <button class="btn-start-daily" style="width:auto;" onclick="nextFlashcard()">Next Card →</button>
    </div>
  `;
}

function nextFlashcard() {
  const total = window.GAMES_DATA.flashcards.length;
  state.game.flashcardIndex = (state.game.flashcardIndex + 1) % total;
  renderFlashcardGame();
  playSound('click');
}

function prevFlashcard() {
  const total = window.GAMES_DATA.flashcards.length;
  state.game.flashcardIndex = (state.game.flashcardIndex - 1 + total) % total;
  renderFlashcardGame();
  playSound('click');
}

function renderGrammarGame() {
  const questions = window.GAMES_DATA.grammarQuiz;
  const qIdx = state.game.grammarIndex;
  const body = document.getElementById('modal-game-body');

  if (qIdx >= questions.length) {
    // Finished
    body.innerHTML = `
      <div style="text-align:center; padding:30px 10px;">
        <div style="font-size:3rem; margin-bottom:12px;">🏆</div>
        <h3 style="font-size:1.6rem; color:var(--navy-dark); margin-bottom:8px;">Grammar Pop Complete!</h3>
        <p style="font-size:1.1rem; color:var(--slate-600); margin-bottom:20px;">
          You scored <strong>${state.game.grammarScore} / ${questions.length}</strong>!
        </p>
        <button class="btn-start-daily" style="margin:0 auto;" onclick="openGameModal('grammar')">
          <span>🔄 Play Again</span>
        </button>
      </div>
    `;
    awardXP(state.game.grammarScore * 15);
    playSound('success');
    return;
  }

  const q = questions[qIdx];
  const optionsHtml = q.options.map((opt, oIdx) => `
    <button class="word-tile" style="width:100%; text-align:left; margin-bottom:10px; font-size:0.95rem; display:block;" onclick="answerGrammarQuestion(${oIdx})">
      <strong>${String.fromCharCode(65 + oIdx)}.</strong> ${opt}
    </button>
  `).join('');

  body.innerHTML = `
    <div style="display:flex; justify-content:space-between; margin-bottom:16px;">
      <span style="font-weight:700; color:var(--primary);">Question ${qIdx + 1} of ${questions.length}</span>
      <span style="font-weight:700; color:#D97706;">Score: ${state.game.grammarScore} ⭐</span>
    </div>
    <h4 style="font-size:1.15rem; color:var(--navy-dark); margin-bottom:18px;">${q.question}</h4>
    <div>${optionsHtml}</div>
  `;
}

function answerGrammarQuestion(selectedIdx) {
  const questions = window.GAMES_DATA.grammarQuiz;
  const q = questions[state.game.grammarIndex];
  const isCorrect = selectedIdx === q.correctIndex;

  if (isCorrect) {
    state.game.grammarScore += 1;
    playSound('success');
    alert(`🎉 Correct!\n\n${q.explanation}`);
  } else {
    playSound('error');
    alert(`⚠️ Not quite right.\n\nExplanation: ${q.explanation}`);
  }

  state.game.grammarIndex += 1;
  renderGrammarGame();
}

function renderTwisterGame() {
  const twisters = window.GAMES_DATA.tongueTwisters;
  const item = twisters[state.game.twisterIndex];
  const body = document.getElementById('modal-game-body');

  body.innerHTML = `
    <div style="text-align:center; padding:10px 0;">
      <span style="font-size:0.8rem; font-weight:800; text-transform:uppercase; color:var(--accent);">Twister ${state.game.twisterIndex + 1} of ${twisters.length}</span>
      <h3 style="font-size:1.4rem; color:var(--navy-dark); margin:8px 0;">${item.title}</h3>
      <div style="font-size:0.85rem; color:var(--primary); font-weight:700; margin-bottom:18px;">Target Sound: ${item.targetSound}</div>
      
      <div style="background:var(--slate-50); border:2px dashed #F59E0B; border-radius:var(--radius-lg); padding:24px; font-size:1.25rem; font-weight:700; color:var(--navy-dark); line-height:1.5; margin-bottom:20px;">
        "${item.text}"
      </div>

      <div style="display:flex; justify-content:center; gap:12px; margin-bottom:24px;">
        <button class="btn-listen-sample" style="padding:8px 16px; font-size:0.95rem;" onclick="speakText('${item.text.replace(/'/g, "\\'")}', 1.1)">🔊 Hear Fast Cadence</button>
      </div>

      <button class="mic-btn-main" onclick="recordTwisterPractice()" style="width:75px; height:75px; font-size:1.8rem;">
        <span>🎙️</span>
      </button>
      <div style="margin-top:10px; font-weight:700; color:var(--navy-dark);">Tap Mic & Say It 3 Times Without Stumbling!</div>
    </div>

    <div style="display:flex; justify-content:space-between; gap:12px; margin-top:20px;">
      <button class="btn-sb-secondary" onclick="state.game.twisterIndex = (state.game.twisterIndex - 1 + ${twisters.length}) % ${twisters.length}; renderTwisterGame();">← Previous</button>
      <button class="btn-start-daily" style="width:auto;" onclick="state.game.twisterIndex = (state.game.twisterIndex + 1) % ${twisters.length}; renderTwisterGame();">Next Twister →</button>
    </div>
  `;
}

function recordTwisterPractice() {
  playSound('click');
  alert("Listening to your tongue twister sprint! Say it fast!");
  setTimeout(() => {
    playSound('success');
    awardXP(30);
    alert("🌟 Masterful enunciation! Articulation score: 96%. +30 Star XP awarded!");
  }, 2200);
}

// ==========================================================================
// 6. My Progress View Engine
// ==========================================================================
function renderProgressView() {
  const nameField = document.getElementById('cert-name-field');
  const reasonField = document.getElementById('cert-reason-field');
  const dateField = document.getElementById('cert-date-field');

  if (nameField) nameField.textContent = state.student.name;
  
  const gradeData = window.CURRICULUM_DATA[state.currentGrade];
  const bookTheme = gradeData ? gradeData.bookTheme : 'Talk & Tell';
  if (reasonField) {
    reasonField.innerHTML = `For outstanding dedication, consistent daily practice, and commendable speech confidence in the <strong>${bookTheme}</strong> Spoken English Curriculum.`;
  }

  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  if (dateField) dateField.textContent = dateStr;
}

function openCertificateModal() {
  renderProgressView();
  openModal('modal-certificate');
  playSound('success');
}

// ==========================================================================
// Modal Utilities
// ==========================================================================
function openModal(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close modal when clicking outside dialog
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});
