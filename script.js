/* = steng  */
// = en linje
/*-----------------------------------------------------------------------------------------------*/

///////////////////////////////////////////
//Time 1variabler  
/*
var name = 'johen';
console.log(name);

var lastName = 'smith';
console.log(lastName);

var age = 50;
console.log(age);

var fullAge = true;

console.log(fullAge);
*/

///////////////////////////////////////////
//Time 2 variabler 
/*
var name = 'john';
var age = 25;

console.log(name + age);
console.log(age +age);

 //finne ut hva john jobber og gift med med hjel av VAR
var job, isMarrid;

console.log(job);
job = 'teacher';
inMarrid = false;

console.log (name+ " is a " + age + " years old " + job+ " is he marrid? " + inMarrid + '.'); 

 //bytter jobb og alder (Bruker VAR over) 
// age = 'thirty six';
job = 'driver';
console.log (name+ " is a " + age + " years old " + job+ " is he marrid? " + inMarrid + '.');  

//Type 1 PRONPT
//popup vindu som lager navnet i console.log = (smith)
var lastName = prompt('What is the last name?');
console.log(lastName);


//Type 2 ALERT
//alert bruker for å finne bugs eller testing her får du opp alt med en OK
alert(name+ " is a " + age + " years old " + job+ " is he marrid? " + inMarrid + '.');
*/

///////////////////////////////////////////
//Time 3 Operators 
/*var now = 2016;
var birthYear = now - 26;
birthYear = now - 26 * 2;
// 2016 - 52
// 1964

console.log(birthYear);

var agejonas = 30;
var ageMark = 30;

agejonas =  ageMark = ( 3 + 5 ) * 4 - 6;
//ageJonas = ageMark = 26
//ageJonas = 26

//legge til et tall med hjelp av operatorer (++) eller AgeJonas = Agejonas +1; 
//begge typene utjør det samme
agejonas++;
agejonas = agejonas +1;
//plussing av summen som man får etter ( 3 + 5 ) * 4 - 6; 

ageMark *=2;
//to typer som utgjør det samme målet funne ut summen 
ageMark = ageMark *2;


console.log(agejonas);
console.log(ageMark);
*/


///////////////////////////////////////////
//Time 4  If / Else statements
/*
// her lager vi et if / else sprøgsmål som lurer på om svenn er gift eller om han ikke er det 

// her lager vi en var oversiket med de infoene vi skal jobbe med under 
var name = 'svenn';
var age = 26;
var isMarried = 'yes';

// her forteller vi javascript av om svenn er gift skal du skrive Navanet og at han er gift
if(isMarried === 'yes'){
    console.log(name + ' ' + 'is married!');
    
    
// om han ikke er gift skal du fortelle han de i denne delsen av prgramet (altså Else)    
}else{
    console.log(name + ' ' + 'is not married!');
}

// dette er da en nedbrent utgava av det du ser over bare at vi bruker Boolien (true/false)  isteden for === 
isMarried = false;
if(isMarried){
    console.log('YES!');
}else{
    console.log('NO!');
}

//her gjør vi om et tall til en string med hjelp av == 
if ( 23 == '23'){
    console.log('== do the nuber om to string');
}
// som du så ovenfor så har vi neste det samme eksempele men her bruker vi === ærlig, og som du kan se printer den ikke noe og det er fordi det ikke fungerer og den får ikke omgjort det til en string med === ærliker 
if ( 23 === '23'){
    console.log("=== doen't print   ");
}
*/


///////////////////////////////////////////
//Time 5  Boolean Logic and switch statements

/*
// her finner vi ut om jhon er 20 år eller om han er en teenger altså under 20 år da med hjelp av && booligen eksempel 
var age = 20;
if (age < 20){
    console.log("john is a teenger");
} else if (age >= 20 && age <30) {
    console.log('johon is an yung man ');
}
else {
    console.log('john is a man');
}

//Switch her finner vu ut hva john jobber med med hjelp av en switch 
var job = 'teacher';
// vi bruker også en prompt får å finne ut hva han gjør 
job = prompt("what does john do?");
switch(job){
    case 'teacher':
        console.log('john teacher kides.');
        break;
    case 'driver':
        console.log('driving a cab in lisbon');
        break;
    case 'cop':
        console.log('jhon help fight crime');
        break;
    default:
        console.log('jhon does something else.');
}
*/


