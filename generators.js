function* generator(){
let num=0;

while(true){
   yield num++ ;
}


}
const my=generator();

console.log(my.next().value);
console.log(my.next().value);
console.log(my.next().value);
console.log(my.next().value);
console.log(my.next().value);
console.log(my.next().value);
console.log(my.next().value);

v