/*
  EDIT YOUR WEBSITE HERE
  Change the values in siteConfig below to personalize the page.
  Replace text, names, letters, timeline content, reasons, and photo filenames here.
  All the content on the page updates automatically from these values.
*/

const siteConfig = {
  herName: "[HER NAME]",
  myName: "[YOUR NAME]",
  heroSubheading: "To my favorite person and my best friend ✨",

  birthdayMessage:
    "You are the kindest, funniest, and most beautiful soul ever. I hope this year brings you endless smiles, love, and memories that stay with you forever. 💖",

  letterText: `Dear [HER NAME],

Write my birthday message here...

Thank you for always being there, for all the laughs, memories, arguments, jokes and crazy moments.

I hope this birthday brings you everything you deserve.

— [YOUR NAME] ❤️`,

  timeline: {
    start: {
      title: "How It Started",
      text:
        "We started with a simple connection, and somehow it became one of the best parts of my life. I’m so grateful that fate brought us together.",
    },
    funny: {
      title: "Our Funniest Memory",
      text:
        "The time we laughed so hard we could barely breathe, and still talk about it like it happened yesterday. Our friendship never fails to make life funnier and brighter.",
    },
    best: {
      title: "The Best Moments",
      text:
        "All the late-night talks, random adventures, inside jokes, and the way you always made everything feel lighter and more beautiful.",
    },
    today: {
      title: "Today",
      text:
        "And now here we are—still laughing, still growing, and still making memories that mean more than words can say. I’m so lucky to have you in my life.",
    },
  },

  reasons: [
    {
      title: "Your smile",
      text: "It lights up the room and somehow makes my whole day better.",
    },
    {
      title: "Your kindness",
      text: "You are warm, thoughtful, and the kind of person everyone loves being around.",
    },
    {
      title: "Your sense of humor",
      text: "You make even the simplest moments feel fun, silly, and unforgettable.",
    },
    {
      title: "The memories we make",
      text: "Every moment with you turns into a story I’ll always treasure.",
    },
    {
      title: "The way you make things better",
      text: "You bring comfort, laughter, and light into my life in the sweetest way.",
    },
  ],

  // Replace these with your own images if you want.
  // Example: "myphoto1.jpg" or "birthday-1.png"
  photoFiles: [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg",
    "photo5.jpg",
    "photo6.jpg",
  ],

  finalMessage: `Happy Birthday, [HER NAME]! 🎂💗

I'm really lucky to have you as my best friend.

Here's to many more memories, laughs and crazy moments together! 🥹✨`,
};

const giftBox = document.getElementById("giftBox");
const openGiftBtn = document.getElementById("openGiftBtn");
const finalRevealBtn = document.getElementById("finalRevealBtn");
const finalMessageContainer = document.getElementById("finalMessageContainer");
const floatingLayer = document.getElementById("floatingLayer");
const musicToggle = document.getElementById("musicToggle");

function updatePageContent() {
  document.getElementById("heroTitle").textContent = `Happy Birthday, ${siteConfig.herName} 🎂💗`;
  document.getElementById("heroSubheading").textContent = siteConfig.heroSubheading;
  document.getElementById("footerName").textContent = siteConfig.herName;

  document.getElementById("timelineStartTitle").textContent = siteConfig.timeline.start.title;
  document.getElementById("timelineStartText").textContent = siteConfig.timeline.start.text;

  document.getElementById("timelineFunnyTitle").textContent = siteConfig.timeline.funny.title;
  document.getElementById("timelineFunnyText").textContent = siteConfig.timeline.funny.text;

  document.getElementById("timelineBestTitle").textContent = siteConfig.timeline.best.title;
  document.getElementById("timelineBestText").textContent = siteConfig.timeline.best.text;

  document.getElementById("timelineTodayTitle").textContent = siteConfig.timeline.today.title;
  document.getElementById("timelineTodayText").textContent = siteConfig.timeline.today.text;

  const finalTitle = document.getElementById("finalMessageTitle");
  const finalBody = document.getElementById("finalMessageBody");

  const lines = siteConfig.finalMessage.split("\n\n");
  finalTitle.textContent = lines[0];
  finalBody.textContent = lines.slice(1).join("\n\n");
}

function openGift() {
  giftBox.classList.add("opened");
  launchConfetti();
}

