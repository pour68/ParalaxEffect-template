let bg = document.querySelector("#bg") as HTMLImageElement;
let moon = document.querySelector("#moon") as HTMLImageElement;
let mountain = document.querySelector("#mountain") as HTMLImageElement;
let road = document.querySelector("#road") as HTMLImageElement;

let text = document.querySelector("#text") as HTMLHeadingElement;

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  bg.style.top = `${value * 0.5}px`;
  moon.style.left = `${-value * 0.5}px`;
  mountain.style.top = `${-value * 0.15}px`;
  road.style.top = `${value * 0.15}px`;

  text.style.top = `${value}px`;
});
