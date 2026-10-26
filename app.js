// Excellence Talk Interactive Application Logic

// 1. Data Store for 6-Step Loop
const loopStepsData = {
  1: {
    title: "Step 1: Read (Printed Book)",
    action: "Physical Learning Anchor",
    desc: "Every student opens their physical grade-wise textbook. In Chapter 4 'Daily Routines', students are introduced to 15 key action verbs, temporal transition words (first, subsequently, meanwhile), and a full-color comic dialogue between two students planning their study schedule.",
    features: [
      "Zero screen fatigue; high-focus tactile reading",
      "Vocabulary builder with clear pronunciation phonetic guides",
      "Illustrated story context depicting age-appropriate situations",
      "QR code at the top linking to the accompanying digital audio track"
    ],
    previewHtml: `
      <div class="loop-visual-preview">
        <span class="preview-badge">Printed Book Page 36</span>
        <h4 style="margin-bottom:8px; color:#1E429F;">📖 Unit 2 • Chapter 4: Daily Routines</h4>
        <p style="font-size:0.9rem; color:#4B5563; margin-bottom:12px;"><em>"Aarav wakes up at dawn. Before leaving for school, he prepares his timetable..."</em></p>
        <div style="background:#F3F4F6; padding:10px; border-radius:6px; font-size:0.85rem; margin-bottom:10px;">
          <strong>Target Vocabulary:</strong> dawn • prioritize • timetable • commute • assemble
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.8rem; color:#6B7280;">
          <span>Activity 1: Match definitions</span>
          <span style="color:#1C64F2; font-weight:bold;">[Scan QR for Pronunciation Audio]</span>
        </div>
      </div>
    `
  },
  2: {
    title: "Step 2: Practise (Written & Paired)",
    action: "Immediate Cognitive Reinforcement",
    desc: "Students complete written exercises right in the workbook—filling dialogue bubbles, writing out their own schedule, and doing paired desk drills with a partner.",
    features: [
      "Pen-to-paper retention builds grammatical muscle memory",
      "Paired roleplay dialogue prompts with explicit speaking frames",
      "Self-check rubrics at the bottom of the worksheet",
      "Teacher's Answer Key provided in the Teacher Companion Guide"
    ],
    previewHtml: `
      <div class="loop-visual-preview">
        <span class="preview-badge">Workbook Drill 4.2</span>
        <h4 style="margin-bottom:8px; color:#1E429F;">✏️ Pair Roleplay Script</h4>
        <div style="font-size:0.88rem; line-height:1.5; color:#374151;">
          <p><strong>Student A:</strong> "What is the most challenging part of your morning?"</p>
          <p><strong>Student B:</strong> "For me, waking up early is difficult, but I always __________________."</p>
        </div>
        <div style="margin-top:14px; border:1px dashed #CBD5E1; padding:10px; border-radius:6px; font-size:0.82rem; color:#64748B;">
          Complete the response using one sentence pattern from Page 37.
        </div>
      </div>
    `
  },
  3: {
    title: "Step 3: Learn Together (Classroom Smart TV Mode)",
    action: "Social Energy & Gamified Mastery",
    desc: "The teacher switches on Classroom Mode on the projector or interactive flat panel. The screen syncs directly with Chapter 4, launching whole-class games, pronunciation choruses, and rapid-fire sentence ordering competitions.",
    features: [
      "Teacher follows the ready-to-run 45-minute lesson structure",
      "Multiplayer games: Room split into Team Alpha & Team Bravo",
      "Auditory reinforcement with native speaker pronunciation models",
      "No teacher lesson prep overhead required"
    ],
    previewHtml: `
      <div class="loop-visual-preview" style="background:#0F172A; color:#fff; border-color:#334155;">
        <span class="preview-badge" style="background:#1E3A8A; color:#93C5FD;">Smart TV Display</span>
        <h4 style="color:#60A5FA; margin-bottom:8px;">📺 Team Challenge: Sentence Scramble</h4>
        <p style="font-size:0.85rem; color:#CBD5E1; margin-bottom:12px;">Rearrange the tiles before the 30s buzzer rings:</p>
        <div style="display:flex; gap:6px; flex-wrap:wrap; margin-bottom:12px;">
          <span style="background:#374151; padding:4px 8px; border-radius:4px; font-size:0.8rem;">[breakfast]</span>
          <span style="background:#374151; padding:4px 8px; border-radius:4px; font-size:0.8rem;">[eats]</span>
          <span style="background:#374151; padding:4px 8px; border-radius:4px; font-size:0.8rem;">[Aarav]</span>
          <span style="background:#374151; padding:4px 8px; border-radius:4px; font-size:0.8rem;">[leaving]</span>
          <span style="background:#374151; padding:4px 8px; border-radius:4px; font-size:0.8rem;">[before]</span>
        </div>
        <div style="font-size:0.8rem; color:#34D399;">● Live Leaderboard: Team Alpha +10 pts</div>
      </div>
    `
  },
  4: {
    title: "Step 4: Speak with AI (Individual Voice Drill)",
    action: "Infinite 1-on-1 Speaking Practice",
    desc: "At home or during computer lab time, students open the Excellence Talk mobile or web app. They scan the QR code from Chapter 4 and converse with an age-adapted AI speech bot designed specifically around Daily Routines.",
    features: [
      "Safe, supportive environment where students speak without fear of peer judgment",
      "Instant multi-point evaluation: Grammar, Vocabulary, Pronunciation, Fluency",
      "Targeted constructive suggestions on how to rephrase thoughts naturally",
      "All audio snippets and scores recorded for teacher LMS review"
    ],
    previewHtml: `
      <div class="loop-visual-preview">
        <span class="preview-badge">AI Speech Engine</span>
        <h4 style="color:#1C64F2; margin-bottom:8px;">🤖 AI Dialogue Prompt</h4>
        <p style="font-size:0.88rem; color:#374151; margin-bottom:10px;"><em>"Describe your ideal Sunday routine in three sentences."</em></p>
        <div style="background:#ECFDF5; border:1px solid #A7F3D0; padding:10px; border-radius:6px; font-size:0.82rem; color:#065F46;">
          <strong>Student Voice Recorded:</strong> "On Sunday I wakes up late..."<br>
          <strong>AI Feedback:</strong> "Good sentence! Small tip: say 'I <u>wake</u> up' instead of 'I wakes up' for the pronoun 'I'."
        </div>
      </div>
    `
  },
  5: {
    title: "Step 5: Apply (Live Trainer & Group Discussion)",
    action: "High-Touch Human Pressure Testing",
    desc: "Having mastered the words, sentences, and AI drills, students participate in scheduled live sessions with certified trainers. They engage in extempore presentations, debates, and group problem-solving.",
    features: [
      "Small cohort size ensures every single student gets speaking stage time",
      "Certified master trainers provide nuanced vocal coaching and confidence building",
      "Real-world communication formats: Mini-debates, news reading, GDs",
      "Direct milestone assessment evaluated on global CEFR benchmarks"
    ],
    previewHtml: `
      <div class="loop-visual-preview">
        <span class="preview-badge">Live Masterclass</span>
        <h4 style="color:#7C3AED; margin-bottom:8px;">🎙️ Small Group Speaking Stage</h4>
        <p style="font-size:0.85rem; color:#4B5563; margin-bottom:8px;">Trainer: <em>"Aarav, present your speech on 'Why Time Management is a Superpower' (60s)."</em></p>
        <div style="background:#F5F3FF; border:1px solid #DDD6FE; padding:10px; border-radius:6px; font-size:0.82rem; color:#5B21B6;">
          <strong>Trainer Live Rubric:</strong><br>
          • Eye contact & poise: 9/10<br>
          • Articulation & pace: 8.5/10<br>
          • Persuasive vocabulary used: 9/10
        </div>
      </div>
    `
  },
  6: {
    title: "Step 6: Track Progress (Analytics & Mastery Badge)",
    action: "Verified Skill Growth & Credentialing",
    desc: "The platform consolidates book completion, classroom activity participation, AI speech diagnostics, and trainer scores into a transparent growth report for teachers, parents, and school leadership.",
    features: [
      "School leadership portal tracking grade-wise and section-wise fluency metrics",
      "Parent WhatsApp / SMS weekly progress summary card",
      "End-of-term physical certificate with official CEFR level attestation",
      "Identifies students needing targeted intervention early"
    ],
    previewHtml: `
      <div class="loop-visual-preview">
        <span class="preview-badge">Institutional Dashboard</span>
        <h4 style="color:#059669; margin-bottom:8px;">📊 Chapter 4 Mastery Card</h4>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; font-size:0.82rem; margin-bottom:10px;">
          <div style="background:#F9FAFB; padding:8px; border-radius:4px;">Book Exercises: <strong>100%</strong></div>
          <div style="background:#F9FAFB; padding:8px; border-radius:4px;">Class Games: <strong>Participated</strong></div>
          <div style="background:#F9FAFB; padding:8px; border-radius:4px;">AI Speaking Score: <strong>92/100</strong></div>
          <div style="background:#F9FAFB; padding:8px; border-radius:4px;">Live Trainer Score: <strong>8.8/10</strong></div>
        </div>
        <div style="color:#10B981; font-weight:bold; font-size:0.82rem;">✓ Chapter Badge: "Master of Routines" Unlocked</div>
      </div>
    `
  }
};