///////////////////////////////////////////
// codeing Challenge 1.1

/*
// dette er et spil som finner ut hvem som er høyest av Johan og Mick, med hjelp av Variabler og lett reining 
var hightJohn = 185;
var hightMick = 200;
var ageJhon = 26;
var ageMick = 29;

var scoreJhon = hightJohn + 5 * ageJhon;
var scoreMick = hightMick + 5 * ageMick;

if (scoreJhon > scoreMick){
    consol.log('Johan wins the game with ' + scoreJhon + ' points!');
    
}else if( scoreMick > scoreJhon){
    console.log('Mike winse the game with ' + scoreMick + ' points!');
} else{
    console.log('Ther is a draw.');
}







// her legger vi til en karakter som heter Mary hun skal se om hun klarer å utfordre de to andre 

var hightMary = 258;
var ageMary  = 31;
var scoreMary = hightMary + 5 * ageMary;

if( scoreJhon > scoreMick && scoreJhon > scoreMary){
    console.log('Johan wins the game with ' + scoreJhon + ' points!');
    
}else if ( scoreMick <scoreJhon && scoreMick > scoreMary){
    console.log('Mike winse the game with ' + scoreMick + ' points!');

} else if ( scoreMary > scoreJhon && scoreMary > scoreMick){
    console.log('Mary winse the game with ' + scoreMary + ' points!');
} 
*/

/*--------------------------------------------------------------------------------------------------*/





///////////////////////////////////////////
// Time 1 Function 
/*

function calculatAge(yearOfBirth){
    var age = 2016 - yearOfBirth;
    return age;
}
 var agejohn = calculatAge(1990);
 var ageMike = calculatAge(1840);
 var ageteo = calculatAge(200);
console.log(agejohn);
console.log(ageMike);
console.log(ageteo);





function yearsUntilRetirement(name,year){
    var age = calculatAge(year);
    var retirement = 65 - age;
    if ( retirement >=0){
    console.log( name + ' retiers in ' + retirement + ' years.');    
    } else{
        console.log( name + ' has already retired. ');
    }
    
} 


yearsUntilRetirement('jhon', 1990);
yearsUntilRetirement('mike', 1969);
yearsUntilRetirement('Mary', 1480);

*/

///////////////////////////////////////////
// Time 2 Function 

//function Declaration 
// function whatDoYouDo(job, firstName){}

////////////////////////////////////////
// function Expression
/*
var whatDoYouDO = function (job, firstName){
    switch(job){
        case 'teacher':
         return firstName + ' teaches kids how to code';
        case 'driver':
         return firstName + ' driver a cab in lisbon ';
        case 'designer':
            return firstName + ' designs beatuiful websites';
        default:
             return firstName + ' does somthing else'; 
    }
}

console.log(whatDoYouDO('teacher', 'lars'));
console.log(whatDoYouDO('designer', 'Svenn'));
console.log(whatDoYouDO('retired', 'Jonas'));
////////////////////////////////////////////////////
*/







