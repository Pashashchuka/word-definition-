import { APIURL } from "./constants.js";
import { createAnswer } from "./answer.js";

const input = document.querySelector(".input");


const getWords = async (word) => {
  const url = APIURL + word
  const res = await (await fetch(url)).json(); 
 createAnswer(res);
};

input.addEventListener("keypress", (e) => {
  const word = e.target.value;
  if (e.key === "Enter") {
    getWords(word);
  }
});



