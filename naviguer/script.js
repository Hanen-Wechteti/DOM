
//let section = document.querySelector("section");
const ol = document.querySelector('ol');
const dernier = ol.children[4];
const premier = ol.children[0];
ol.insertBefore(dernier, premier);


let section =document.querySelectorAll('section');
let h2 = document.querySelectorAll('h2');
let lasth2 = h2[2];
let newh2 =h2[1];
section[1].insertBefore(lasth2, section[1].firstelementChild);
section[2].insertBefore(newh2, section[2].firstelementChild);


section[2].style.display = "none";