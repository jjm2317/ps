const x = 10;

// const str = x.toString();
const str = x + "";
console.log(typeof str, str, typeof x, x);

"10" + 2; // 102

5 * "10"; // 50

"5" * "10"; // 50

!0; //true

if (1) {
}

//문자열
0 + ""; //'0'

-0 + ""; //'0'

NaN + ""; // 'NaN'

Infinity + ""; // 'Infinity'

null + ""; //'null'

undefined + ""; // 'undefined'

// Symbol() + "";
// TypeError

{
}
+""; //'[object Object]'
[] + ""; // ''

//숫자

1 - "1"; // 0;

1 * "10"; // 10

1 / "one"; // NaN

1 / "1" + // 1
  ""; //0
+"0"; //0
+"1"; //1
+"string"; //NaN

+true + // 1
  false + // 0
  null + // 0
  undefined + // NaN
  // +Symbol() typeError

  {} + // NaN
  [] + // 0
  [10, 20] + // NaN
  function () {}; // NaN

//Boolean
//falsy
false;
undefined;
null;
0;
-0;
NaN;
("");

//명시적 타입변환

//문자열

String(1);
String(NaN);
String(Infinity);
String(true);
String(false);

(1).toString();
NaN.toString();

Number("0"); //0
Number("-1"); // -1
Number("10.53");

Number(true); // 1
Number(false); // 0

parseInt(0);
parseInt(-1);
parseFloat("10.53") + "0";
+"-1"; // -1

+true; // 1
+false; //0

"0" * 1; // 0
"-1" * 1;
"10.53" * 1; //'10.53'

Boolean("false"); // true
Boolean("x"); // true
Boolean(""); //false

Boolean(0); //false
Boolean(1); // true
Boolean(NaN); // false
Boolean(Infinity); // true

Boolean(true);
Boolean(false);

Boolean(null);

Boolean(undefined);

Boolean({}); //true

Boolean([]); //true

!!"x"; //true
!!""; //false
!!"false"; //true

!!0; // false
!!1; //true
!!NaN; //false
!!Infinity; //true

!!null; //false
!!{}; //true
!![]; //true

//단축평가

"Cat" && "Dog"; //'Dog'

"Cat" || "Dog"; // 'Cat'

false || "Dog"; // 'Dog';

false && "Dog"; //false

"Cat" && false; //false

let done = false;
let message = "";

if (!done) message = "미완료";

message = done || "미완료";

let elem = null;

let value = elem && elem.value;

function getStringLength(str) {
  str = str || "";
}

let elem = null;

let value = elem?.value;

let foo = null ?? "default string ";
