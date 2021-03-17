let hello = "Hello World !!!";
hello = "Hello";

const birthYear = 1990;
let age = 31;
let isMarried = true;
let alamat;

console.log(hello); // string 
console.log(birthYear); // number
console.log(age);
console.log(isMarried); //boolean
console.log(alamat); //undefined
//null
 
let namaDepan = "Nathania";
let namaBelakang = "Mangundap";
let namaLengkap = namaDepan + " " + namaBelakang + ". Usia saya adalah "+ age;

console.log(namaLengkap);

console.log(10 == "10"); //loose equality
console.log(10 === "10"); //strict equality

const hasil = 10 % 2 === 0 ? "genap" : "ganjil"; //if else (turnary operator)

/*let angka = 11;
const hasil = angka % 2 === 0 ? "genap" : "ganjil"; //if else (turnary operator) */

//function declaration

function ucapkanSalam(){
    console.log("Selamat Siang");
}
ucapkanSalam();

/* 
function ucapkanSalam(){
   return "Selamat siang";
}
console.log(ucapkanSalam());
*/

//parameter
function ucapkanSelamat(salam){
    return salam;
 }
 //argument
 console.log(ucapkanSelamat("selamat sianggggggggg"));

//function expression
const ucapkanSalam2 = function(){
    console.log("Selamat Siang dari Function Expression");
}

ucapkanSalam2();