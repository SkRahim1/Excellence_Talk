// Excellence Talk - Student Portal Curriculum & Educational Content
// Aligned with the 5 Grade Levels:
// Level 1: Grades 1-2 (Talk & Wonder)
// Level 2: Grades 3-5 (Talk & Tell)
// Level 3: Grades 6-8 (Talk & Connect)
// Level 4: Grades 9-10 (Talk & Lead)
// Level 5: College / Higher Ed (Professional English)

const CURRICULUM_DATA = {
  "grade-1-2": {
    name: "Early Explorers (Grades 1–2)",
    bookTheme: "Talk & Wonder",
    subtitle: "Sounds, Phonics & Everyday Magic",
    levelBadge: "Level 1: Foundation",
    avatar: "🦁",
    weeklyLessons: [
      {
        id: "g12-w1",
        week: "Week 1",
        title: "Meeting Friendly Animals",
        focus: "Phonics & Greetings",
        bookChapter: "Chapter 1: Welcome to the Jungle",
        dialogue: [
          { speaker: "Leo the Lion", text: "Hello, little explorer! What is your name?" },
          { speaker: "You", text: "Hello, Leo! My name is a happy student." },
          { speaker: "Leo the Lion", text: "Nice to meet you! Can you roar like a lion?" },
          { speaker: "You", text: "Roar! I love learning English with you!" }
        ],
        vocabulary: [
          { word: "Friendly", phonetic: "/ˈfrend.li/", meaning: "Kind and pleasant to others", example: "The friendly puppy wagged its tail." },
          { word: "Explorer", phonetic: "/ɪkˈsplɔː.rər/", meaning: "Someone who travels to learn new things", example: "I am an English explorer." },
          { word: "Bright", phonetic: "/braɪt/", meaning: "Full of light and shining", example: "The sun is bright today." },
          { word: "Cheerful", phonetic: "/ˈtʃɪə.fəl/", meaning: "Happy and positive", example: "She gave a cheerful wave." }
        ],
        sentencePatterns: [
          "My name is [Name].",
          "I can see a [Animal/Object].",
          "I like to [Action]."
        ],
        practiceQuestion: "Say hello to your AI buddy and tell them your favorite animal!",
        expectedKeywords: ["hello", "name", "favorite", "animal", "like"]
      },
      {
        id: "g12-w2",
        week: "Week 2",
        title: "Colors in My Classroom",
        focus: "Descriptive Words & Objects",
        bookChapter: "Chapter 2: The Rainbow Room",
        dialogue: [
          { speaker: "Teacher Mia", text: "Good morning! What colors can you see on your desk?" },
          { speaker: "You", text: "Good morning! I see a red pencil and a blue book." },
          { speaker: "Teacher Mia", text: "Splendid! And what color is your school bag?" },
          { speaker: "You", text: "My bag is bright yellow and green!" }
        ],
        vocabulary: [
          { word: "Rainbow", phonetic: "/ˈreɪn.bəʊ/", meaning: "An arch of colors in the sky", example: "I saw a beautiful rainbow after the rain." },
          { word: "Pencil", phonetic: "/ˈpen.səl/", meaning: "A tool used for writing or drawing", example: "I write with my sharp pencil." },
          { word: "Desk", phonetic: "/desk/", meaning: "A table used for study or work", example: "Keep your books neat on the desk." },
          { word: "Shiny", phonetic: "/ˈʃaɪ.ni/", meaning: "Reflecting light brightly", example: "My new shoes are shiny." }
        ],
        sentencePatterns: [
          "This is a [Color] [Object].",
          "I have [Number] [Objects].",
          "The [Object] is on the table."
        ],
        practiceQuestion: "Describe three colorful things you have around you right now!",
        expectedKeywords: ["red", "blue", "yellow", "green", "color", "see"]
      },
      {
        id: "g12-w3",
        week: "Week 3",
        title: "My Family & Little Pets",
        focus: "Family Members & Caring Words",
        bookChapter: "Chapter 3: Home Sweet Home",
        dialogue: [
          { speaker: "AI Buddy", text: "Who lives with you at your home?" },
          { speaker: "You", text: "I live with my father, mother, and my little sister." },
          { speaker: "AI Buddy", text: "Do you have any furry pets at home?" },
          { speaker: "You", text: "Yes, I have a playful puppy named Bruno!" }
        ],
        vocabulary: [
          { word: "Family", phonetic: "/ˈfæm.əl.i/", meaning: "A group of people related to one another", example: "I love my caring family." },
          { word: "Playful", phonetic: "/ˈpleɪ.fəl/", meaning: "Full of fun and energy", example: "The playful kitten chased the ball." },
          { word: "Kind", phonetic: "/kaɪnd/", meaning: "Caring and helpful", example: "My mother is very kind." },
          { word: "Together", phonetic: "/təˈɡeð.ər/", meaning: "With each other", example: "We eat dinner together every evening." }
        ],
        sentencePatterns: [
          "I love my [Family Member].",
          "My pet loves to play with [Object].",
          "We do [Activity] together."
        ],
        practiceQuestion: "Tell the AI about your family members and what you like doing together!",
        expectedKeywords: ["family", "mother", "father", "brother", "sister", "pet", "love"]
      },
      {
        id: "g12-w4",
        week: "Week 4",
        title: "Magic Polite Words",
        focus: "Manners: Please, Thank You, Excuse Me",
        bookChapter: "Chapter 4: The Kindness Castle",
        dialogue: [
          { speaker: "Prince Oliver", text: "May I borrow your crayons, please?" },
          { speaker: "You", text: "Certainly! Here you go, Prince Oliver." },
          { speaker: "Prince Oliver", text: "Thank you very much for sharing!" },
          { speaker: "You", text: "You are welcome! Sharing is caring." }
        ],
        vocabulary: [
          { word: "Please", phonetic: "/pliːz/", meaning: "Polite word used when asking for something", example: "Pass me the water, please." },
          { word: "Thank you", phonetic: "/ˈθæŋk juː/", meaning: "Polite expression of gratitude", example: "Thank you for helping me." },
          { word: "Welcome", phonetic: "/ˈwel.kəm/", meaning: "Polite response to thank you", example: "You are always welcome." },
          { word: "Polite", phonetic: "/pəˈlaɪt/", meaning: "Having good manners", example: "Polite children say excuse me." }
        ],
        sentencePatterns: [
          "May I please have [Object]?",
          "Thank you for [Action/Help].",
          "Excuse me, could you help me?"
        ],
        practiceQuestion: "Practice asking politely to borrow an eraser and saying thank you!",
        expectedKeywords: ["please", "thank", "welcome", "excuse", "borrow"]
      }
    ],
    sentenceScrambles: [
      {
        id: "s1",
        scrambled: ["is", "My", "Aryan", "name"],
        correct: "My name is Aryan",
        hint: "Start with 'My' to introduce yourself."
      },
      {
        id: "s2",
        scrambled: ["love", "I", "play", "to", "football"],
        correct: "I love to play football",
        hint: "Express what activity you enjoy."
      },
      {
        id: "s3",
        scrambled: ["The", "sun", "is", "bright", "shining"],
        correct: "The sun is shining bright",
        hint: "Describe the daytime sky."
      },
      {
        id: "s4",
        scrambled: ["me", "Pass", "pencil", "the", "please"],
        correct: "Pass me the pencil please",
        hint: "Use polite words when requesting."
      }
    ],
    aiPrompts: [
      {
        title: "My Favorite Toy",
        prompt: "Tell me about your favorite toy. What color is it and why do you like it?",
        sampleResponse: "My favorite toy is a red toy car. It goes very fast and makes me laugh!",
        difficulty: "Easy"
      },
      {
        title: "Morning Routine",
        prompt: "What do you do right after you wake up in the morning?",
        sampleResponse: "I brush my teeth, wash my face, and drink a warm cup of milk.",
        difficulty: "Easy"
      },
      {
        title: "Animal Sounds",
        prompt: "Name two animals and make their sounds for me!",
        sampleResponse: "A dog says woof woof and a happy cat says meow meow!",
        difficulty: "Easy"
      }
    ],
    homework: [
      {
        id: "hw-g12-1",
        title: "Record 3 Polite Sentences",
        type: "Voice Note",
        bookRef: "Book Page 14, Activity B",
        description: "Use 'Please', 'Thank you', and 'Excuse me' in three spoken sentences. Record your audio.",
        points: 50,
        due: "Tomorrow, 6:00 PM",
        status: "Pending"
      },
      {
        id: "hw-g12-2",
        title: "Show & Tell Audio Diary",
        type: "Speaking Task",
        bookRef: "Book Page 19, Challenge",
        description: "Hold your school bag and describe 3 items inside it in English.",
        points: 75,
        due: "Friday, 5:00 PM",
        status: "Completed",
        score: "5/5 ⭐",
        teacherNote: "Lovely clear pronunciation! Great job using 'bright' and 'blue'."
      }
    ]
  },

  "grade-3-5": {
    name: "Confident Communicators (Grades 3–5)",
    bookTheme: "Talk & Tell",
    subtitle: "Storytelling, Daily Life & Confidence",
    levelBadge: "Level 2: Development",
    avatar: "🚀",
    weeklyLessons: [
      {
        id: "g35-w1",
        week: "Week 1",
        title: "A Day in My School Life",
        focus: "Daily Routines & Action Verbs",
        bookChapter: "Chapter 1: The Morning Bell",
        dialogue: [
          { speaker: "Rohan", text: "Hey! What is your favorite period in school today?" },
          { speaker: "You", text: "I really look forward to the Science lab and English speaking club!" },
          { speaker: "Rohan", text: "Awesome! What experiment are you conducting today?" },
          { speaker: "You", text: "We are observing plant growth and presenting our findings to the class." }
        ],
        vocabulary: [
          { word: "Routine", phonetic: "/ruːˈtiːn/", meaning: "A regular sequence of actions", example: "My morning routine starts at 6:30 AM." },
          { word: "Curious", phonetic: "/ˈkjʊə.ri.əs/", meaning: "Eager to know or learn something", example: "The curious student asked thoughtful questions." },
          { word: "Conduct", phonetic: "/kənˈdʌkt/", meaning: "To organize and carry out an activity", example: "We conduct experiments in the science room." },
          { word: "Present", phonetic: "/prɪˈzent/", meaning: "To show or speak about an idea in front of others", example: "I will present my project with confidence." }
        ],
        sentencePatterns: [
          "Every morning, I start my day by [Action].",
          "I enjoy [Subject/Activity] because it helps me [Benefit].",
          "After finishing my homework, I usually [Activity]."
        ],
        practiceQuestion: "Explain your complete school schedule from the morning prayer to the evening bell!",
        expectedKeywords: ["morning", "school", "period", "teacher", "lunch", "homework", "friend"]
      },
      {
        id: "g35-w2",
        week: "Week 2",
        title: "At the Weekend Market",
        focus: "Situational Dialogue & Expressing Quantities",
        bookChapter: "Chapter 2: Market Square Hustle",
        dialogue: [
          { speaker: "Shopkeeper", text: "Good evening young gentleman! How may I assist you?" },
          { speaker: "You", text: "Good evening! Could you please give me two kilos of fresh apples?" },
          { speaker: "Shopkeeper", text: "Certainly! Would you like anything else from the fruit stall?" },
          { speaker: "You", text: "Yes, also a dozen ripe bananas, please. How much does it cost in total?" }
        ],
        vocabulary: [
          { word: "Assist", phonetic: "/əˈsɪst/", meaning: "To help someone", example: "Can I assist you with those heavy bags?" },
          { word: "Certainly", phonetic: "/ˈsɜː.tən.li/", meaning: "Definitely; without doubt", example: "I will certainly finish my homework." },
          { word: "Bargain", phonetic: "/ˈbɑː.ɡɪn/", meaning: "An item bought for less than the usual price", example: "These storybooks were a great bargain." },
          { word: "Fresh", phonetic: "/freʃ/", meaning: "Recently made or harvested; clean", example: "We picked fresh mangoes from the orchard." }
        ],
        sentencePatterns: [
          "Could you please give me [Item]?",
          "How much does this [Item] cost?",
          "I would prefer [Option A] over [Option B]."
        ],
        practiceQuestion: "Roleplay buying 3 items at a stationery shop with polite sentences!",
        expectedKeywords: ["cost", "please", "price", "rupees", "stationery", "notebook", "pencil"]
      },
      {
        id: "g35-w3",
        week: "Week 3",
        title: "The Mystery in the Garden",
        focus: "Past Tense Narration & Story Building",
        bookChapter: "Chapter 3: Footprints in the Mud",
        dialogue: [
          { speaker: "AI Detective", text: "What unusual event happened in your garden yesterday?" },
          { speaker: "You", text: "Yesterday afternoon, I noticed mysterious tiny footprints near the rose bush." },
          { speaker: "AI Detective", text: "Fascinating! Did you discover who made them?" },
          { speaker: "You", text: "Yes! It was a baby squirrel collecting acorns for its nest." }
        ],
        vocabulary: [
          { word: "Mysterious", phonetic: "/mɪˈstɪə.ri.əs/", meaning: "Difficult or impossible to understand or explain", example: "A mysterious sound came from the attic." },
          { word: "Discover", phonetic: "/dɪˈskʌv.ər/", meaning: "To find something unexpectedly", example: "Scientists discover new secrets of nature." },
          { word: "Notice", phonetic: "/ˈnəʊ.tɪs/", meaning: "To see or become aware of something", example: "Did you notice the teacher's new smile?" },
          { word: "Fascinating", phonetic: "/ˈfæs.ən.eɪ.tɪŋ/", meaning: "Extremely interesting and charming", example: "Space exploration is truly fascinating." }
        ],
        sentencePatterns: [
          "Yesterday, I [Past Verb] while walking to [Place].",
          "Suddenly, something unexpected happened: [Event].",
          "In the end, I discovered that [Conclusion]."
        ],
        practiceQuestion: "Tell a short 40-second story about a surprise you experienced this week!",
        expectedKeywords: ["yesterday", "suddenly", "happened", "discovered", "because", "finally"]
      },
      {
        id: "g35-w4",
        week: "Week 4",
        title: "My Role Model & Hero",
        focus: "Describing Personal Qualities & Character",
        bookChapter: "Chapter 4: Standing on Shoulders of Giants",
        dialogue: [
          { speaker: "Mentor", text: "Who inspires you the most in your life?" },
          { speaker: "You", text: "Dr. APJ Abdul Kalam inspires me because of his dedication and humility." },
          { speaker: "Mentor", text: "Which quality of his would you like to build in yourself?" },
          { speaker: "You", text: "His relentless curiosity and kindness towards young students." }
        ],
        vocabulary: [
          { word: "Inspiration", phonetic: "/ˌɪn.spɪˈreɪ.ʃən/", meaning: "Someone or something that motivates you", example: "My mother is my greatest inspiration." },
          { word: "Dedication", phonetic: "/ˌded.ɪˈkeɪ.ʃən/", meaning: "Commitment to a task or purpose", example: "His dedication to badminton won him medals." },
          { word: "Humility", phonetic: "/hjuːˈmɪl.ə.ti/", meaning: "Modesty and freedom from pride", example: "Great leaders always show humility." },
          { word: "Relentless", phonetic: "/rɪˈlent.ləs/", meaning: "Continuing without stopping or tiring", example: "She showed relentless effort in her studies." }
        ],
        sentencePatterns: [
          "I deeply admire [Person] because [Reason].",
          "One exceptional quality they possess is [Quality].",
          "Their life teaches me that [Life Lesson]."
        ],
        practiceQuestion: "Speak about someone you look up to and give two reasons why!",
        expectedKeywords: ["inspire", "admire", "hardworking", "kind", "because", "teaches", "qualities"]
      }
    ],
    sentenceScrambles: [
      {
        id: "s35-1",
        scrambled: ["English", "speaks", "fluent", "Aryan", "every", "day"],
        correct: "Aryan speaks fluent English every day",
        hint: "Subject + verb + adjective + noun + time expression."
      },
      {
        id: "s35-2",
        scrambled: ["conducted", "an", "We", "exciting", "experiment", "yesterday"],
        correct: "We conducted an exciting experiment yesterday",
        hint: "Start with the plural subject 'We'."
      },
      {
        id: "s35-3",
        scrambled: ["could", "give", "you", "Please", "directions", "the", "library", "to"],
        correct: "Please could you give directions to the library",
        hint: "A polite inquiry starting with 'Please'."
      },
      {
        id: "s35-4",
        scrambled: ["confidence", "Practice", "speaking", "brings", "everyday", "great"],
        correct: "Everyday speaking practice brings great confidence",
        hint: "Express the benefits of speaking drills."
      }
    ],
    aiPrompts: [
      {
        title: "A Memorable School Trip",
        prompt: "Where did you go on your last school picnic or trip, and what did you enjoy the most?",
        sampleResponse: "Last month, our school visited the Science City museum. I enjoyed the 3D space show the most because the planets looked so close!",
        difficulty: "Medium"
      },
      {
        title: "If I Were a Superhero",
        prompt: "If you had a superpower for one day, what would it be and how would you help people?",
        sampleResponse: "If I were a superhero, I would have the power to heal trees and plants so our city would always stay green and clean.",
        difficulty: "Medium"
      },
      {
        title: "Describing My Best Friend",
        prompt: "Describe your best friend. What games do you play together during recess?",
        sampleResponse: "My best friend is Ananya. She is kind and humorous. We love playing badminton and sharing our lunch boxes every afternoon.",
        difficulty: "Medium"
      }
    ],
    homework: [
      {
        id: "hw-g35-1",
        title: "Record 60-Second Role Model Speech",
        type: "Speech Recording",
        bookRef: "Book Page 32, Speech Showcase",
        description: "Speak about your hero for 1 minute. Mention who they are, their achievements, and what inspires you.",
        points: 100,
        due: "Thursday, 7:00 PM",
        status: "Pending"
      },
      {
        id: "hw-g35-2",
        title: "Market Dialogue Transcription",
        type: "Dialogue Drill",
        bookRef: "Book Page 26, Unit 2",
        description: "Listen to the audio dialogue and submit your answers to the 4 comprehension questions.",
        points: 60,
        due: "Completed on Monday",
        status: "Completed",
        score: "5/5 ⭐",
        teacherNote: "Fantastic intonation and voice modulation! Keep it up!"
      }
    ]
  },

  "grade-6-8": {
    name: "Fluent Speakers (Grades 6–8)",
    bookTheme: "Talk & Connect",
    subtitle: "Opinions, Fluency & Debate Mastery",
    levelBadge: "Level 3: Expansion",
    avatar: "⚡",
    weeklyLessons: [
      {
        id: "g68-w1",
        week: "Week 1",
        title: "The Smart Screen Dilemma",
        focus: "Expressing Nuanced Opinions & Balanced Arguments",
        bookChapter: "Chapter 1: Screens vs. Pages",
        dialogue: [
          { speaker: "Debate Moderator", text: "Are smartphones helping or hindering middle school students' attention span?" },
          { speaker: "You", text: "In my perspective, smartphones are powerful learning tools, provided students cultivate self-discipline." },
          { speaker: "Debate Moderator", text: "That is a thoughtful point. However, what about digital distractions during study hours?" },
          { speaker: "You", text: "That is certainly a legitimate concern. Establishing scheduled screen-free zones at home can effectively resolve that." }
        ],
        vocabulary: [
          { word: "Perspective", phonetic: "/pəˈspek.tɪv/", meaning: "A particular attitude toward or way of regarding something", example: "From an environmental perspective, renewable energy is essential." },
          { word: "Hindering", phonetic: "/ˈhɪn.dər.ɪŋ/", meaning: "Making it difficult for someone to do something", example: "Loud noise was hindering my exam concentration." },
          { word: "Self-discipline", phonetic: "/ˌselfˈdɪs.ə.plɪn/", meaning: "The ability to control your own behavior and actions", example: "Daily speaking practice requires good self-discipline." },
          { word: "Legitimate", phonetic: "/ləˈdʒɪt.ə.mət/", meaning: "Reasonable, acceptable, or justified", example: "She raised a legitimate question about project deadlines." }
        ],
        sentencePatterns: [
          "From my perspective, [Statement], although one must consider [Alternative].",
          "While it is undeniably true that [Counterpoint], we must not overlook [Main Point].",
          "On the contrary, evidence indicates that [Evidence]."
        ],
        practiceQuestion: "Give a 1-minute balanced argument on whether school uniforms should be mandatory!",
        expectedKeywords: ["perspective", "uniform", "equality", "discipline", "individuality", "believe", "however"]
      },
      {
        id: "g68-w2",
        week: "Week 2",
        title: "Environmental Stewards",
        focus: "Problem-Solving & Persuasive Propositions",
        bookChapter: "Chapter 2: Eco Warriors of Tomorrow",
        dialogue: [
          { speaker: "Council Head", text: "What practical initiative can our student council launch to cut single-use plastic?" },
          { speaker: "You", text: "I propose introducing personalized stainless steel flasks and rewarding waste-free tiffin boxes." },
          { speaker: "Council Head", text: "How can we ensure enthusiastic student participation?" },
          { speaker: "You", text: "By turning it into an inter-house green cup competition with weekly leaderboard recognition." }
        ],
        vocabulary: [
          { word: "Steward", phonetic: "/ˈstjuː.əd/", meaning: "Someone who manages and looks after property or resources", example: "We must be stewards of our planet's forests." },
          { word: "Initiative", phonetic: "/ɪˈnɪʃ.ə.tɪv/", meaning: "A new plan or process to achieve something", example: "The zero-waste initiative won national praise." },
          { word: "Sustainable", phonetic: "/səˈsteɪ.nə.bəl/", meaning: "Able to continue over a period of time without harming nature", example: "Solar energy is a sustainable power source." },
          { word: "Participation", phonetic: "/pɑːˌtɪs.ɪˈpeɪ.ʃən/", meaning: "The act of taking part in an event or activity", example: "Student participation in debates has doubled." }
        ],
        sentencePatterns: [
          "I propose that we implement [Solution] in order to address [Problem].",
          "This strategy would not only reduce [Harm], but also foster [Benefit].",
          "Consequently, students will develop lifelong habits of [Habit]."
        ],
        practiceQuestion: "Present an innovative idea to conserve water or electricity on your campus!",
        expectedKeywords: ["conserve", "water", "electricity", "initiative", "reduce", "campus", "save"]
      },
      {
        id: "g68-w3",
        week: "Week 3",
        title: "Art of Polite Disagreement",
        focus: "Diplomatic Vocabulary & Counter-Arguments",
        bookChapter: "Chapter 3: Civil Discourse & Respect",
        dialogue: [
          { speaker: "Peer Speaker", text: "I believe written tests are the only reliable way to evaluate intelligence." },
          { speaker: "You", text: "I understand your rationale, but I respectfully disagree. Intelligence spans creativity, communication, and emotional empathy." },
          { speaker: "Peer Speaker", text: "How would teachers grade emotional empathy objectively?" },
          { speaker: "You", text: "Through team presentations, peer collaborative projects, and live speaking evaluations." }
        ],
        vocabulary: [
          { word: "Rationale", phonetic: "/ˌræʃ.əˈnɑːl/", meaning: "The reasons or intentions for a particular decision", example: "Explain the rationale behind your project choices." },
          { word: "Respectfully", phonetic: "/rɪˈspekt.fəl.i/", meaning: "In a way that shows honor and polite consideration", example: "I respectfully disagree with that assertion." },
          { word: "Empathy", phonetic: "/ˈem.pə.θi/", meaning: "The ability to share someone else's feelings", example: "Good communicators listen with active empathy." },
          { word: "Collaborative", phonetic: "/kəˈlæb.ər.ə.tɪv/", meaning: "Produced or conducted by two or more parties working together", example: "Collaborative problem-solving produces the finest innovations." }
        ],
        sentencePatterns: [
          "I see where you are coming from, yet [Counter-argument].",
          "With all due respect, the evidence suggests an alternative conclusion.",
          "While your argument holds merit in certain contexts, it overlooks [Factor]."
        ],
        practiceQuestion: "Practice disagreeing politely with someone who claims sports are a waste of study time!",
        expectedKeywords: ["respectfully", "understand", "sports", "health", "mind", "balance", "focus"]
      },
      {
        id: "g68-w4",
        week: "Week 4",
        title: "The 90-Second Elevator Pitch",
        focus: "Concise Structuring: Hook, Value, Call to Action",
        bookChapter: "Chapter 4: Speak with Impact",
        dialogue: [
          { speaker: "Investor AI", text: "You have 60 seconds on the clock. What is your club's project idea?" },
          { speaker: "You", text: "Imagine reading your textbook, and with one QR scan, practicing pronunciation with an AI coach. That is Excellence Talk." },
          { speaker: "Investor AI", text: "Remarkable hook! Why is this better than traditional lecture methods?" },
          { speaker: "You", text: "Because it converts passive listeners into active, confident speakers every single day!" }
        ],
        vocabulary: [
          { word: "Concise", phonetic: "/kənˈsaɪs/", meaning: "Expressing much in few words; brief and clear", example: "Deliver a concise pitch in under two minutes." },
          { word: "Compelling", phonetic: "/kəmˈpel.ɪŋ/", meaning: "Evoking interest or attention in an irresistible way", example: "She gave a compelling presentation to the class." },
          { word: "Rhetoric", phonetic: "/ˈret.ər.ɪk/", meaning: "The art of effective or persuasive speaking", example: "Mastering rhetoric helped him win the elocution trophy." },
          { word: "Conviction", phonetic: "/kənˈvɪk.ʃən/", meaning: "A firmly held belief or opinion; certainty", example: "Speak with deep conviction and steady eye contact." }
        ],
        sentencePatterns: [
          "Have you ever wondered why [Relatable Challenge]?",
          "Our solution directly bridges this gap by [Action].",
          "Join us in transforming [Vision] into reality."
        ],
        practiceQuestion: "Deliver a 60-second pitch introducing an app that teaches students how to code or paint!",
        expectedKeywords: ["imagine", "problem", "solution", "benefit", "future", "join", "transform"]
      }
    ],
    sentenceScrambles: [
      {
        id: "s68-1",
        scrambled: ["perspective", "In", "my", "vital", "communication", "leadership", "is", "for"],
        correct: "In my perspective communication is vital for leadership",
        hint: "Begin with 'In my perspective'."
      },
      {
        id: "s68-2",
        scrambled: ["respectfully", "disagree", "I", "premise", "that", "with", "untested"],
        correct: "I respectfully disagree with that untested premise",
        hint: "Polite disagreement structure."
      },
      {
        id: "s68-3",
        scrambled: ["sustainable", "fosters", "active", "Every", "action", "change", "meaningful"],
        correct: "Every active sustainable action fosters meaningful change",
        hint: "Environmental sentence construction."
      },
      {
        id: "s68-4",
        scrambled: ["hesitation", "Consistent", "eliminates", "practice", "speaking", "stage"],
        correct: "Consistent speaking practice eliminates stage hesitation",
        hint: "Subject + verb + object."
      }
    ],
    aiPrompts: [
      {
        title: "Artificial Intelligence in Education",
        prompt: "Do you believe AI teachers will ever completely replace human teachers in schools? Defend your view.",
        sampleResponse: "While AI can provide 24/7 personalized practice and grading, it lacks the human empathy, emotional mentorship, and moral inspiration that real teachers bring to our lives.",
        difficulty: "Challenging"
      },
      {
        title: "Social Media: Boon or Bane?",
        prompt: "Express your perspective on how social media impacts teenagers' friendships and mental health.",
        sampleResponse: "Social media connects us across borders, yet excessive scrolling can induce anxiety and unrealistic comparisons. Moderation and conscious digital balance are essential.",
        difficulty: "Challenging"
      },
      {
        title: "The Book That Changed My Thinking",
        prompt: "Summarize a book or documentary that left a profound impression on your world view.",
        sampleResponse: "Reading 'Wings of Fire' by Dr. Kalam showed me that adversity is not a barrier to greatness, but the very crucible that shapes character and perseverance.",
        difficulty: "Challenging"
      }
    ],
    homework: [
      {
        id: "hw-g68-1",
        title: "90-Second Extempore Speech",
        type: "Recorded Audio",
        bookRef: "Book Page 48, Chapter 3 Debate Prep",
        description: "Topic: 'Is failure a necessary stepping stone to success?' Record your speech maintaining clear pace and minimal fillers.",
        points: 120,
        due: "Friday, 8:00 PM",
        status: "Pending"
      },
      {
        id: "hw-g68-2",
        title: "Connector & Discourse Marker Drill",
        type: "Syntax Exercise",
        bookRef: "Book Page 52, Communication Lab",
        description: "Construct 5 compound-complex sentences utilizing 'Notwithstanding', 'Furthermore', and 'Consequently'.",
        points: 80,
        due: "Submitted Wednesday",
        status: "Completed",
        score: "4.8/5 ⭐",
        teacherNote: "Excellent sophistication in syntax! Watch pause length between clauses."
      }
    ]
  },

  "grade-9-10": {
    name: "Persuasive Leaders (Grades 9–10)",
    bookTheme: "Talk & Lead",
    subtitle: "Rhetoric, Parliamentary Debate & Stage Power",
    levelBadge: "Level 4: Mastery",
    avatar: "👑",
    weeklyLessons: [
      {
        id: "g910-w1",
        week: "Week 1",
        title: "Monroe's Motivated Sequence",
        focus: "5-Step Persuasive Architecture: Attention, Need, Satisfaction, Visualization, Action",
        bookChapter: "Chapter 1: The Anatomy of Persuasion",
        dialogue: [
          { speaker: "Debate Coach", text: "Walk me through how you will structure your address on renewable campus power." },
          { speaker: "You", text: "I initiate with a striking statistic on energy depletion, pinpoint our campus carbon footprint, present the solar transition blueprint, depict the green campus of 2030, and call for unanimous student council ratification." },
          { speaker: "Debate Coach", text: "Masterful application of Monroe's sequence! How will you maintain audience rapport during the data transition?" },
          { speaker: "You", text: "By using vivid analogies rather than dry figures, maintaining deliberate eye contact across the auditorium." }
        ],
        vocabulary: [
          { word: "Depletion", phonetic: "/dɪˈpliː.ʃən/", meaning: "Reduction in the number or quantity of something", example: "The rapid depletion of groundwater demands urgent conservation." },
          { word: "Unanimous", phonetic: "/juːˈnæn.ɪ.məs/", meaning: "Fully in agreement; shared by all", example: "The proposal won unanimous approval from the faculty." },
          { word: "Rapport", phonetic: "/ræpˈɔːr/", meaning: "A close and harmonious relationship based on mutual understanding", example: "An effective speaker establishes instant rapport with the audience." },
          { word: "Deliberate", phonetic: "/dɪˈlɪb.ər.ət/", meaning: "Done consciously and intentionally; unhurried", example: "He used deliberate pauses to emphasize key arguments." }
        ],
        sentencePatterns: [
          "Let us confront an inescapable reality: [Stark Fact].",
          "The crux of the matter lies not merely in [Symptom], but fundamentally in [Root Cause].",
          "I urge each member present here today to commit to [Call to Action]."
        ],
        practiceQuestion: "Deliver the opening 60 seconds of a persuasive speech urging schools to replace paper exams with digital portfolios!",
        expectedKeywords: ["confront", "reality", "urgent", "portfolio", "future", "potential", "action"]
      },
      {
        id: "g910-w2",
        week: "Week 2",
        title: "Parliamentary Rebuttal Techniques",
        focus: "Deconstructing Fallacies & Point of Information (POI)",
        bookChapter: "Chapter 2: The Floor is Yours",
        dialogue: [
          { speaker: "Opposition Lead", text: "Point of Information! Your model relies upon unproven optimistic fiscal projections." },
          { speaker: "You", text: "Point declined. The honourable member conflates initial capital expenditure with long-term amortization, as audited by third-party benchmarks." },
          { speaker: "Opposition Lead", text: "Can you cite independent corroboration for this benchmark?" },
          { speaker: "You", text: "Certainly. Both the State Renewable Energy Bureau and UNESCO research papers confirm net-positive return within 36 months." }
        ],
        vocabulary: [
          { word: "Conflate", phonetic: "/kənˈfleɪt/", meaning: "To combine two or more distinct ideas into one", example: "Do not conflate confidence with arrogance." },
          { word: "Amortization", phonetic: "/əˌmɔː.tɪˈzeɪ.ʃən/", meaning: "The action of gradually writing off initial costs over time", example: "The capital amortization will take three fiscal quarters." },
          { word: "Corroboration", phonetic: "/kəˌrɒb.əˈreɪ.ʃən/", meaning: "Evidence that confirms or supports a statement or theory", example: "We demand empirical corroboration for these claims." },
          { word: "Fallacy", phonetic: "/ˈfæl.ə.si/", meaning: "A mistaken belief or flaw in reasoning", example: "His argument rested on a classic straw-man fallacy." }
        ],
        sentencePatterns: [
          "The honourable member inadvertently falls into the trap of [Fallacy].",
          "Contrary to the assertion put forth by the opposition, empirical evidence demonstrates [Fact].",
          "Allow me to systematically dismantle the three contentions raised."
        ],
        practiceQuestion: "Rebut the argument that AI will eliminate all human writing and creativity in the next decade!",
        expectedKeywords: ["contrary", "assertion", "human", "creativity", "nuance", "soul", "rebut"]
      },
      {
        id: "g910-w3",
        week: "Week 3",
        title: "The Art of Elocution & Vocal Dynamics",
        focus: "Modulation, Cadence, Pitch, and Pauses",
        bookChapter: "Chapter 3: Voice as an Instrument",
        dialogue: [
          { speaker: "Speech Maestro", text: "Deliver this line with escalating emotional tension: 'Injustice anywhere is a threat to justice everywhere.'" },
          { speaker: "You", text: "(Low tempo) Injustice anywhere... (Pause, resonance builds) is a direct threat... to justice everywhere!" },
          { speaker: "Speech Maestro", text: "Superb tonal crescendo. Notice how the silence between words amplified the gravity?" },
          { speaker: "You", text: "Yes! Silence acts as punctuation for the listener's ear." }
        ],
        vocabulary: [
          { word: "Cadence", phonetic: "/ˈkeɪ.dəns/", meaning: "Rhythmic flow of a sequence of sounds or words", example: "Her soothing vocal cadence mesmerized the audience." },
          { word: "Crescendo", phonetic: "/krəˈʃen.dəʊ/", meaning: "A gradual increase in loudness or intensity", example: "The speech reached an electrifying emotional crescendo." },
          { word: "Gravity", phonetic: "/ˈɡræv.ə.ti/", meaning: "Extreme seriousness or importance", example: "The speaker spoke with utmost gravity and conviction." },
          { word: "Articulation", phonetic: "/ɑːˌtɪk.jəˈleɪ.ʃən/", meaning: "The clear and distinct enunciation of speech", example: "Crisp articulation ensures clarity in large halls." }
        ],
        sentencePatterns: [
          "Notice the deliberate variation: we whisper to draw them close, we thunder to stir them to action.",
          "Through measured cadence and resonant delivery, an idea transforms into a movement.",
          "Let silence do the heavy lifting before delivering your core thesis."
        ],
        practiceQuestion: "Recite Martin Luther King Jr.'s iconic line with dynamic pitch, cadence, and deliberate pausing!",
        expectedKeywords: ["dream", "injustice", "justice", "nation", "character", "freedom"]
      },
      {
        id: "g910-w4",
        week: "Week 4",
        title: "Interview Readiness & Personal Pitch",
        focus: "STAR Method (Situation, Task, Action, Result) for Student Leadership Interviews",
        bookChapter: "Chapter 4: The Leadership Interview",
        dialogue: [
          { speaker: "Interviewer", text: "Tell me about an instance when you navigated conflict within a school project team." },
          { speaker: "You", text: "During our science exhibition, two members contested design direction. As team lead, I held a consensus meeting, synthesized their divergent views into a hybrid model, and our team secured first place." },
          { speaker: "Interviewer", text: "Exemplary conciseness. How did you maintain morale when deadlines were tight?" },
          { speaker: "You", text: "By breaking milestones into daily micro-deliverables and recognizing each contribution publicly." }
        ],
        vocabulary: [
          { word: "Consensus", phonetic: "/kənˈsen.səs/", meaning: "General agreement among a group", example: "We achieved consensus after a constructive hour of dialogue." },
          { word: "Synthesize", phonetic: "/ˈsɪn.θə.saɪz/", meaning: "To combine different ideas into a coherent whole", example: "He synthesized diverse feedback into a winning pitch." },
          { word: "Divergent", phonetic: "/daɪˈvɜː.dʒənt/", meaning: "Developing in different directions; differing", example: "The panel brought divergent perspectives to the table." },
          { word: "Exemplary", phonetic: "/ɪɡˈzem.plər.i/", meaning: "Serving as a desirable model; outstanding", example: "Her exemplary conduct earned the school medal." }
        ],
        sentencePatterns: [
          "When faced with [Challenging Situation], my immediate priority was to [Strategic Action].",
          "By employing [Methodology], we not only mitigated the risk but achieved [Quantifiable Result].",
          "This experience solidified my understanding of collaborative leadership."
        ],
        practiceQuestion: "Use the STAR method to describe an academic or sports obstacle you successfully overcame!",
        expectedKeywords: ["situation", "task", "action", "result", "overcame", "team", "learned"]
      }
    ],
    sentenceScrambles: [
      {
        id: "s910-1",
        scrambled: ["eloquence", "True", "manipulation", "persuasion", "is", "never", "authentic"],
        correct: "True eloquence is authentic persuasion never manipulation",
        hint: "Philosophical maxim on rhetoric."
      },
      {
        id: "s910-2",
        scrambled: ["empirical", "unsubstantiated", "Demanding", "debater", "rigorous", "dismantles", "claims", "a"],
        correct: "Demanding empirical corroboration dismantles unsubstantiated claims",
        hint: "Parliamentary debating strategy."
      },
      {
        id: "s910-3",
        scrambled: ["cadence", "Vocal", "resonance", "amplifies", "deliberate", "and", "conviction"],
        correct: "Vocal cadence and deliberate resonance amplifies conviction",
        hint: "Vocal dynamics formulation."
      },
      {
        id: "s910-4",
        scrambled: ["consensus", "Synthesizing", "divergent", "perspectives", "harmonious", "establishes", "progress"],
        correct: "Synthesizing divergent perspectives establishes harmonious progress",
        hint: "Leadership sentence formation."
      }
    ],
    aiPrompts: [
      {
        title: "Parliamentary Debate: Cashless Society",
        prompt: "The Motion: 'This House would accelerate the complete abolition of physical cash in favor of digital sovereign currencies.' Argue either for the Proposition or Opposition in 90 seconds.",
        sampleResponse: "While digitizing currency expedites transaction velocity and thwarts illicit shadow economies, total abolition disproportionately disenfranchises rural demographics lacking resilient digital infrastructure and infringes upon personal financial privacy.",
        difficulty: "Advanced"
      },
      {
        title: "Leadership Crisis Simulation",
        prompt: "You are the Head Boy/Head Girl. Due to unseasonal torrential rain, the annual school carnival faces cancellation 2 hours prior to inauguration. Deliver your motivational announcement to the student body.",
        sampleResponse: "Good morning fellow students. While rain may have relocated us from the open grounds to the auditorium, our months of dedication remain undampened. Today we showcase our adaptability. Let us transform this indoor venue into our most memorable celebration yet!",
        difficulty: "Advanced"
      },
      {
        title: "Model UN Opening Plenary",
        prompt: "Deliver a 90-second delegate opening address advocating for global climate adaptation funds for island nations.",
        sampleResponse: "Honourable chairs and fellow distinguished delegates. While continental superpowers deliberate over decimal points on emissions targets, our island nations are measuring sea level rise on our doorsteps. Words will not stem the tide; immediate fiscal transfers will.",
        difficulty: "Advanced"
      }
    ],
    homework: [
      {
        id: "hw-g910-1",
        title: "2-Minute Video/Voice MUN Plenary Address",
        type: "Persuasive Monologue",
        bookRef: "Book Page 72, Chapter 4 Model UN Blueprint",
        description: "Deliver a diplomatic address advocating for ethical AI governance in schools. Maintain cadence, varied register, and zero filler pauses.",
        points: 150,
        due: "Saturday, 9:00 PM",
        status: "Pending"
      },
      {
        id: "hw-g910-2",
        title: "Parliamentary Fallacy Identification",
        type: "Critical Analysis",
        bookRef: "Book Page 68, Fallacy Matrix",
        description: "Analyze the attached transcript of a televised debate and annotate 4 logical fallacies with proposed counter-rebuttals.",
        points: 100,
        due: "Completed Tuesday",
        status: "Completed",
        score: "5/5 ⭐",
        teacherNote: "Exceptional analytical precision! Ready for the inter-school championship."
      }
    ]
  },

  "college": {
    name: "Global Professionals (College / Higher Ed)",
    bookTheme: "Professional English & Employability",
    subtitle: "Group Discussions, Campus Interviews & Executive Pitching",
    levelBadge: "Level 5: Employability",
    avatar: "💼",
    weeklyLessons: [
      {
        id: "col-w1",
        week: "Week 1",
        title: "Art of Initiating and Moderating a Case GD",
        focus: "Group Discussion Strategy: The 3 P's (Perspective, Problem, Proposition)",
        bookChapter: "Chapter 1: The Boardroom Crucible",
        dialogue: [
          { speaker: "GD Moderator", text: "The topic is: 'Electric Vehicles in India: Commercial Viability vs. Infrastructure Readiness.' You may begin." },
          { speaker: "You", text: "Good morning colleagues. To structure our discussion productively, let us bifurcate this into three critical dimensions: charging grid infrastructure, battery raw material localization, and consumer affordability parity." },
          { speaker: "Candidate B", text: "I agree with the framework. However, shouldn't government subsidies be the starting catalyst?" },
          { speaker: "You", text: "Spot on point. Let us evaluate policy tailwinds as the primary accelerant for charging grid deployment." }
        ],
        vocabulary: [
          { word: "Bifurcate", phonetic: "/ˈbaɪ.fə.keɪt/", meaning: "To divide into two branches or parts", example: "Let us bifurcate the project into Phase 1 and Phase 2." },
          { word: "Tailwinds", phonetic: "/ˈteɪl.wɪndz/", meaning: "Forces or factors that promote growth or success", example: "Favorable policy tailwinds boosted solar investments." },
          { word: "Viability", phonetic: "/ˌvaɪ.əˈbɪl.ə.ti/", meaning: "Ability to work successfully or be sustained", example: "The commercial viability depends upon scale." },
          { word: "Catalyst", phonetic: "/ˈkæt.əl.ɪst/", meaning: "A person or thing that causes an important event to happen", example: "AI was the catalyst for digital education reform." }
        ],
        sentencePatterns: [
          "To channel our discourse constructively, I suggest establishing a 3-pillar framework...",
          "While Candidate A rightly underscores [Point A], Candidate B highlights a vital corollary...",
          "Synthesizing the diverse viewpoints shared thus far, our consensus converges on..."
        ],
        practiceQuestion: "Deliver the opening 45-second initiation for a Group Discussion on 'Moonlighting: Ethical Violation or Gig Economy Reality?'",
        expectedKeywords: ["colleagues", "framework", "dimensions", "perspective", "consensus", "structure"]
      },
      {
        id: "col-w2",
        week: "Week 2",
        title: "Technical & HR Mock Interview Mastery",
        focus: "Elevating the 'Tell Me About Yourself' from Resume Recitation to Value Proposition",
        bookChapter: "Chapter 2: The 90-Second Executive Pitch",
        dialogue: [
          { speaker: "HR Director", text: "Aryan, take me beyond what is written on your resume. What drives you?" },
          { speaker: "You", text: "I consider myself a bridge between technical logic and human-centric design. While studying computer science, I observed non-technical peers struggling with spoken English. That spurred me to build interactive digital tools." },
          { speaker: "HR Director", text: "How did that initiative translate into measurable leadership growth?" },
          { speaker: "You", text: "It required cross-functional collaboration, active empathy, and relentless iterative feedback—competencies I am eager to contribute to your enterprise team." }
        ],
        vocabulary: [
          { word: "Competencies", phonetic: "/ˈkɒm.pɪ.tən.siz/", meaning: "The skills, knowledge, or abilities needed to do a job", example: "Core competencies include problem solving and articulation." },
          { word: "Human-centric", phonetic: "/ˈhjuː.mənˌsen.trɪk/", meaning: "Focusing primarily on human needs, values, and experiences", example: "Design human-centric solutions for real users." },
          { word: "Cross-functional", phonetic: "/ˌkrɒsˈfʌŋk.ʃən.əl/", meaning: "Involving people from different departments or areas", example: "Cross-functional agility is prized in tech startups." },
          { word: "Proposition", phonetic: "/ˌprɒp.əˈzɪʃ.ən/", meaning: "A statement of value or plan presented for consideration", example: "Define your personal value proposition clearly." }
        ],
        sentencePatterns: [
          "My professional journey is anchored by a persistent passion for [Domain/Core Driver].",
          "What distinguishes my trajectory is the intersection between [Skill 1] and [Skill 2].",
          "I thrive in environments where autonomous ownership is paired with collaborative impact."
        ],
        practiceQuestion: "Deliver your crisp 90-second 'Tell Me About Yourself' pitch highlighting your core strength!",
        expectedKeywords: ["passion", "journey", "problem", "solve", "collaborative", "impact", "strengths"]
      },
      {
        id: "col-w3",
        week: "Week 3",
        title: "Executive Business Presentations",
        focus: "Data Storytelling, Eliminating Fillers, and Executive Gravitas",
        bookChapter: "Chapter 3: Pitching to the Board",
        dialogue: [
          { speaker: "Venture Partner", text: "Your churn rate dropped 18%, but customer acquisition costs climbed. Why should we greenlight round two?" },
          { speaker: "You", text: "Because the CAC uptick is a temporary feature of our institutional enterprise pilot. High enterprise LTV over 24 months yields a 4.2x capital return, outperforming the ed-tech median." },
          { speaker: "Venture Partner", text: "Compelling articulation. What is your go-to-market moat?" },
          { speaker: "You", text: "Our synchronized Phygital ecosystem—pairing physical curriculum books with daily AI speaking drills creates unbreakable campus adoption." }
        ],
        vocabulary: [
          { word: "Gravitas", phonetic: "/ˈɡræv.ɪ.tæs/", meaning: "Dignity, seriousness, or solemnity of manner", example: "The young founder spoke with unexpected gravitas." },
          { word: "Moat", phonetic: "/məʊt/", meaning: "A distinct competitive advantage that protects a business", example: "Proprietary AI speech models form our competitive moat." },
          { word: "Synchronized", phonetic: "/ˈsɪŋ.krə.naɪzd/", meaning: "Occurring at the same time or operating in unison", example: "A synchronized curriculum ensures consistent mastery." },
          { word: "Articulation", phonetic: "/ɑːˌtɪk.jəˈleɪ.ʃən/", meaning: "The clear expression of ideas in speech", example: "Clear articulation is the primary weapon of an executive." }
        ],
        sentencePatterns: [
          "The data reflects three unambiguous takeaways: first, [Metric A]; second, [Metric B]...",
          "Rather than viewing this variance as an anomaly, it signals a strategic inflection point.",
          "Consequently, our recommendation is to double down on [Strategic Priority]."
        ],
        practiceQuestion: "Pitch a new green campus initiative to the college trustees in 90 seconds!",
        expectedKeywords: ["trustees", "investment", "campus", "sustainability", "data", "return", "future"]
      },
      {
        id: "col-w4",
        week: "Week 4",
        title: "Crisis Communication & Cross-Cultural Fluency",
        focus: "Diplomacy, Managing Difficult Stakeholders, Global Accent Neutrality",
        bookChapter: "Chapter 4: Navigating the Global Corporate Stage",
        dialogue: [
          { speaker: "Global Client Lead", text: "Our overseas deployment encountered a 48-hour system outage. Our European stakeholders are furious." },
          { speaker: "You", text: "We unreservedly acknowledge the business disruption this caused. We have mobilized a 24-hour response squad, isolated the database latency, and will deliver hourly status briefings until full restitution." },
          { speaker: "Global Client Lead", text: "Thank you for the transparent ownership and measured tone." },
          { speaker: "You", text: "Transparency and prompt restitution are our commitments to our global partners." }
        ],
        vocabulary: [
          { word: "Restitution", phonetic: "/ˌres.tɪˈtʃuː.ʃən/", meaning: "The restoration of something lost or stolen to its proper state", example: "The company provided immediate restitution to impacted users." },
          { word: "Unreservedly", phonetic: "/ˌʌn.rɪˈzɜː.vɪd.li/", meaning: "Frankly and without hesitation; completely", example: "We unreservedly apologize for the inconvenience." },
          { word: "Stakeholder", phonetic: "/ˈsteɪkˌhəʊl.dər/", meaning: "A person with an interest or concern in a business", example: "Address every stakeholder with clarity and professional decorum." },
          { word: "Decorum", phonetic: "/dɪˈkɔː.rəm/", meaning: "Polite behavior and good taste in conduct", example: "He maintained absolute decorum under hostile questioning." }
        ],
        sentencePatterns: [
          "We take full institutional accountability for this operational shortfall.",
          "Our prompt mitigation plan rests upon three time-bound pillars...",
          "We value your partnership and remain accessible across all communication channels."
        ],
        practiceQuestion: "Simulate de-escalating an upset corporate client whose project launch was delayed by 3 days!",
        expectedKeywords: ["accountability", "mitigate", "partners", "restitution", "transparency", "priority"]
      }
    ],
    sentenceScrambles: [
      {
        id: "scol-1",
        scrambled: ["constructively", "moderating", "discourse", "Effective", "consensus", "catalyzes", "rapid"],
        correct: "Effective moderating constructively catalyzes rapid consensus",
        hint: "Group discussion leadership principle."
      },
      {
        id: "scol-2",
        scrambled: ["proposition", "articulates", "distinct", "value", "candidate", "A", "compelling", "a"],
        correct: "A compelling candidate articulates a distinct value proposition",
        hint: "Interview readiness syntax."
      },
      {
        id: "scol-3",
        scrambled: ["inflection", "strategic", "data", "signals", "This", "clear", "point", "a"],
        correct: "This clear data signals a strategic inflection point",
        hint: "Executive data storytelling."
      },
      {
        id: "scol-4",
        scrambled: ["decorum", "diplomatic", "stakeholders", "Maintained", "global", "reassures", "agitated"],
        correct: "Maintained diplomatic decorum reassures agitated global stakeholders",
        hint: "Crisis communication structure."
      }
    ],
    aiPrompts: [
      {
        title: "Executive GD Simulation: Remote vs. Office",
        prompt: "Enter a live GD simulation on: 'Hybrid Work Models vs. 100% In-Office Mandates for Fresh Engineering Hires'. Deliver your 60-second synthesis point.",
        sampleResponse: "While in-office environments dramatically accelerate osmosis-based mentorship and peer camaraderie for fresh graduates, forced mandates without flexibility deter top-tier talent. The optimal model is 3 days collocated for sprint planning and design sprints, with autonomous remote execution for deep work.",
        difficulty: "Professional"
      },
      {
        title: "Corporate HR Behavioral Interview",
        prompt: "Interviewer asks: 'Describe a time you failed to meet a vital project deadline. How did you manage expectations?'",
        sampleResponse: "During our final semester capstone, an API deprecation broke our user authentication module 4 days before the showcase. Rather than concealing the setback, I immediately informed our project guide, proposed a prioritized minimum-viable feature set, and worked overtime with my backend teammate to deliver on time.",
        difficulty: "Professional"
      },
      {
        title: "Seed Pitch: 60-Second Investor Elevator",
        prompt: "Pitch an educational ed-tech solution bridging the spoken English gap across Tier-2 and Tier-3 engineering colleges.",
        sampleResponse: "Over 80% of Indian engineering graduates struggle to clear corporate HR interviews solely due to English speaking hesitation, not technical incompetence. Excellence Talk bridges this multi-billion dollar employability bottleneck through physical books and 24/7 AI conversational voice drills.",
        difficulty: "Professional"
      }
    ],
    homework: [
      {
        id: "hw-col-1",
        title: "3-Minute Video Pitch: 'Why Hire Me?'",
        type: "Executive Video Pitch",
        bookRef: "Employability Guide, Module 3",
        description: "Record a 3-minute executive self-introduction aligning your real projects with core competencies required by Fortune 500 recruiters.",
        points: 200,
        due: "Sunday, 10:00 PM",
        status: "Pending"
      },
      {
        id: "hw-col-2",
        title: "Case GD Framework Submission",
        type: "Written & Audio Brief",
        bookRef: "Employability Guide, Module 1",
        description: "Submit a 3-pillar discussion framework for the case: 'Fintech Disruption of Rural Banking'. Include initiation and conclusion voice notes.",
        points: 120,
        due: "Completed Yesterday",
        status: "Completed",
        score: "5/5 ⭐",
        teacherNote: "Impeccable structural clarity! Ready for tier-1 campus placement GDs."
      }
    ]
  }
};

