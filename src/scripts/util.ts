const currenYear = String(new Date().getFullYear());
const elemnts = document.querySelectorAll(".year");
elemnts.forEach((el) => (el.textContent = currenYear));
