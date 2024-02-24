// //Dom là mô hình các đối tượng trong html
// //nhiệm vụ : lấy ra các thẻ html
// //dom element
// // getElementByID
// // const h2_01 = document.getElementById("h2_01");
// // console.log(h2_01);

// //2.2 lấy ra 1 mảng danh sách các thẻ
// // const listH2 = document.getElementsByTagName("h2");
// // console.log(listH2);
// //2.3// getElementsByClassName
// //để lấy ra một thẻ HTML theo class
// // kết quả sẽ trả về 1 mảng các obj

// // const classname = document.getElementsByClassName("n1");
// // console.log(classname);

// //2.4 querySelector //lấy ra 1 thẻ html theo bộ trọn trong css
// //kết quả trả về 1 phần tử
// // Cú pháp
// // const title = document.querySelector(".title");
// // console.log(title);

// //2.5 querySelectall //lấy ra các phần tử thẻ html và trả ra 1 mảng//dùng như css#
// // const title = document.querySelectorAll(".title");
// // console.log(title);

// //3 Nội Dung Thẻ HTML  // dùng iner.html
// //lấy nội dung
// const test = document.querySelector("h2").innerHTML;
// console.log(test);
//thay đổi nội dung
// Để thay đổi nội dung của 1 element dùng innerHTML và gán lại giá trị
// const test = (document.querySelector("h2").innerHTML = "luu duc tho");
// console.log(test);

//3.2 Thuộc tính của thẻ HTML
//để lấy giá trị của thuộc tính html sử dụng lấy cả class và id sử dụng getAttribute
// const test = document
//   .querySelector("#h2_03")

//   .getAttribute("id");
// console.log(test);

//Thay đổi giá trị của thuộc tính sử dụng setAttuebute
// const test = document
//   .querySelector("#h2_03")
//   .setAttribute("class", "noi dung thay doi");
// console.log(test);

//DOM EVEVT là một tác động nào đó lên html để bắt được sự kiện và thực thi một chương trình nào đó
// ///danh sách một số sự kiện phổ biến
//onload():đợi tất cả các sự kiện load xog sau đó rồi chạy onload thực hiện một chương trình nào đó trong onload

// window.onload = () => {
//   const listTagA = document.querySelectorAll("#menu li a");
//   console.log(listTagA);
// };

//onblur// kích hoạt khi một phần tử mất trọng tâm (ko focus vào nữa)
// const input = document.querySelector("#input");

// input.onblur = (event) => {
//   event.target.value = event.target.value.toUpperCase();
//   event.target.style.background = "white";
// };
//  kích hoạt khi 1 phần tử mất trọng tâm
// input.onfocus = (event) => {
//   event.target.style.background = "red";
// };
//kích hoạt khi 1 phần tử đúng trọng tâm
// input.onkeydown = (event) => {
//   alert(event.key);
// }; //kích hoạt khi 1 phím đucowj nhấn vào
// input.onkeyup = (event) => {
//   alert(event.key);
// };
// kích hoạt khi 1 phím được nhả ra

//onclick():kích hoạt trên con chuột khi nhấn vào phần tử
// const selectColor = document.querySelector("#color");
// selectColor.onchange = (event) => {
//   console.log(event.target.value);
// };
