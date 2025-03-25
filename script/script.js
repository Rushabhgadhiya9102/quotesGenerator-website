// ---------- S L I D E R - V A R I A B L E ------------

let slides = document.querySelectorAll(".testimonial-items");
let indicator = document.querySelectorAll(".indicator");
let currentSlide = 0;

// ---------- S L I D E R - V A R I A B L E ------------

// ---------- Q U O T E S - V A R I A B L E ------------

const quoteData = document.querySelector(".blockquote p");
const authors = document.querySelector(".blockquote-footer");

const playBtn = document.querySelector(".bi-play-fill");
const pauseBtn = document.querySelector(".bi-pause");

let time = document.getElementById("time").textContent;
let timerid;

// ---------- Q U O T E S - V A R I A B L E ------------

// -------- A R R A Y - O B J E C T - D E C L A R A T I O N ----------

const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "- Steve Jobs",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "- John Lennon",
  },
  {
    quote: "The purpose of our lives is to be happy.",
    author: "- Dalai Lama",
  },
  {
    quote: "Get busy living or get busy dying.",
    author: "- Stephen King",
  },
  {
    quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    author: "- Brian Tracy",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "- Theodore Roosevelt",
  },
  {
    quote: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "- Franklin D. Roosevelt",
  },
  {
    quote: "Act as if what you do makes a difference. It does.",
    author: "- William James",
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "- Winston S. Churchill",
  },
  {
    quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "- Ralph Waldo Emerson",
  },
];

// -------- A R R A Y - O B J E C T - D E C L A R A T I O N ----------

 // -------- T I M E R - S T A R T - D E C L A R A T I O N ----------

function startTimer() {
  timerid = setInterval(() => {
    if (time == 0) {
      changeQuotes();

      time = 5;
      document.getElementById("time").textContent = time;
    }

    time--;
    document.getElementById("time").textContent = time > 9 ? time : "0" + time;
  }, 1000);
}

  playBtn.classList.add("hidden");
  pauseBtn.classList.remove("hidden");
  startTimer();

  // -------- T I M E R - S T A R T - D E C L A R A T I O N ----------



  // -------- C H A N G E - D E C L A R A T I O N ----------

  function changeQuotes() {
    const index = Math.floor(Math.random() * quotes.length);
    quoteData.textContent = quotes[index].quote;
    authors.textContent = quotes[index].author;
  }

  changeQuotes();

  // -------- C H A N G E - D E C L A R A T I O N ----------

  // -------- P L A Y - P A U S E - B U T T O N - D E C L A R A T I O N ----------

  playBtn.addEventListener("click", () => {

    playBtn.classList.add("hidden");
    pauseBtn.classList.remove("hidden");
    startTimer();

  });

  pauseBtn.addEventListener("click", () => {

    pauseBtn.classList.add("hidden");
    playBtn.classList.remove("hidden");
    clearInterval(timerid);

  });

  // -------- P L A Y - P A U S E - B U T T O N - D E C L A R A T I O N ----------


  // ---------------- T E S T I M O N I A L - S L I D E R ---------------------

function slidesShow(index) {
    
  if (index >= slides.length) {
    currentSlide = 0;

  } else if (index < 0) {

    currentSlide = slides.length - 1;

  } else {

    currentSlide = index;
  }


  slides.forEach((slide, index) => {

    slide.classList.add("hidden");
    slide.classList.remove("block");

    if (index === currentSlide) {
      
      slide.classList.add("block");
      slide.classList.remove("hidden");
      
    }

  });


  indicator.forEach((btn, index) => {

    btn.classList.remove("bg-sky-500");

    if (index === currentSlide) {
      btn.classList.add("bg-sky-500");

    }
  });
}
// ---------------- T E S T I M O N I A L - S L I D E R ---------------------

// ---------------- A U T O - S L I D E R ---------------------

let autoChange = setInterval(() => {
    slidesShow(currentSlide += 1);
}, 5000);
