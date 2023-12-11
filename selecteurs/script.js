

let title = document.querySelectorAll('impotant');
for (let element of title){
    element.setAttribute("title", "this is an important item");
}

let img = document.querySelectorAll('img');
for (let imgElement of img) {
if (!imgElement.classList.contains('important')) {
imgElement.style.display = "none";
}
}

let p = document.querySelectorAll('p');
for (let para of p ){
    console.log(para.innerHTML);
    if(para.classList !=""){
        console.log(para.classList.value);
    }
}
for (let paragraphe of p ){
    if (paragraphe.classList !=""){}
    else {
        var myRandomColor ='#' + Math.floor(Math.random()* 16777215).
        toString(16);
        paragraphe.style.color = myRandomColor;
    }
}