function selectLoopStep(stepNum) {
  // Update timeline buttons
  for (let i = 1; i <= 6; i++) {
    const el = document.getElementById(`loop-step-${i}`);
    if (el) {
      if (i === stepNum) el.classList.add('active');
      else el.classList.remove('active');
    }
  }

  // Render detail card
  const data = loopStepsData[stepNum];
  const container = document.getElementById('loop-detail-display');
  if (!container || !data) return;

  container.innerHTML = `
    <div class="loop-detail-grid">
      <div>
        <span class="section-tag">${data.action}</span>
        <h3 style="font-size: 1.8rem; margin-bottom: 12px;">${data.title}</h3>
        <p style="margin-bottom: 20px; line-height: 1.6;">${data.desc}</p>
        <div style="display:flex; flex-direction:column; gap:10px;">
          ${data.features.map(f => `<div style="display:flex; gap:10px; font-size:0.92rem;"><span style="color:#1C64F2; font-weight:bold;">✓</span><span>${f}</span></div>`).join('')}
        </div>
      </div>
      <div>
        ${data.previewHtml}
      </div>
    </div>
  `;
}

// 2. Grade-Wise Curriculum Data
const curriculumData = {
  g12: {
    badge: "Grades 1–2 • Early Explorers",
    bookTitle: "Talk & Wonder: Foundations of English",
    tagline: "Phonics, everyday words, sound blends, and spoken confidence",
    coverColor: "linear-gradient(135deg, #FF6B6B 0%, #EE5253 100%)",
    pages: "144 Pages • Full Color Illustrated • Audio QR Embedded",
    focus: "Basic vocabulary, letter sounds, everyday objects, polite greetings, and simple oral expression.",
    syllabus: [
      { title: "Phonics & Sound Blends", items: ["Consonant blends (bl, cl, st)", "Vowel digraphs (ea, ee, oo)", "Phonetic rhyming songs"] },
      { title: "Everyday Vocabulary", items: ["Animals, colors & clothing", "Classroom & family items", "Action verbs (jump, read, eat)"] },
      { title: "Sentence Starters", items: ["'This is a...'", "'I like to...'", "'Can I please have...'"] },
      { title: "Classroom & AI Drills", items: ["Echo singing on smart TV", "AI animal sound mimicry", "Show & Tell with toy"] }
    ]
  },
  g35: {
    badge: "Grades 3–5 • Confident Communicators",
    bookTitle: "Talk & Tell: Conversations & Stories",
    tagline: "Sentence formation, daily conversations, storytelling, and roleplays",
    coverColor: "linear-gradient(135deg, #1E40AF 0%, #1E293B 100%)",
    pages: "176 Pages • Full Color • Comic Strips • QR Scenario Links",
    focus: "Constructing multi-clause sentences, describing daily routines, reading and narrating short stories, and confident roleplays.",
    syllabus: [
      { title: "Functional Grammar", items: ["Action vs. Helping verbs", "Past, Present & Future tenses", "Prepositions in context"] },
      { title: "Everyday Dialogues", items: ["Ordering food in a restaurant", "Asking for directions", "Making plans with friends"] },
      { title: "Storytelling & Roleplays", items: ["Story structure (Beginning, Climax, End)", "Character voices & emotion", "Comic bubble completion"] },
      { title: "Classroom & AI Drills", items: ["Team sentence buzzer races", "AI conversation on daily routines", "Live news broadcast presentation"] }
    ]
  },
  g68: {
    badge: "Grades 6–8 • Fluent Speakers",
    bookTitle: "Talk & Connect: Expressive Communication",
    tagline: "Fluency, contextual grammar, descriptive presentations, and structured discussions",
    coverColor: "linear-gradient(135deg, #059669 0%, #064E3B 100%)",
    pages: "192 Pages • Rich Layout • Analytical Prompts • Discussion Decks",
    focus: "Spontaneous conversational fluency, eliminating hesitation, using idioms and transition phrases, and participating in group discussions.",
    syllabus: [
      { title: "Communicative Grammar", items: ["Conditionals (If I had... I would)", "Active vs. Passive for impact", "Discourse transition markers"] },
      { title: "Descriptive Mastery", items: ["Reviewing books & movies", "Explaining scientific inventions", "Painting pictures with words"] },
      { title: "Structured Discussions", items: ["Expressing agreement & polite disagreement", "Summarizing peer points", "Turn-taking etiquette"] },
      { title: "Classroom & AI Drills", items: ["Smart TV live polls & rapid debate", "AI spontaneous 60s speech timer", "Live parliamentary mini-debate"] }
    ]
  },
  g910: {
    badge: "Grades 9–10 • Persuasive Leaders",
    bookTitle: "Talk & Lead: Rhetoric & Public Speaking",
    tagline: "Advanced communication, debates, declamation, and interview foundations",
    coverColor: "linear-gradient(135deg, #7C3AED 0%, #4C1D95 100%)",
    pages: "208 Pages • Executive Design • Debate Case Files • Interview Rubrics",
    focus: "Mastering the art of persuasion, high-school debates, formal presentations, impromptu speaking, and early job/college interview poise.",
    syllabus: [
      { title: "Rhetoric & Public Speaking", items: ["Monroe's Motivated Sequence", "Vocal variety & pause control", "Audience emotional engagement"] },
      { title: "Debate Formats", items: ["British Parliamentary debate rules", "Rebuttal strategies & refutation", "Fact checking & argument logic"] },
      { title: "Interview Foundations", items: ["Self-introduction elevator pitch", "STAR method for behavioral questions", "Professional body language"] },
      { title: "Classroom & AI Drills", items: ["Smart TV balloon debate simulation", "Adversarial counter-point AI coach", "Live Model UN & elocution showcase"] }
    ]
  },
  college: {
    badge: "College / Higher Ed • Global Professionals",
    bookTitle: "Professional English & Employability Workbook",
    tagline: "Corporate communication, presentations, group discussions, and placement interview mastery",
    coverColor: "linear-gradient(135deg, #0B132B 0%, #1C2541 100%)",
    pages: "224 Pages • Corporate Workbook Style • Case Studies • Assessment Scorecards",
    focus: "Equipping students for campus placements and corporate leadership through high-stakes Group Discussions (GD), technical/HR interviews, and business presentations.",
    syllabus: [
      { title: "Group Discussion (GD) Mastery", items: ["Initiating with high-impact data", "Steering straying GDs back on track", "Synthesizing consensus conclusions"] },
      { title: "Interview Simulation", items: ["Deconstructing technical & HR questions", "Situational Judgment Questions (SJT)", "Salary negotiation & company culture"] },
      { title: "Corporate Communication", items: ["Executive slide pitching", "Crisp business memos & email etiquette", "Cross-cultural business nuance"] },
      { title: "Classroom & AI Drills", items: ["Smart TV boardroom crisis simulation", "AI industry-specific mock interview bot", "Live 8-person GDs with HR master trainers"] }
    ]
  }
};

