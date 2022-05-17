// "use strict"
// console.dir(this) // => {}
// ha a bongeszoben futtatjuk le ugyanezt, akkor  a window-t kapjuk - mindig a  global objektumra mutat

/* 
feladatoknal - use strict - ha ezt latjuk, 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

Ha ez van beirva, atkapcsolunk strict mode-ba. Bizonyos dolgokat nem tudunk megtenni, pl keyword nelkul valtozokat letrehozni. 
*/
// IIFE - immediately invoced function extraction - ez a becsomagolas az
// (function() {
//     console.dir(this)
// })();

// "use strict" ;
// (function() {
//     //console.dir(this)
// })();

/* const user = {
    name: "Erika",
    getName: function() {
        console.dir(this.name); // pontosvesszo fontos, egyebirant hibat dob
        (function() {
            // console.dir(this)
        })();
        const af = () => {
            //console.dir(this)
            console.dir(this.name)
        }
        af()
    }
}

user.getName() // strict mode-dal, anelkul is ugyanazt kapjuk => { name: 'Erika', getName: [Function: getName] } */




// ujabb verzio

const user = {
    name: "Erika",
    getName: function() {
        console.dir("1" + this); 
        (function() {
            console.dir("2" + this)
        })();
        const af = () => {
            console.dir("3" + this)
        }
        af()
    }
}

const ugn = user.getName
ugn()

/* 
call
apply 
bind
 - ezt a harom metodust nezzuk meg vizsga utan, ha tovabb akarunk menni this temaban
 - mindharom esetben mas lesz a this (call, bind, apply)


 Interjun ezzel villoghatunk, w3schools-on olvassunk vagy mdn-en olvashatunk rola. 
*/