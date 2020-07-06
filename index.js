const button = document.querySelector('.btn');
const quotes = [
  {
    quote: 'Be yourself; everyone else is already taken.',
    author: 'Oscar Wilde',
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: 'Albert Einstein',
  },
  {
    quote: 'So many books, so little time.',
    author: 'Frank Zappa',
  },
  {
    quote: 'You only live once, but if you do it right, once is enough.',
    author: 'Mae West',
  },
  {
    quote: 'No one can make you feel inferior without your consent.',
    author: 'Eleanor Roosevelt',
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: 'Mark Twain',
  },
];
button.addEventListener('click', function () {
  let random = Math.floor(Math.random() * quotes.length);
  document.querySelector('.quote').textContent = quotes[random].quote;
  document.querySelector('.author').textContent = quotes[random].author;
});
