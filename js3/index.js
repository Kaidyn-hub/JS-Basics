const num1Txt = document.getElementById("num1");
const arrayList = document.getElementById("arrayList");
const sumTxt = document.getElementById("sum");
const highestTxt = document.getElementById("highest");
const lowestTxt = document.getElementById("lowest");

let arr = [];
let sum = 0;
let highest = 0;
let lowest = 0;

function insertNum() {
    arr.push(parseInt(num1Txt.value));
    num1Txt.value = "";
    sum = 0;
    for(let i=0; i<arr.length; i++ ) {
        sum += arr[i];
    }
    arrayList.innerHTML = arr.join("<br>")
    sumTxt.innerHTML = sum;
    for (let i = 0; i <= arr.length; i++) {
        if (highest < arr[i]) {
          highest = arr[i]
        }
      }
      highestTxt.innerHTML = highest;
    arrayList.innerHTML = arr.join("<br>")
    lowest = 999999;
    for (let i = 0; i <= arr.length; i++) {
        if (lowest > arr[i]) {
          lowest = arr[i]
        }
      }
      lowestTxt.innerHTML = lowest;
    arrayList.innerHTML = arr.join("<br>")
    

}

function deleteAll() {
    arr = [];
    arrayList.innerHTML = arr.join("<br>");
    sumTxt.innerHTML = "";
    highestTxt.innerHTML = "";
    lowestTxt.innerHTML = "";
}