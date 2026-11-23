# Excellence Talk - Students Portal 🎓
### The Phygital Spoken English Learning & Speaking Ecosystem

Welcome to the **Excellence Talk Students Portal** — a dedicated interactive web platform designed specifically for school & college students to learn, practice, and master spoken English without stage fear.

Students seamlessly transition to this portal from the main Excellence Talk website (`https://excellencetalk.in` or `../Excellence_Talks_Website/index.html`).

---

## 🌟 The 6 Core Modules

```
┌────────────────────────────────────────────────────────────────────────┐
│                   EXCELLENCE TALK STUDENT PORTAL                       │
├────────────────────┬────────────────────┬──────────────────────────────┤
│ 1. MY LESSONS      │ 2. SPEAK WITH AI   │ 3. SENTENCE BUILDER          │
│ Weekly grade-wise  │ Pronunciation and  │ Construct better sentences   │
│ book-synced units  │ 1-on-1 voice coach │ with interactive tiles       │
├────────────────────┼────────────────────┼──────────────────────────────┤
│ 4. HOMEWORK        │ 5. LEARNING GAMES  │ 6. MY PROGRESS               │
│ Assigned practice  │ Vocabulary and     │ Skills, streaks & printable  │
│ & voice recording  │ grammar games      │ completion certificate       │
└────────────────────┴────────────────────┴──────────────────────────────┘
```

### 1. 📚 My Lessons
- **Grade-Wise Curriculum**: Automatically updates across 5 levels:
  - *Grades 1–2*: Early Explorers (*Talk & Wonder*)
  - *Grades 3–5*: Confident Communicators (*Talk & Tell*)
  - *Grades 6–8*: Fluent Speakers (*Talk & Connect*)
  - *Grades 9–10*: Persuasive Leaders (*Talk & Lead*)
  - *College / Higher Ed*: Global Professionals (*Professional English*)
- **Interactive Dialogue Viewer**: Listen to native dialogue line-by-line using Web Speech Synthesis.
- **Vocabulary & Phonics**: Pronunciation guide, phonetic transcriptions, meanings, and practical sentences.
- **Communicative Sentence Patterns**: Core patterns to practice aloud.

### 2. 🎙️ Speak with AI
- **24/7 AI Speaking Coach**: Private, judgment-free oral practice designed to eliminate speaking hesitation.
- **Live Microphone Recognition**: Evaluates student speech in real time with Web Speech API (`SpeechRecognition`).
- **Instant Speech Scorecard**:
  - Pronunciation & Enunciation Clarity Score (%)
  - Fluency & Speaking Pace (WPM)
  - Grammar & Syntax Accuracy (%)
- **Audio Feedback**: The AI coach speaks back with tips and encouragement.

### 3. 🧩 Sentence Builder
- **Interactive Scrambled Tiles**: Tap or click words to place them in proper English syntax.
- **Immediate Audio & Syntax Validation**: Color-coded feedback with sound effects.
- **XP Rewards**: Students earn Star XP for every sentence constructed correctly.

### 4. 📝 Homework
- **Book Page Sync**: Homework directly maps to exercises in the printed physical textbooks.
- **Audio Submission**: Students can record voice assignments or type written notes.
- **Teacher Review Status**: Displays grades (e.g., `5/5 ⭐`) and personalized teacher feedback.

### 5. 🎮 Learning Games
- **3D Vocabulary Flashcards**: Interactive flip cards with definitions and audio pronunciation.
- **Speed Grammar Pop**: Fast-paced multiple-choice quiz covering tenses, polite requests, and debate markers.
- **Tongue Twister Sprint**: Cadence and articulation challenges with fast playback and voice drills.

### 6. 🏆 My Progress
- **Core Competency Tracking**: Fluency, Pronunciation, Grammar, and Vocabulary progress bars.
- **Gamification**: Daily streak flames (`🔥 5 Days`), Star Points (`⭐ 420 XP`), and unlocked badges.
- **Printable Certificate of Achievement**: Generates a certified completion certificate signed by Excellence Talk Systems.

---

## 🚀 How to Run Locally

You can open `index.html` directly in any modern browser, or run the included Node.js server:

```bash
# Start local development server on port 3001
node server.js
```

Then visit [http://localhost:3001](http://localhost:3001) in your browser.

---

## 🔗 Main Website Integration

- **From Main Website to Student Portal**: Nav bar button and mobile drawer link (`../Excellence_Talk_Students/index.html`).
- **From Student Portal to Main Website**: Top announcement bar link (`← Back to Excellence Talk Website`) and footer link.
