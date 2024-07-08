document.querySelector(".toggle-button").addEventListener("click", function(){
    document.querySelector("body").classList.toggle("light-mode");
    document.querySelector(".navbar").classList.toggle("navbar-light-mode");
    document.querySelector(".heading").classList.toggle("heading-light-mode");
    document.querySelector(".sub-heading").classList.toggle("sub-heading-light-mode");
    document.querySelector(".description").classList.toggle("description-light-mode");
    document.querySelector(".accounts-button").classList.toggle("button-light-mode");
    document.querySelector(".toggle-button").classList.toggle("button-light-mode");
    document.querySelector(".btn-light").classList.toggle("button-light-mode");
    document.querySelector(".img").classList.toggle("img-light");
    const element = document.querySelector('.navbar-brand');
    element.style.color = element.style.color === 'white' ? 'black' : 'white';
    const element2 = document.querySelector('.nav-link');
    element2.style.color = element2.style.color === 'grey' ? 'black' : 'grey';
    const element3 = document.querySelector('.greeting');
    element3.style.color = element3.style.color === 'grey' ? 'black' : 'grey';    
});