/*
///////////////////////////////////////////////////
// Arrays 1.1

//-----------------------------------------------//
// aleternativ 1 
//var years = new Array(1990, 1969 ,1948)//
//-----------------------------------------------//

// mest brukt Arrays 
var names= [ 'jonas', 'Svenn', 'håvard'];
//-----------------------------------------------//

// for å finne den først variabelen i en arrays
var names= [ 'jonas', 'Svenn', 'håvard'];
console.log(names[0]);

//-----------------------------------------------//

// for å finne hvor mage det er i arrayen bruker vi (Length) 
// tilfeldet under er det altså 3 variabler (Jonas håvard og svenn )
var names= [ 'jonas', 'Svenn', 'håvard'];
console.log(names.length);
//-----------------------------------------------//

//det du ser under er når man vil bytte ut svenn med Ben da
names[1] ='Ben';

// som du kan se under er det to utagaver av maria namesen. den øverste vil dytte 2 mellomrom fra de andre navene og så sette Maria. men den under vil dytte maria inntil de 3 andre navnen dette er to måter vi kan legge til navn i en arrays 

//names[5] = 'Maria';

names[names.length] =  'Maria';

console.log(names);

// forskjelig datatyper 

var svenn = ['svenn', 'Smitt' , 1997, 'designer', 'true'];
// legger til et nytt element 
svenn.push('oliven');
//------------------//
//legger til en ny tittel 
svenn.unshift('Mr.')
//------------------//
//trekker vekk elemnter fra baksuden 
svenn.pop();

//------------------//
//ta vekk tittelen 
svenn.shift();
console.log(svenn);

//------------------//
//om vi vil ha tak i en valu men ikke vet helt hvor det står kan vi bruke indexOf for å finne den som du kan se under vil jeg ha tak i hvor 1997 er plasert i arrayen og det var plass nr 2. 
console.log(svenn.indexOf(1997));


//------------------//
// under kan du se hvordan vi bruker indexOF for å finne ut om "svenn" er en designer eller ikke med hjelp av den først arreien vi laget over. om han er en Desinger vil de oppo opp riktig og ikke vil det stå at han ikke er en desinger. 
var isDesigner = svenn.indexOf('designer') === -1 ? 'svenn is NOT a Desinger' : 'svenn er en desiger';
console.log(isDesigner);
//------------------//



//--------------------------------------------------------------------------------//
//coding challenge nr 3
 function tipCalculator(bill){
     var precentage;
     if (bill< 50) {
         percentage = .2;
     }else if (bill >= 50 && bill < 200){
         percentage = .15;
     }else {
         percentage = .1;
     }
     return precentage * bill;
 }
var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];
var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] +bills[2]];
console.log(tips);
/////////////////////////////////////////////////


*/








/*
/////////////////////////////////////////////////////// Objects and Properties 3.1

var svenn = {
    firstName: 'svenn',
    lastName: 'Berg',
    birthYear: 1997,
    family: ['ENB','OHB','PMB','TRB'],
    job: false,
    hasgirlfrend: true,
    
};
console.log(svenn.firstName);
//mulighet 1 for å finnne 1 okjekt ut ifra det som er satt i i VAR
console.log(svenn['lastName']);
//----------------------------------------------------------// 

// mulighet nr 2 her burker vi en X variabel for å finne frem til bursdagen datoen til Svenn. og console.log det etter på som du kan se under 
var x = 'birthYear';
 console.log(svenn[x]);
 
// Forandring av objekter, som du kan se under bytter jeg svenn job til sant og under der igjen bytter jeg hasgirlfrend på to måter. dette kalles Mutering 
svenn.job = true;
svenn['hasgirlfrend'] = false;

console.log(svenn.job);
console.log(svenn['hasgirlfrend']);


// New Object Syntax 
var Maria = new Object();
Maria.firstName = 'Maria';
Maria.birthYear = 1997;
Maria['lastName'] = 'Hansen';

console.log(Maria['birthYear']);
console.log(svenn.lastName);
console.log(Maria.lastName);
//////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////objects & Methods 3.2


var svenn = {
    firstName: 'svenn',
    lastName: 'Berg',
    birthYear: 1997,
    family: ['ENB','OHB','PMB','TRB'],
    job: false,
    hasgirlfrend: true,
    // her putter vi inn en utregnings function for å finne ut hvor gamle Svenn er i 2018.
    calcAge: function(birthYear){
       this.age = 2018 - this.birthYear;
    }
};

// her forteller vi console.logen at svenn er født i 1997 og vil da finne ut at året i år er 2018 som det står over og regne ut at svenn er 21 år gamlen i år. 
//console.log(svenn.calcAge(1997));

                        


// mulighet nr 2 for å finne alderen på Svenn er å legge til This.age i function og bare kalde opp Svenn.calcAge(); under for å gjøre det lettere for seg selv 
svenn.calcAge();
console.log(svenn);
                        //



/////////////////////////////////////////////////////////////
/// Coding Challange 4

var johon = {
    fullName: 'johon smitt',
    highte: 1.50,
    mass: 23,
    calcBMI : function() {
        this.bmi = this.mass / (this.highte * this.highte);
        return this.bmi;
    }
};
var mark = {
    fullName: 'mark miller',
    highte: 1.90,
    mass: 98,
    calcBMI : function() {
        this.bmi = this.mass / (this.highte * this.highte);
        return this.bmi;
    }
};

johon.calcBMI();
mark.calcBMI();
console.log(johon,mark);


if (johon.bmi > mark.bmi){
    console.log(johon.fullName + 'mye bedre for johon ' + johon.bmi);

} else if (mark.bmi > johon.bmi){
    console.log(mark.fullName + ' mark vant : ' + mark.bmi);
    
} else {
    console.log('like de to ')
}
//////////////////////////////////////////////////////////////
*/







