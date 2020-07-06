const button = document.querySelector('.btn');
const image = document.querySelector('.author-image');
const quotes = [
  {
    quote: 'Be yourself; everyone else is already taken.',
    author: 'Oscar Wilde',
    image: 'img/oscar-wilde.jpg',
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: 'Albert Einstein',
    image: 'img/albert-Einstein.jpg',
  },
  {
    quote: 'So many books, so little time.',
    author: 'Frank Zappa',
    image: 'img/frank-zappa.jpg',
  },
  {
    quote: 'You only live once, but if you do it right, once is enough.',
    author: 'Mae West',
    image: 'img/mae-west.jpg',
  },
  {
    quote: 'No one can make you feel inferior without your consent.',
    author: 'Eleanor Roosevelt',
    image: 'img/eleanor-roosevelt.jpg',
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: 'Mark Twain',
    image: 'img/mark-twain.jpg',
  },
];
button.addEventListener('click', function () {
  let random = Math.floor(Math.random() * quotes.length);
  document.querySelector('.quote').textContent = quotes[random].quote;
  document.querySelector('.author').textContent = quotes[random].author;
  image.setAttribute('src', quotes[random].image);
});
