// class Person {
//   constructor(surname1, age1, height1) {
//     this.surname = surname1;
//     this.age = age1;
//     this.height = height1;
//     console.log(
//       `hello ${this.surname},i am ${this.age},my height ${this.height} sm`
//     );
//   }
// }
// let person1 = new Person("boriy", 19, 190);
const time = document.getElementById("MyClockDisplay");
function showTime() {
  let date = new Date();
  let hours = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let session = "AM";

  if (hours == 0) {
    hours = 12;
  }
  if (hours > 12) {
    hours = hours - 12;
    session = "PM";
  }

  hours = hours < 10 ? "0" + hours : hours;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  let time = hours + ":" + minute + ":" + second + ":" + session;
  MyClockDisplay.textContent = time;
  setTimeout(showTime, 1000);
  console.log(time);
}
showTime();
