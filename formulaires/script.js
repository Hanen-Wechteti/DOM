document.addEventListener("keyup", Myage);


//1) Ajoutez un keyup écouteur sur le premier champ de saisie, de sorte qu'une fois que vous tapez une lettre dans ce champ, 
//elle aille dans le fichier <span id="display-firstname">. Le contenu du champ et la durée doivent toujours rester les mêmes.
// Récupérer l'élément par son ID
let firstname = document.getElementById('firstname');
let displayfirstname = document.getElementById('display-firstname');

// Attacher un gestionnaire d'événements au clic
 document.addEventListener('keyup', function() {
    displayfirstname.textContent = firstname.value;});


 //2) Ajoutez un keyupauditeur sur la deuxième entrée (l'entrée du numéro), afin que si l'âge est inférieur à 18 ans,
 // le contenu de la section a-hard-truthreste caché, sinon montrez-lui ce fait difficile à avaler.
// Récupérer l'élément par son ID
//  let age = document.getElementById('age');
//  let ahardtruth = document.getElementById('a-hard-truth');

//  // Attacher un gestionnaire d'événements au clic
//  document.addEventListener('keyup', function(){
//     // Récupérer la valeur de l'âge et convertir en nombre
//     let age = parseInt(age.value);

//     if(age < 18) {
//     ahardtruth.style.visibility= 'hidden';
//  }
//     else {
//     ahardtruth.style.visibility= 'visible';

//  } ;
//  });

function Myage() {
    let age = document.getElementById('age').value;
    if (age < 18) {
      document.getElementById('a-hard-truth').style.visibility = 'hidden';
    }
    else {
        document.getElementById('a-hard-truth').style.visibility = 'visible';
        document.getElementById('a-hard-truth').innerHTML = age; 
    }
}
// Eh bien, c'est un problème courant. Ajoutez un keyupécouteur sur les deux champs et affichez un indice visuel (par exemple, 
//     faites passer la bordure de saisie en rouge), ajoutez une validation ,si le mot de passe est trop court (moins de 6 caractères)
//      ou si le mot de passe et sa confirmation ne correspondent pas.

document.addEventListener("keyup", passWord);

function passWord() {
    let pwd = document.getElementById('pwd').value;
    let allpwd = document.getElementById('pwd');
    let pwdcConfirm = document.getElementById('pwd-confirm').value;
    let allpwdConfirm = document.getElementById('pwd-confirm');
     if ( pwd.length > 6 && pwd == pwdcConfirm ) {
        allpwd.style.border = '2px solid #00FF00';
        allpwdConfirm.style.border = '2px solid #00FF00';
     }
     else {
        allpwdConfirm.style.border = '5px solid #FF3456';
        allpwd.style.border = '5px solid #FF3456';
     }
     }

     //Enfin, utilisez un changeauditeur sur le <select>terrain pour activer un mode sombre sur toute la page.Pour plus de facilité d'utilisation
     //, nous dirons que le mode sombre consiste simplement à rendre l'arrière-plan noir et le texte blanc.
     let darkMode = document.getElementById ('toggle-darkmode');
     darkMode.addEventListener("click", select);

    function select() {
       
        if ( darkMode.value == 'dark') {
            document.body.style.backgroundColor = '#000000';
            document.body.style.color = '#ffffff';
        }
        else {
            document.body.style.backgroundColor = '#ffffff';
            document.body.style.color = '#000000';
        }
        
    }

     

