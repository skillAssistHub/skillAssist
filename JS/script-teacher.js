document.querySelector(".toggle-button").addEventListener("click", function(){
    document.querySelector("body").classList.toggle("light-mode");
    document.querySelector(".navbar").classList.toggle("navbar-light-mode");
    const element = document.querySelector('.navbar-brand');
    element.style.color = element.style.color === 'white' ? 'black' : 'white';
    const element2 = document.querySelector('.nav-link');
    element2.style.color = element2.style.color === 'grey' ? 'black' : 'grey';
    const element3 = document.querySelector('.greeting');
    element3.style.color = element3.style.color === 'grey' ? 'black' : 'grey';
    document.querySelector(".toggle-button").classList.toggle("button-light-mode");
    document.querySelector(".btn-light").classList.toggle("button-light-mode");        
});

const checkbox = document.getElementById("teacherCheckbox");
const text = document.getElementById("tag");
const background = document.querySelector(".container-button")

document.querySelector(".switch").addEventListener("click", () => {
    if (checkbox.checked) {
        text.style.color = "black"; // Change color to red when checked
        // background.style.backgroundColor = 'forestgreen';
        background.classList.add("cnbl");
        text.innerHTML = "ON DUTY"
      } else {
        text.style.color = "gray";
        // background.style.backgroundColor = ' black'; // Change back to black when unchecked
        background.classList.remove("cnbl");
        text.innerHTML = "OFF DUTY"
      }
})

