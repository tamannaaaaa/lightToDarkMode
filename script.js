const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('iamge2');
const image3 =  document.getElementById('iamge3');
const textBox = document.getElementById('text-box');

// Dark or Light theme
function changeColor(color){
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;

}

// Light-Dark mode toggle
function toggleLightDark(isDark){
    nav.style.backgroundColor = isDark? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)' ;
    textBox.style.backgroundColor = isDark?'rgb(255 255 255/ 50%)':'rgb(0 0 0/ 50%)';
    toggleIcon.children[0].textContent = 'Dark-mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon') ;

}


// Dark Mode function 
function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255/ 50%)';
    toggleIcon.children[0].textContent = 'Dark-mode';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon') ;
    changeColor('dark');
}
    

// Light Mode function
function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0/ 50%)';
    toggleIcon.children[0].textContent = 'Light-Mode';
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun') ;
    changeColor('light');
    
}

// Switch theme Dynamically
function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        localStorage.setItem('theme','dark');
        darkMode();
    }
    else{
        document.documentElement.setAttribute('data-theme','light');
        localStorage.setItem('theme','light');
        lightMode();
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Theme of Local Storage
const currentTheme = localStorage.getItem('theme');
console.log(currentTheme);