// Learning Games Database
const GAMES_DATA = {
  flashcards: [
    { word: "Articulate", phonetic: "/ɑːˈtɪk.jə.lət/", meaning: "Expressing ideas clearly and fluently in speech", category: "Vocabulary", grade: "All" },
    { word: "Hesitation", phonetic: "/ˌhez.ɪˈteɪ.ʃən/", meaning: "The state of pausing before doing or saying something", category: "Fluency", grade: "All" },
    { word: "Empathy", phonetic: "/ˈem.pə.θi/", meaning: "Understanding and sharing feelings of another person", category: "Character", grade: "All" },
    { word: "Confidence", phonetic: "/ˈkɒn.fɪ.dəns/", meaning: "Faith in one's own ability to speak and succeed", category: "Mindset", grade: "All" },
    { word: "Cadence", phonetic: "/ˈkeɪ.dəns/", meaning: "The rhythmic rise and fall of vocal tone", category: "Pronunciation", grade: "All" },
    { word: "Eloquent", phonetic: "/ˈel.ə.kwənt/", meaning: "Fluent or persuasive in speaking or writing", category: "Mastery", grade: "All" },
    { word: "Persuade", phonetic: "/pəˈsweɪd/", meaning: "To convince someone through reasoning or argument", category: "Speaking", grade: "All" },
    { word: "Resilience", phonetic: "/rɪˈzɪl.jəns/", meaning: "The capacity to recover quickly from speaking mistakes", category: "Mindset", grade: "All" }
  ],
  grammarQuiz: [
    {
      question: "Choose the grammatically correct sentence for polite conversation:",
      options: [
        "Give me the textbook right now.",
        "Could you please pass me the textbook when you finish?",
        "I want textbook give it.",
        "Textbook pass fast."
      ],
      correctIndex: 1,
      explanation: "'Could you please...' is the gold-standard polite English sentence frame."
    },
    {
      question: "Which connector indicates an opposing perspective in a debate?",
      options: [
        "Furthermore",
        "Consequently",
        "Notwithstanding this assertion",
        "In addition"
      ],
      correctIndex: 2,
      explanation: "'Notwithstanding this assertion' signals a sophisticated, polite counter-argument."
    },
    {
      question: "Identify the correct past tense usage for daily storytelling:",
      options: [
        "Yesterday I go to the library and speak to the mentor.",
        "Yesterday I went to the library and spoke to the mentor.",
        "Yesterday I am going to library and spoke.",
        "Yesterday I will go and speaking."
      ],
      correctIndex: 1,
      explanation: "Actions in the past require past simple forms: 'went' and 'spoke'."
    },
    {
      question: "When speaking in front of an audience, pausing before a key point is called:",
      options: [
        "A speaking mistake",
        "A deliberate rhetorical pause",
        "Stammering",
        "Filler distraction"
      ],
      correctIndex: 1,
      explanation: "A deliberate pause allows the audience to absorb gravity and builds dramatic anticipation."
    },
    {
      question: "Fill in the blank: Neither the teacher nor the students ____ hesitant to speak.",
      options: [
        "were",
        "was",
        "is",
        "are not"
      ],
      correctIndex: 0,
      explanation: "With 'neither... nor...', the verb agrees with the closer subject ('the students' -> 'were')."
    }
  ],
  tongueTwisters: [
    {
      title: "The Clatter of Clarity",
      text: "Six sleek swans sailed swiftly southwards along the sunny stream.",
      targetSound: "S and Sw sound clarity",
      xp: 30
    },
    {
      title: "Proper Public Presence",
      text: "Peter Piper presented a powerful, persuasive pitch to polished professionals.",
      targetSound: "P plosive articulation",
      xp: 40
    },
    {
      title: "Fearless Fluency Flow",
      text: "Fluent speakers fear no flaws when fearless practice forms their flow.",
      targetSound: "F and Fl enunciation",
      xp: 50
    },
    {
      title: "The Tongue Twister Master",
      text: "Which wicked witch wished for wondrous words while walking through wild woods?",
      targetSound: "W vowel rounded sound",
      xp: 60
    }
  ]
};

// Export to window
if (typeof window !== "undefined") {
  window.CURRICULUM_DATA = CURRICULUM_DATA;
  window.GAMES_DATA = GAMES_DATA;
}
