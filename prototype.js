const obj1 = {};

// console.dir(obj1); // => [object Object]

const obj2 = new Object();
// console.dir(obj2);


const arr1 = []; 
// console.dir(arr1); // => prototipusan ott van az osszes metodus bongeszo konzoljaban latjuk

// null az olyan prototipus object, aminek nincs semmilyen tulajdonsaga
// ha a root id-ju divunk nincs benne a dom-ban, akkor is null-t kapunk pl

// null az objektum is meg primitiv is

const arr2 = new Array();  // => ugyanazt kapjuk, mint az arr1 eseteben
// console.dir(arr2);


// Object consturctor
function User(name) {
    this.name = name

    this.iam = function () {
        console.log(`I am ${this.name}`)
    }
}

const user1 = new User('Pumbaa');
console.dir(user1.iam()); // => I am Pumbaa

// fentebb a peldanyon magan letrejott az iam metodus

const user2 = new User('Timon');
console.dir(user2.iam()); // => I am Timon




// prototypus szintjen jojjon letre a metodus - most ezt fogjuk megcsinalni

User.prototype.iam2 = function () {
    console.log(`I am ${this.name} 2` )
}

// ha letrehozunk egy uj usert, az uj user meg fogja kapni ezt az iam2-ot, viszont csak protptypus szintjen. Nem fog megjelenni az objektumon

const user3 = new User("Simba");
// console.dir(user3.iam2()); 

// igy tudjuk a protptpust megkapni - van hivatalos meg nem hivatalos resz is - hogyan tudunk hozzaferni? A nagy kerdes. 

// const user3Proto = Object.getPrototypeOf(user3)
// console.log(user3Proto) // ezt kapjuk => { iam2: [Function (anonymous)] }


//__proto__ - ugyanazt kapjuk, mint fent, de ez a nem standard modja annak, hogy hogyan kapjuk meg a prottypusat

const user3Proto = user3.__proto__
// console.log(user3Proto) // => { iam2: [Function (anonymous)] }


function CustomUser(name, role) {
    User.call(this, name)
    this.role = role
}

const user4 = new CustomUser("Piroska", "lakatos");
console.dir(user4) 
/*  => ezt kapjuk a fentebb levo:

CustomUser {
    name: 'Piroska',
    iam: [Function (anonymous)],
    role: 'lakatos'
  } 
*/

// static szocska is hasonlot csinal - mint mi a 43-as sorban. Vizsga utan nezzuk ujra ezt a repot es a felvetelt, olvasssunk utana es majd szepen lassan osszeall a dolog. 
// Hogy ne kelljen mindent szazszor leirni, ez a prototype azt segiti. 