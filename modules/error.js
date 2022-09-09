const error = document.querySelector(".error");

export const createError = (res) => {
  const errorHTML = `
     <p class='error'> Oops ;) we can't find "${res[0].word}"</p>
      `;
  error.innerHTML = errorHTML;
};
