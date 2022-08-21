let saveEl = document.getElementById('save-el');
 let countEl = document.getElementById("count-el");
 let count ;
console.log(saveEl);

 function increment() {
   count +=  1;
     countEl.innerHTML = count;
   console.log(count);
}

function save() {
let countStr = count + "-";
saveEl.innerHTML += countStr;
console.log(count);
 }
save();





