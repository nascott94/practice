//using selectors inside the element
const questions = document.querySelectorAll(".question");
questions.forEach(function (orange) {
  console.log(orange);
});

// traversing the dom
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });
