const quotes = [
  {
    quote: "끝을 맺기를 처음과 같이 하면 실패가 없다.",
    author: "노자",
  },
  {
    quote: "오늘 할 수 있는 일에 전력을 다하라. 그러면 내일에는 한걸음 더 진보한다.",
    author: "뉴턴",
  },
  {
    quote:"작은 도끼라도 찍고 찍으면 참나무는 넘어진다.",
    author:"세익스피어",
  },
  {
    quote:"1퍼센트이 가능성, 그것이 나의 길이다.",
    author:"나폴레옹",
  },
  {
    quote:"목표란 우리들이 계속 앞으로 나아가도록 해주는 것이다.",
    author:"앤드류 매튜스",
  },
  {
    quote:"인간은 죽음을 두려워한다. 그것은 생을 사랑하기 때문이다.",
    author:"도스토예프스키",
  },
  {
    quote:"할 수 있는 한 훌륭한 인생을 만들라. 인생은 짧고 곧 지나간다.",
    author:"오울디즈",
  },
  {
    quote:"일이 재미있으면 인생은 낙원이다. 일이 의무라면 인생은 지옥이다.",
    author:"고리키",
  },
  {
    quote:"중요한 건 당신이 어떻게 시작했는가가 아니라 어떻게 끝내는가 이다.",
    author:"앤드류 매튜스",
  },
  {
    quote:"오늘을 붙들어라! 되도록 내일에 의지하지 말라! 그날 그날이 일년 중에서 최선의 날이다.",
    author:"에머슨",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;