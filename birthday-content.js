// ============================================================
// BIRTHDAY SURPRISE CONFIGURATION & CONTENT
// Exact content from the reference video (Heartcraft replica)
// You can edit any text or names below to personalize!
// ============================================================

const BIRTHDAY_CONFIG = {
  // Recipient Name
  recipientName: "Pupu",

  // Screen 1: Welcome & Bears Cake
  screen1: {
    heading: "Happy Birthday, Pupu 🎀💖",
    question: "Are you excited for what's next?",
    yesButtonText: "Yes 💕",
    noButtonText: "No 🙈"
  },

  // Screen 2: Balloon Pop
  screen2: {
    title: "Pop all 4 balloons",
    balloons: [
      { color: "blue", label: "You" },
      { color: "pink", label: "are" },
      { color: "green", label: "so" },
      { color: "purple", label: "special" }
    ],
    completedNote: "You are so special ✨"
  },

  // Screen 3: Blow Candle
  screen3: {
    title: "Blow the candle, Pupu 🎂💖",
    micPrompt: "🎤 Blow into the mic",
    clickHint: "(or tap the candle to blow)",
    wishMessage: "Close your eyes\n& make a wish ✨",
    continueButton: "Next Surprise ➔"
  },

  // Screen 4: Rose Bouquet
  screen4: {
    title: "Your Rose Bouquet 🌹",
    tapHint: "Tap the bouquet for little notes 💐",
    messages: [
      "You make my world beautiful 💖",
      "Happy Birthday Pupu 🎂💖",
      "Stay just the way you are! You're my favorite person 🌸"
    ],
    buttonText: "Continue ➔"
  },

  // Screen 5: Envelope & Love Letter
  screen5: {
    title: "A Message From My Heart",
    subtitle: "Tap to open",
    openButtonText: "TAP TO OPEN",
    letter: {
      salutation: "Dear Pupu 💖🎂,",
      opening: "Happy Birthday to someone truly special! 🎈",
      paragraphs: [
        "You are Sweet, Loyal, My rock, And I'm so grateful to have you in my life.",
        "You bring so much warmth and sweetness into my life. Every moment with you is precious.",
        "On your special day, I wish you all the happiness, love, and joy that you deserve. May this year bring you countless beautiful moments and wonderful memories.",
        "Here's to celebrating you today and always! 🥂"
      ],
      closing: "With love and best wishes,",
      signature: "Your Special Someone 🌸"
    },
    buttonText: "One last surprise ➔"
  },

  // Screen 6: One Last Thing (Gift Box)
  screen6: {
    title: "One Last Thing...",
    subtitle: "Tap the gift",
    tapsRequired: 3,
    finaleTitle: "Lots of love for you 💖",
    finaleSub: "Once again, Happy Birthday Pupu 💖🎂!",
    replayButtonText: "🔁 Replay"
  },

  // Music Settings
  music: {
    autoplayPrompt: "Play Music 🎵",
    enabledByDefault: true
  }
};
