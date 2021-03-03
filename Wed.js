//Query
//Get all inputs
let inputs = document.getElementsByTagName('input');
    console.log("input");
    
let inError = document.getElementsByClassName('error');
    console.log("error");


//console.log(inputs.length); //2
//console.log(inError.length); //1

let blah2 = document.getElementById('blah');
    console.log("blah");

let whoo2 = document.getElementsByClassName("whoo");
    console.log("whoo");


let header2 = document.querySelector.bind("header");
    console.log("header");

let section2 = document.querySelectorAll("section");
    console.log("section");

let current2 = document.getElementsByClassName("current");
    console.log("current");

let ns = document.querySelector.bind(section.current) .nextElementSibling
    console.log(current.section)

// slide answers //

//Laziness is your friend...
let q = document.querySelector.bind(document) //Entire Element
let qa = document.querySelectorAll.bind(document); //All the elements inside the documents.


q('header'); 
qa('section'); // document.querySelector.All.bind('section')
q('section.current');//
q('section.current').nextElementSibling;
q('section.current').previousElementSibling.children[0];
q('h2.highlight').parentElement.parentElement;

let foo = Array.from(qa('section h2'))
    .map(function(headline){
        return headline.parentElement;
    });

    let box = document.querySelector('#box').remove();

    //to create element use .createElement

    //define whats inside the Element.- context 
    //newEl.innerHTML

