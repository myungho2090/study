// if문 현재날씨

// let Weather = 1;

// if (Weather == 12 || Weather == 1 || Weather == 2) {
//   console.log("겨울이네요");
// } else if (Weather == 3 || Weather == 4 || Weather == 5) {
//   console.log("봄이네요");
// } else if (Weather == 6 || Weather == 7 || Weather == 8) {
//   console.log("여름이네요");
// } else if (Weather == 9 || Weather == 10 || Weather == 11) {
//   console.log("가을이네요");
// } else {
//   console.log("(숫자를 잘못 입력하셨습니다.)");
// }
//여기 input 사용법 알아보기//

//while문으로 1 ~ 100까지출력

// let number1 = 1;
// while (number1 <= 100) {
//   console.log("시작값:", { number1 });

//   console.log(`시작값:${number1}`);
//   number1++;
// }

// Switch로 사격점수문제풀기

// let jumsu = 9;

// switch (jumsu) {
//   case 10:
//   case 9:
//     console.log(`${jumsu}점 흭득`);
//     break;
//   case 8:
//   case 7:
//     console.log("7점 흭득");
//     break;
//   case 6:
//   case 5:
//     console.log("5점 흭득");
//     break;
//   case 4:
//   case 3:
//     console.log("3점 흭득");
//     break;
//   case 2:
//   case 1:
//     console.log("1점 흭득");
//     break;
//   default:
//     console.log("점수가 없습니다.");
//     break;
// }

//for문 문제

// let a = ["애쉬", "루시안", "징크스", "케이틀린", "시비르"];
// for (let i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }

// console.log(a[3]);

//foreach문법

// let numbers = [10, 22, 34, 55, 82];

// numbers.forEach((number, index, array) => {
//   array[index] = number * 12;
//   //console.log(number * 12);
// });

// console.log(numbers);

//map 활용법

// let my_arr2 = [1, 2, 3, 4, 5];

// let process = my_arr2.map((e, i) => {
//   return e * i;
// });

// console.log("process", process);

// filter 활용법

// let my_arr3 = [1, 2, 3, 4, 5];

// let filter_response = my_arr3.filter((e, i) => {
//   if (my % 2 == 1) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log("filter_resposne", filter_response);

//연습문제해보기.

// let a = 3;
// if (a !== 3) {
//   console.log("아닌데요?");
// } else {
//   console.log("정답입니다!");
// }
