const _initTime = Date.now()

const getElapsedTime = () => {
    return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
    console.log(e.target.classList[1])
    console.log(getElapsedTime())
}

const creatediv = (e) => {
    console.log(e);
    let div = document.createElement('div');
    div.className = "displayedsquare";
    div.classList.add(e.target.classList[1]);
    let wrapper = document.querySelector('.displayedsquare-wrapper');
    wrapper.appendChild(div);
}

const information = (e) => {
    let ul = document.querySelector('ul');
    let li = document.createElement ('li');
    let sentence = "[" + getElapsedTime() + "]created a new " + e.target.classList[1] + " square";
    li.innerHTML = sentence;
    ul.appendChild(li);
}

const actionSquares = document.querySelectorAll('.actionsquare');
console.log(actionSquares);
for (let actionSquare of actionSquares) {
    actionSquare.addEventListener('click', clickOnSquare);
    actionSquare.addEventListener('click', creatediv);
    actionSquare.addEventListener('click', information);
}

//le 'e' c l'evenement de click et ce 'e' a beaucoup de valeurs

const logkey = (e) => {
    if ( e.code == "Space") {
        let random = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = random;
        let ul = document.querySelector('ul');
        let li = document.createElement('li');
        let sentence = "[" + getElapsedTime() + "] created a new " + random + "background";
        li.innerHTML = sentence;
        ul.appendChild(li);
    }
    else if (e.code == "KeyL") {
        let tab = document.querySelectorAll('li');
        for ( let element of tab){
            element.remove();
        }
    }
}
document.body.addEventListener('keypress', logkey);