/////////////////////////////////////////////////////////////////// Loops and iteration 4.4


//her teller vi opp til 10 fra null 
//for (var i = 0; i < 10; i++){
    //console.log(i);
//}

// i I = 0,0 <10 true , log i to console, i++ 
//i 1,1 < 10 true log in to the console, i++
//i 1,1 < 10 true log in to the console, i++
//..
//i 9,9 < 10 true log in to the console, i++//
//i 10,10 < 10 false log stop the loop !//

// her bytter vi I++ tegnet med +=2 som tilsvarer at loopen bare tiller opp til 84 og ikke helt opp til 85. 
//for (var i = 10; i < 85; i +=2){
    //console.log(i);
//}

///////////////////////////////////////////////////////////////////
/*
var jhon = ['jhon', 'smoth', 1990 , 'designer', false];

for ( var i = 0; i < jhon.length; i++){
    console.log(jhon[i]);
}

//while loop 
var i = 0; 
while(i < jhon.length){
    console.log(jhon[i]);
    i++;
}
*/
//brake statment 

/*var jhon = ['jhon', 'smoth', 1990 , 'designer', false];*/
/*
for ( var i = 0; i < jhon.length; i++){
    if (typeof[i] !== 'string') continue;
        console.log(jhon[i]);
}
*/
/*
for ( var i = 0; i < jhon.length; i++) {
    if (typeof[i] !== 'string') break;
        console.log(jhon[i]);
}
*/
/*
/// looping baklengs 
for ( var i = jhon.length - 1; i >= 0; i-- ) {
    console.log(jhon[i]);
}*/

/*
var person = [{
    Name:"svenn",
    Age:"21",
    sex:"male", 
    }, 
        {
            Name:"tor",
            Age:"25",
            sex:"male",  
        }
        ,{
            Name:"Jonas",
            Age:"24",
            sex:"male",  
        }
        ,{
            Name:"marit",
            Age:"32",
            sex:"male",  
        }
        ,{
            Name:"oda",
            Age:"26",
            sex:"female",  
        }

]

var person = person.filter(function(male){
  return male.sex === "male"
})





var person = [{
    Name:"svenn",
    Age:"21",
    sex:"male", 
    }, 
        {
            Name:"tor",
            Age:"25",
            sex:"male",  
        }
        ,{
            Name:"Jonas",
            Age:"24",
            sex:"male",  
        }
        ,{
            Name:"marit",
            Age:"32",
            sex:"male",  
        }
        ,{
            Name:"oda",
            Age:"26",
            sex:"female",  
        }

]

var person = person.filter(function(male){
  return male.sex === "male"
})





console.log(person);

*/







