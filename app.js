const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      // remove selected from other buttons
      btns.forEach(function (btn) {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
      // hide other articles
      articles.forEach(function (article) {
        article.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });

// Modal Open in Click and Collect
const open = document.getElementById('open-modal');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close-btn');

open.addEventListener('click', openModal);
close.addEventListener('click', closeModal);

//Open Modal
function openModal (){
  modal_container.classList.add('show');
};
// Close Modal
function closeModal (){
  modal_container.classList.remove('show');
};