function showGradeTab(gradeKey) {
  // Update tab buttons
  const buttons = document.querySelectorAll('.curriculum-tabs .tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  const data = curriculumData[gradeKey];
  const container = document.getElementById('grade-detail-content');
  if (!container || !data) return;

  container.innerHTML = `
    <div class="grade-layout">
      <!-- Book Visual Mockup -->
      <div class="book-mockup-card" style="background:${data.coverColor};">
        <div class="book-spine-effect">
          <div class="book-grade-badge">${data.badge}</div>
          <h3>${data.bookTitle}</h3>
          <p style="font-size:0.92rem; color:rgba(255,255,255,0.85);">${data.tagline}</p>
        </div>

        <div class="qr-bridge-preview">
          <div class="qr-box">📱</div>
          <div class="qr-text">
            <strong>QR Sync Embedded</strong><br>
            Direct deep-link to AI coach & classroom slides
          </div>
        </div>

        <div class="book-meta">
          <div>📄 ${data.pages}</div>
          <div>📦 Annual physical edition for every enrolled student</div>
        </div>
      </div>

      <!-- Curriculum Details -->
      <div class="grade-info-col">
        <div class="section-tag">${data.badge}</div>
        <h3>Core Curriculum & Book Structure</h3>
        <p class="grade-focus-sub">${data.focus}</p>

        <div class="syllabus-grid">
          ${data.syllabus.map(s => `
            <div class="syllabus-card">
              <h4>${s.title}</h4>
              <ul>
                ${s.items.map(item => `<li>${item}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>

        <div style="background:#F8FAFC; border:1px solid #E2E8F0; padding:16px 20px; border-radius:12px; display:flex; justify-content:space-between; align-items:center;">
          <div>
            <strong style="color:#0F172A; display:block; font-size:0.95rem;">Teacher's Companion Guide Included</strong>
            <span style="font-size:0.85rem; color:#64748B;">45-minute lesson blueprints, classroom management tips, and answer rubrics.</span>
          </div>
          <button class="btn btn-sm btn-outline" onclick="openModal('sample-chapter')">Preview Chapter</button>
        </div>
      </div>
    </div>
  `;
}

// 3. Classroom Smart TV Simulator Logic
let tvSlideStep = 1;
function testTvOption(optionNum) {
  const feedback = document.getElementById('tv-feedback-msg');
  if (!feedback) return;

  if (optionNum === 1) {
    feedback.innerHTML = `<span style="color:#34D399; font-weight:bold;">✓ Excellent Choice!</span> "After I wake up..." correctly uses the subordinating conjunction. Team Alpha gains 15 points!`;
    feedback.style.background = "rgba(16, 185, 129, 0.2)";
  } else {
    feedback.innerHTML = `<span style="color:#F87171; font-weight:bold;">✗ Not quite right:</span> Notice the time sequence. Try Option A for natural chronological order.`;
    feedback.style.background = "rgba(239, 68, 68, 0.2)";
  }
}

function resetTvSimulator() {
  tvSlideStep = (tvSlideStep % 3) + 1;
  const title = document.querySelector('.tv-slide-title');
  const prompt = document.querySelector('.tv-slide-prompt');
  const options = document.getElementById('tv-options');
  const feedback = document.getElementById('tv-feedback-msg');

  if (tvSlideStep === 1) {
    title.textContent = "Team Sentence Relay: 'My Morning'";
    prompt.textContent = "Choose the correct sequence to complete the dialogue:";
    options.innerHTML = `
      <button class="tv-opt-btn" onclick="testTvOption(1)">A. "After I wake up, I brush my teeth and eat breakfast."</button>
      <button class="tv-opt-btn" onclick="testTvOption(2)">B. "I brush my teeth after eating before waking up."</button>
      <button class="tv-opt-btn" onclick="testTvOption(3)">C. "Waking up I teeth brushed immediately."</button>
    `;
    feedback.textContent = "Select the most natural English sentence!";
    feedback.style.background = "rgba(255, 255, 255, 0.05)";
  } else if (tvSlideStep === 2) {
    title.textContent = "Vocabulary Face-Off: 'Action Verbs'";
    prompt.textContent = "Which word best completes: 'She always ______ her school bag before sleeping.'";
    options.innerHTML = `
      <button class="tv-opt-btn" onclick="testTvOption(2)">A. 'scrambles'</button>
      <button class="tv-opt-btn" onclick="testTvOption(1)">B. 'packs and organizes' (from Book Page 39)</button>
      <button class="tv-opt-btn" onclick="testTvOption(3)">C. 'forgets easily'</button>
    `;
    feedback.textContent = "Which option shows disciplined routine?";
    feedback.style.background = "rgba(255, 255, 255, 0.05)";
  } else {
    title.textContent = "Whole-Class Pronunciation Chorus";
    prompt.textContent = "Repeat after the audio track: 'Prioritize your commitments daily.'";
    options.innerHTML = `
      <button class="tv-opt-btn" onclick="testTvOption(1)">▶️ Play Master Audio Model (UK/US Neutral)</button>
      <button class="tv-opt-btn" onclick="testTvOption(1)">🎙️ Start 10-Second Class Chorus Timer</button>
    `;
    feedback.textContent = "Listen closely to the syllable stress on 'pri-OR-i-tize'.";
    feedback.style.background = "rgba(255, 255, 255, 0.05)";
  }
}

// 4. AI Speaking Coach Simulator
function simulateSpeechTest(sampleType) {
  const speechBox = document.getElementById('user-sample-speech');
  const pScore = document.getElementById('score-pronun');
  const gScore = document.getElementById('score-grammar');
  const vScore = document.getElementById('score-vocab');
  const fScore = document.getElementById('score-fluency');
  const pBar = document.getElementById('bar-pronun');
  const gBar = document.getElementById('bar-grammar');
  const vBar = document.getElementById('bar-vocab');
  const fBar = document.getElementById('bar-fluency');
  const advice = document.getElementById('ai-coach-advice');

  if (sampleType === 'sample1') {
    speechBox.textContent = `"Usually I wake up at six thirty am. Then I wash my face, drink a warm glass of water, and help my mother make breakfast."`;
    pScore.textContent = "94%";
    gScore.textContent = "91%";
    vScore.textContent = "88%";
    fScore.textContent = "90%";
    pBar.style.width = "94%";
    gBar.style.width = "91%";
    vBar.style.width = "88%";
    fBar.style.width = "90%";
    advice.innerHTML = `<div class="feedback-highlight">🌟 <strong>Coach Feedback:</strong> "Excellent sentence flow! You used sequence transitions like 'then' and 'after' smoothly. Next time, try adding a descriptive word like 'refreshing glass of water' or 'energizing breakfast'."</div>`;
  } else {
    speechBox.textContent = `"Yesterday morning I am waking up late because my alarm didn't ringed. So I rushed fastly to school."`;
    pScore.textContent = "86%";
    gScore.textContent = "68%";
    vScore.textContent = "72%";
    fScore.textContent = "78%";
    pBar.style.width = "86%";
    gBar.style.width = "68%";
    vBar.style.width = "72%";
    fBar.style.width = "78%";
    advice.innerHTML = `
      <div class="feedback-highlight" style="background:#FEF2F2; border-color:#FECACA; color:#991B1B;">
        ⚠️ <strong>Constructive Grammar & Word Slips Identified:</strong><br>
        1. <em>"I am waking up late"</em> ➔ For past events, say <strong>"I woke up late"</strong>.<br>
        2. <em>"didn't ringed"</em> ➔ After 'did not', use the base verb: <strong>"didn't ring"</strong>.<br>
        3. <em>"rushed fastly"</em> ➔ 'Fast' is both adjective and adverb: say <strong>"rushed fast"</strong> or <strong>"rushed quickly"</strong>.
      </div>
    `;
  }
}

// 5. Modal Management
function openModal(type) {
  const backdrop = document.getElementById('modal-backdrop');
  const content = document.getElementById('modal-inner-content');
  if (!backdrop || !content) return;

  if (type === 'sample-chapter') {
    content.innerHTML = `
      <div class="section-tag">Sample Chapter Download</div>
      <h3 style="margin-bottom:8px; font-size:1.6rem;">Get the Grade 5 Evaluation Kit</h3>
      <p style="font-size:0.92rem; color:#4B5563; margin-bottom:20px;">
        Includes: (1) Printed Book Chapter 4 PDF, (2) Teacher's Companion Lesson Plan, and (3) Live QR link to test the AI Speaking scenario.
      </p>
      <form onsubmit="submitLeadForm(event)">
        <div class="form-group">
          <label>Full Name</label>
          <input type="text" class="form-control" placeholder="Principal / Educator Name" required>
        </div>
        <div class="form-group">
          <label>Institutional Email</label>
          <input type="email" class="form-control" placeholder="name@school.edu" required>
        </div>
        <div class="form-group">
          <label>School / College Name</label>
          <input type="text" class="form-control" placeholder="Greenwood International School" required>
        </div>
        <div class="form-group">
          <label>Estimated Student Count</label>
          <select class="form-control">
            <option>100 - 300 students</option>
            <option>300 - 800 students</option>
            <option>800 - 2,000 students</option>
            <option>2,000+ students</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Download Sample Kit Instantly</button>
      </form>
    `;
  } else if (type === 'book-demo') {
    content.innerHTML = `
      <div class="section-tag">Institutional Demonstration</div>
      <h3 style="margin-bottom:8px; font-size:1.6rem;">Schedule a 30-Minute Walkthrough</h3>
      <p style="font-size:0.92rem; color:#4B5563; margin-bottom:20px;">
        See how physical books, Smart TV classroom mode, AI speech evaluation, and live trainer masterclasses operate together in your classrooms.
      </p>
      <form onsubmit="submitLeadForm(event)">
        <div class="form-group">
          <label>Your Name & Title</label>
          <input type="text" class="form-control" placeholder="Dr. Sarah Johnson, Principal" required>
        </div>
        <div class="form-group">
          <label>Phone / WhatsApp Number</label>
          <input type="tel" class="form-control" placeholder="+91 98765 43210" required>
        </div>
        <div class="form-group">
          <label>Institution Location / City</label>
          <input type="text" class="form-control" placeholder="Bengaluru, Karnataka" required>
        </div>
        <div class="form-group">
          <label>Curriculum Board</label>
          <select class="form-control">
            <option>CBSE</option>
            <option>ICSE</option>
            <option>State Board</option>
            <option>Cambridge / IB</option>
            <option>Higher Ed / University</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Confirm Demo Appointment</button>
      </form>
    `;
  } else {
    content.innerHTML = `
      <div class="section-tag">Institutional Proposal</div>
      <h3 style="margin-bottom:8px; font-size:1.6rem;">Customized School / College Quotation</h3>
      <p style="font-size:0.92rem; color:#4B5563; margin-bottom:20px;">
        We tailor book printing, logistics, teacher guides, and trainer schedules to your academic calendar.
      </p>
      <form onsubmit="submitLeadForm(event)">
        <div class="form-group">
          <label>Institution Name</label>
          <input type="text" class="form-control" placeholder="ABC Group of Institutions" required>
        </div>
        <div class="form-group">
          <label>Contact Email & Mobile</label>
          <input type="text" class="form-control" placeholder="director@abc.edu | +91 9876543210" required>
        </div>
        <div class="form-group">
          <label>Preferred Licensing Model</label>
          <select class="form-control">
            <option>Model A: All-Inclusive Blended Package</option>
            <option>Model B: Platform Base + Book Pass-Through</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Generate Custom Quotation</button>
      </form>
    `;
  }

  backdrop.classList.add('open');
}

function closeModal(e) {
  const backdrop = document.getElementById('modal-backdrop');
  if (backdrop) backdrop.classList.remove('open');
}

function submitLeadForm(e) {
  e.preventDefault();
  const content = document.getElementById('modal-inner-content');
  if (!content) return;

  content.innerHTML = `
    <div style="text-align:center; padding:30px 10px;">
      <div style="width:60px; height:60px; background:#DEF7EC; color:#0E9F6E; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:2rem; margin:0 auto 16px auto;">✓</div>
      <h3 style="font-size:1.6rem; margin-bottom:10px;">Thank You!</h3>
      <p style="color:#4B5563; font-size:0.98rem; margin-bottom:24px;">
        Your request has been registered. An Excellence Talk academic consultant will connect with sample materials within 2 hours.
      </p>
      <button class="btn btn-primary" onclick="closeModal()">Close Window</button>
    </div>
  `;
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const drawer = document.getElementById('mobile-menu-drawer');
  const backdrop = document.getElementById('mobile-menu-backdrop');
  const btn = document.getElementById('mobile-menu-btn');
  
  if (!drawer || !backdrop) return;
  
  const isOpen = drawer.classList.contains('open');
  if (isOpen) {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    if (btn) btn.classList.remove('active');
    document.body.style.overflow = '';
  } else {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    if (btn) btn.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

// Close drawer on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    const drawer = document.getElementById('mobile-menu-drawer');
    if (drawer && drawer.classList.contains('open')) {
      toggleMobileMenu();
    }
  }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  selectLoopStep(4);
  showGradeTab('g35');
});
