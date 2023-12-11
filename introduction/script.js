console.log(document.title);
document.title ="Modifying the DOM";
document.body.style.backgroundColor = "#FF6984";
document.body.style.backgroundColor ="rgb(255,67,99)";

let deuxiemeElementEnfant = document.body.children[1];
for ( var enfant of deuxiemeElementEnfant.children) {
    console.log(enfant);
}