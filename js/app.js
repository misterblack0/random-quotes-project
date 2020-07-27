const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
    image: "img/oscar-wilde.jpg",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
    image: "img/albert-einstein.jpg",
  },
  {
    quote: "So many books, so little time.",
    author: "Frank Zappa",
    image: "img/frank-zappa.jpg",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
    image: "img/mae-west.jpg",
  },
  {
    quote: "No one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt",
    image: "img/eleanor-roosevelt.jpg",
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain",
    image: "img/mark-twain.jpg",
  },
  {
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    author: "Marilyn Monroe",
    image: "img/marilyn-monroe.jpg",
  },
  {
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "Bernard M. Baruch",
    image: "img/bernard-baruch.jpg",
  },
  {
    quote:
      "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
    author: "William W. Purkey",
    image: "img/william-purkey.jpg",
  },
  {
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "Dr. Seuss",
    image: "img/dr-seuss.jpg",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
    image: "img/mahatma-gandhi.jpg",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
    image: "img/robert-frost.jpg",
  },
  {
    quote:
      "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals",
    author: "J.K. Rowling",
    image: "img/jk-rowling.jpg",
  },
  {
    quote:
      "Don’t walk in front of me… I may not follow. Don’t walk behind me… I may not lead. Walk beside me… just be my friend",
    author: "Albert Camus",
    image: "img/albert-camus.jpg",
  },
  {
    quote:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "Maya Angelou",
    image: "img/maya-angelou.jpg",
  },
  {
    quote: "A friend is someone who knows all about you and still loves you.",
    author: "Elbert Hubbard",
    image: "img/elbert-hubbard.jpg",
  },
  {
    quote: "Always forgive your enemies; nothing annoys them so much.",
    author: "Mahatma Gandhi",
    image: "img/mahatma-gandhi.jpg",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Oscar Wilde",
    image: "img/oscar-wilde.jpg",
  },
  {
    quote: "Without music, life would be a mistake.",
    author: "Friedrich Nietzsche",
    image: "img/friedrich-nietzsche.jpg",
  },
  {
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
    image: "img/ralph-waldo-emerson.jpg",
  },
];

const image = document.querySelector(".container");

function change() {
  let random = Math.floor(Math.random() * quotes.length);
  document.querySelector(".quote").textContent = quotes[random].quote;
  document.querySelector(".author").textContent = quotes[random].author;
  image.style.backgroundImage =
    "linear-gradient(rgba(17, 75, 90, 0.77), rgba(17, 75, 90, 0.77)),url('" +
    quotes[random].image +
    "')";
}
change();
