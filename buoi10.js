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

///DOM events listener
//MỘT element có thể gọi được nhiều sự kiện
// có thể hủy bỏ lắng nghe sự kiện bất kỳ ( DOM event chỉ lắng nghe được nhưng ko hủy bỏ lắng nghe  được)
// Cú pháp
// Element.addEventListener("eventname", function (e) {
//   ///code
// });
// element :là phần tử muốn bắt sự kiện
// eventname: tên sự kiện (bỏ chữ on ví dụ: onclick -> click)
// const button = document.querySelector("#button");
// console.log(button);

// const button = document.querySelector("#button");
// const ham1 = () => {
//   console.log("thucw hieenj coong vieecj 1");
// };
// const ham2 = () => {
//   console.log("thucw hieenj coong vieecj 2");
// };
// // button.onclick = () => {
// //   ham1();
// // };
// // button.onclick = () => {
// //   ham2();
// // };
// button.addEventListener("click", ham1);
// button.addEventListener("click", ham2);
// setTimeout(() => {
//   button.removeEventListener("click", ham2); //hủy bỏ lắng nghe sự kiện sau 5 giây
// }, 5000);

//  Phần 3//DOM navigation  thể hiện mối quan hệ cha con của các thẻ html
// Các thuộc tính"
//parentNode :truy cập phần tử cha
//childNodes :truy cập vào phần tử con
//firstElementChild : Truy cập vào phần tử con đầu tiên
//lastElementChild : truy cập vào phần tử con cuối cùng
//nextElementSibing : truy cập vào phần tử kế tiếp
///previousElementSibling : truy cập vào phần tử trước đó
//nodeName// Lấy ra tên node

//parentNode :truy cập phần tử cha
// const child1 = document.querySelector("#child1");
// // console.log(child1);
// // console.log(child1.parentNode);
// console.log(child1.childNodes);
// console.log(child1.nextElementSibling);
// console.log(child1.nodeName); //lấy ra tên thẻ

///Phần 4 DOM Nodes
// document.createElement  : tạo thẻ mới
// setTimeout(() => {
//   const div = document.createElement("div"); ///tạo thẻ div
//   div.innerHTML = `<div>
//   <img  src="https://tse4.mm.bing.net/th?id=OIP.gmKfAznbt7bDOBxIA7p9cAHaEK&pid=Api&P=0&h=180"
//   </div>`; //in nội dung
//   document.querySelector("body").appendChild(div); /// xuất hiện ở body
// }, 5000);

// document.createTextNode("nội dung");// tạo ra chuỗi văn bản
// const p = document.createElement("p");
// p.innerHTML = "nội dung";

// document.querySelector("body").appendChild(p); // thêm vào vị trí cuối cùng của thẻ html
// const menu = document.querySelector("#menu");
// const button = document.querySelector("#button");
// button.addEventListener("click", () => {
//   const li = document.createElement("li");
//   li.innerHTML = "item new";
//   menu.appendChild(li);
// });

//Dom insertBefore() : dùng để thêm một node vào đằng trước một node con nào đó
// element_parent.insertBefore(node_insert, node_child);
// element_parent là phần tử cha
// node_insert :là node bạn muốn thêm vào
// node_child: là node con mà bạn muốn thêm node_insert và đằng trước nó
// const menu = document.querySelector("#menu");
// const button = document.querySelector("#button");
// let count = 1;
// button.addEventListener("click", () => {
//   const liFirst = menu.querySelector("li:nth-child(1)"); ///add ở vị trí 1
//   const li = document.createElement("li");
//   li.innerHTML = `  1<input value="cong viec 1" /><button>x</button>` + count;
//   menu.insertBefore(li, liFirst);
//   count++;
// });

///DOM remove : xóa 1 elêment con ra khỏi element cha
// const menu = document.querySelector("#menu");
// const buttonsDelete = document.querySelectorAll("button");
// console.log(buttonsDelete);
// for (const buttonDelete of buttonsDelete) {
//   buttonDelete.addEventListener("click", (event) => {
//     // menu.removeChild(event.target.parentNode);
//     console.log(event.target.parentNode);
//     menu.removeChild(event.target.parentNode);
//   });
// }

//Dom replaceChild()  //Dùng để thay thế một node con bằng một node mới
// Cú pháp:
// element_parent.replaceChild(node_insert,node_remode)
// element_parent : là phần tử cha
// node_insert: là node bạn muốn thay thế
// node_remove: là node cũ muốn bỏ đi

// const menu = document.querySelector("#menu");
// const button = document.querySelector("#button");
// button.addEventListener("click", () => {
//   const liSecond = menu.querySelector("li:nth-child(2)");
//   const li = document.createElement("li");
//   li.innerHTML = `9<input value="cong viec 9" /><button>x</button>`;
//   menu.replaceChild(li, liSecond);
// });
