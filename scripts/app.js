// navbar  animee 
const btnNav = document.querySelector('.responsive-nav-btn');
const listNav = document.querySelector('nav ul');
let imgBtn = document.querySelector('.responsive-nav-btn img');

btnNav.addEventListener('click', ()=> {
    listNav.classList.toggle('active-nav');

    
    if(window.location.href.includes('index') ){
        if(imgBtn.src.includes('menu')) {
            imgBtn.src = './ressources/croix.svg';
            imgBtn.style.width = "30px";
            imgBtn.style.heigth = "30px";
        }else {
            imgBtn.src = './ressources/menu.svg';
            imgBtn.style.width = "40px";
            imgBtn.style.heigth = "40px";
        }

    }else {
         if(imgBtn.src.includes('menu')) {
        imgBtn.src = '../ressources/croix.svg';
        imgBtn.style.width = "30px";
        imgBtn.style.heigth = "30px";
         }else {
        imgBtn.src = '../ressources/menu.svg';
        imgBtn.style.width = "40px";
        imgBtn.style.heigth = "40px";
        }
    }
})


// -----------------FAQ---------//
const allCros = document.querySelectorAll ('.panneau-visible img');

allCros.forEach(logo => {
    logo.addEventListener('click', function() {
        const height = this.parentNode.parentNode.childNodes[3].scrollHeight;
        const currentChoice = this.parentNode.parentNode.childNodes[3];
        if(this.src.includes('plus')){
            this.src ="/ressources/minus.svg";
            currentChoice.style.height = height + 20 + "px";
            currentChoice.style.opacity = 1;
            currentChoice.style.padding = "20px 15px";
        }else {
            this.src ="/ressources/plus.svg";
            currentChoice.style.height = 0;
            currentChoice.style.opacity = 0;
            currentChoice.style.padding = "0px 15px";
        }
       
    })
})

// onglets

const choixTarifs = Array.from(document.querySelectorAll('.choix'));
const contenuTaris = Array.from(document.querySelectorAll('.panneau'));


choixTarifs.forEach (choix => {
    choix.addEventListener ('click', (e) =>  {
        let indexClic  = choixTarifs.indexOf(e.target);

        for(i=0; i<choixTarifs.length; i++){
            if(i=== indexClic){
                choixTarifs[i].classList.add('active-choix');
                contenuTaris[i].classList.add('panneau-active');
            }else {
                choixTarifs[i].classList.remove('active-choix');
                contenuTaris[i].classList.remove('panneau-active');
            }

        }
    })
}) 

