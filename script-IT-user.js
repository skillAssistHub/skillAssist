// function toggleBackgroundColor() {
//     document.querySelector("body").classList.toggle("light-mode");
//     document.querySelector(".navbar").classList.toggle("light-mode");
// }

document.querySelector(".toggle-button").addEventListener("click", function(){
    document.querySelector("body").classList.toggle("light-mode");
    document.querySelector(".navbar-brand").classList.toggle("navbar-light-mode");
    document.querySelector(".heading").classList.toggle("heading-light-mode");
    document.querySelector(".description").classList.toggle("description-light-mode");
    document.querySelector(".IT-button").classList.toggle("IT-button-light-mode");
    document.querySelector(".toggle-button").classList.toggle("toggle-button-light-mode");
    document.querySelector(".img").classList.toggle("img-light");
    const element = document.querySelector('.navbar-brand');
    element.style.color = element.style.color === 'black' ? 'white' : 'black';
    const element2 = document.querySelector('.nav-link');
    element2.style.color = element2.style.color === 'black' ? 'grey' : 'black';
    const element3 = document.querySelector('.greeting');
    element3.style.color = element3.style.color === 'black' ? 'grey' : 'black';    
});

const btnOpenModal = document.querySelector(".IT-button");
const modal = document.querySelector(".modal");
const overlay = document.querySelector('.overlay');

function openModal() {
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
}

function closeModal() {
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
}

btnOpenModal.addEventListener('click', openModal);
document.querySelector('.close-modal').addEventListener('click', closeModal);

var input = document.querySelector(".input-box");
      input.onclick = function () {
        this.classList.toggle("open");
        let list = this.nextElementSibling;
        if (list.style.maxHeight) {
          list.style.maxHeight = null;
          list.style.boxShadow = null;
        } else {
          list.style.maxHeight = list.scrollHeight + "px";
          list.style.boxShadow =
            "0 1px 2px 0 rgba(0, 0, 0, 0.15),0 1px 3px 1px rgba(0, 0, 0, 0.1)";
        }
      };

      var rad = document.querySelectorAll(".radio");
      rad.forEach((item) => {
        item.addEventListener("change", () => {
          input.innerHTML = item.nextElementSibling.innerHTML;
          input.click();
        });
      });

      var label = document.querySelectorAll("label");
      function search(searchin) {
        let searchVal = searchin.value;
        searchVal = searchVal.toUpperCase();
        label.forEach((item) => {
          let checkVal = item.querySelector(".name").innerHTML;
          checkVal = checkVal.toUpperCase();
          if (checkVal.indexOf(searchVal) == -1) {
            item.style.display = "none";
          } else {
            item.style.display = "flex";
          }
          let list = input.nextElementSibling;
          list.style.maxHeight = list.scrollHeight + "px";
        });
      }