/*
객체란
생성방식
- 클래스 기반언
- 객체 리터럴 
프로퍼티
- 개념
- 규칙
메서드
-개념
- 규칙
es6 추가기능
- 프로퍼티 축약표현
- 계산된 프로퍼티 이름
-메서드 축약표현
*/

const obj = {
  name: "2123",
  object: { num: 3 },
};

let obj2 = JSON.parse(JSON.stringify(obj));

obj2.object.num = 1;
console.log(obj);
