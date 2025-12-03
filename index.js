
let texto1 = document.getElementById("primerContador");
let texto2 = document.getElementById("segundoContador");
let texto3 = document.getElementById("tercerContador");
let list = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]
let list2 = [false, false, false]
let list3 = {}
function countSheep(list) {
    let counterSheep = 0;
    let counterWolf = 0;
    for (let index = 0; index < list.length; index++) {
        if (list[index] === true) {
            counterSheep += 1;
        }
        if (list[index] === false) {
            counterWolf += 1;

        }
    }
    if((counterSheep==0)&&(counterWolf>0)))){
    texto2.innerHTML = `"UPS!!! Wolfs eaten Sheeps;
    }
}