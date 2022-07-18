console.log(123);

/* 생성자 함수 방식 */ 
const regexp1 = new RegExp("^abc");
// new RegExg(표현식)

const regexp2 = new RegExp("^abc", "gi");
// new RegExg(표현식, 플래그)


/* 리터럴방식 */ 

const str = ` 
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`;


// const regexp = new RegExp('the', 'gi');
// const regexp = /fox/gi
// console.log(regexp.test(str));
// str = str.replace(regexp, 'AAA');
// str = console.log(str);
const h = `  the hello  world       !

`;
console.log(str.match(/(?<=@).{1,}.{1,}.{1,}/g));

