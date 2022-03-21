const questions = [
  {
    question: "How many walruses is alive ?",
    answer:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi velsaepe a dicta natus rerum excepturi, porro commodi consequuntur tempore?",
  },
  {
    question: "Can you make aerial without moving ?",
    answer:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi velsaepe a dicta natus rerum excepturi, porro commodi consequuntur tempore?",
  },
  {
    question: "Can you peep inside your own skull ?",
    answer:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi velsaepe a dicta natus rerum excepturi, porro commodi consequuntur tempore?",
  },
];

const wrapper = document.querySelector(".wrapper");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
let isRolled = true;

questions.forEach((question) => {
  const div = document.createElement("div");
  const quest = document.createElement("p");
  const answer = document.createElement("p");
  const plusSign = document.createElement("span");
  const minusSign = document.createElement("span");

  quest.textContent = question.question;
  answer.textContent = question.answer;

  plusSign.classList.add("iconify");
  plusSign.classList.add("plus");
  plusSign.setAttribute("style", "color: purple");
  plusSign.dataset.icon = "ant-design:plus-square-outlined";
  plusSign.dataset.height = 24;
  plusSign.dataset.width = 24;

  div.classList.add("container");
  quest.classList.add("question");
  answer.classList.add("answer");
  answer.classList.add("rolled");

  div.appendChild(quest);
  div.appendChild(answer);
  div.appendChild(plusSign);
  wrapper.appendChild(div);
});

wrapper.addEventListener("click", (e) => {
  const divs = wrapper.querySelectorAll(".container");
  divs.forEach((div) => {
    const sign = div.lastElementChild;
    if (e.target === sign) {
      const answerBox = sign.previousElementSibling;
      answerBox.classList.toggle("rolled");
      if (isRolled === true) {
        sign.dataset.icon = "ant-design:minus-square-outlined";
        isRolled = false;
      } else {
        sign.dataset.icon = "ant-design:plus-square-outlined";

        isRolled = true;
      }
    }
  });
});