function buildReasons() {
  const reasonsList = document.getElementById("reasonsList");

  siteConfig.reasons.forEach((reason) => {
    const card = document.createElement("article");
    card.className = "reason-card glass-card";

    const title = document.createElement("h3");
    title.textContent = reason.title;

    const text = document.createElement("p");
    text.textContent = reason.text;

    card.appendChild(title);
    card.appendChild(text);
    reasonsList.appendChild(card);
  });
}

function typeLetter() {
  const letterEl = document.getElementById("letterText");
  const text = siteConfig.letterText;
  let index = 0;

  letterEl.textContent = "";

  const interval = setInterval(() => {
    letterEl.textContent += text[index];
    index += 1;

    if (index >= text.length) {
      clearInterval(interval);
    }
  }, 18);
}

function createFloatingDecor() {
  const shapes = ["💗", "✨", "💖", "⭐", "💫", "🌸"];

  for (let i = 0; i < 28; i++) {
    const item = document.createElement("div");
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    item.className = `float-item ${shape === "⭐" || shape === "✨" || shape === "💫" ? "star" : "heart"}`;
    item.textContent = shape;

    item.style.left = `${Math.random() * 100}%`;
    item.style.top = `${Math.random() * 100}%`;
    item.style.fontSize = `${(Math.random() * 1.6 + 0.9).toFixed(2)}rem`;
    item.style.animationDelay = `${(Math.random() * 5).toFixed(2)}s`;
    item.style.animationDuration = `${(Math.random() * 6 + 5).toFixed(2)}s`;

    floatingLayer.appendChild(item);
  }
}

function launchConfetti() {
  const confettiLayer = document.createElement("div");
  confettiLayer.className = "confetti-layer";

  const colors = ["#ff7ab6", "#8f6cf8", "#ffc75f", "#ffb3d9", "#aee7ff", "#ffffff"];

  for (let i = 0; i < 90; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.setProperty("--x", `${(Math.random() - 0.5) * 500}px`);
    piece.style.setProperty("--rotate", `${(Math.random() - 0.5) * 720}deg`);
    piece.style.animationDelay = `${(Math.random() * 0.4).toFixed(2)}s`;
    confettiLayer.appendChild(piece);
  }

  document.body.appendChild(confettiLayer);

  setTimeout(() => {
    confettiLayer.remove();
  }, 2800);
}

function revealFinalMessage() {
  finalMessageContainer.classList.remove("hidden");
  finalMessageContainer.classList.add("visible");
  launchConfetti();
  launchHearts();
}

function launchHearts() {
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement("div");
    heart.textContent = "💗";
    heart.className = "float-item heart";
    heart.style.left = `${20 + Math.random() * 60}%`;
    heart.style.top = `${30 + Math.random() * 30}%`;
    heart.style.fontSize = `${1.1 + Math.random() * 1.8}rem`;
    heart.style.animationDuration = `${4 + Math.random() * 4}s`;

    floatingLayer.appendChild(heart);

    setTimeout(() => heart.remove(), 4200);
  }
}

let audioContext;
let gainNode;
let musicInterval;
let musicOn = false;

function playTone(freq, duration) {
  if (!audioContext || !gainNode) return;

  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "sine";
  oscillator.frequency.value = freq;

  gain.gain.setValueAtTime(0.001, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.1, audioContext.currentTime + 0.08);
  gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);

  oscillator.connect(gain);
  gain.connect(gainNode);

  oscillator.start();
  oscillator.stop(audioContext.currentTime + duration + 0.05);
}

function startMusic() {
  const notes = [392, 523.25, 659.25, 523.25, 440, 587.33, 659.25, 587.33];
  let index = 0;

  musicInterval = setInterval(() => {
    if (audioContext && audioContext.state === "suspended") {
      audioContext.resume();
    }
    playTone(notes[index % notes.length], 0.42);
    index += 1;
  }, 400);
}

function stopMusic() {
  clearInterval(musicInterval);
}

function toggleMusic() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    gainNode = audioContext.createGain();
    gainNode.gain.value = 0.04;
    gainNode.connect(audioContext.destination);
  }

  if (!musicOn) {
    startMusic();
    musicToggle.textContent = "⏸ Music";
    musicOn = true;
  } else {
    stopMusic();
    musicToggle.textContent = "🎵 Music";
    musicOn = false;
  }
}

openGiftBtn.addEventListener("click", openGift);
finalRevealBtn.addEventListener("click", revealFinalMessage);
musicToggle.addEventListener("click", toggleMusic);

updatePageContent();
buildReasons();
typeLetter();
createFloatingDecor();
