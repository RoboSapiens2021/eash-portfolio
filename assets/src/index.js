// DOM Element selections
const cardWrapper = document.querySelectorAll(".cardWrapper");
const card = document.querySelectorAll(".card");
const highlight = document.querySelectorAll(".highlight");

// highest values for angle
const mostX = 4; // 10 or -10
const mostY = -4; // 10 or -10
cardWrapper[0].addEventListener("mousemove", (e) => {
   // remove transition
   card[0].style.transition = "none";
   highlight[0].style.transition = "none";
   const x = e.offsetX;
   const y = e.offsetY;
   const { width, height } = cardWrapper[0].getBoundingClientRect();
   const halfWidth = width / 2;
   const halfHeight = height / 2;

   // calculate angle
   const rotationY = ((x - halfWidth) / halfWidth) * mostX;
   const rotationX = ((y - halfHeight) / halfHeight) * mostY;

   // set rotation
   card[0].style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;
   highlight[0].style.left = `${(rotationY / mostX) * 30 * -1}%`;
   highlight[0].style.top = `${(rotationX / mostY) * 30 * -1}%`;
});

cardWrapper[0].addEventListener("mouseleave", () => {
   // add transition back
   card[0].style.transition = "transform 0.5s ease-in-out";
   card[0].style.transform = `rotateY(0) rotateX(0)`;
   highlight[0].style.transition =
      "left 0.5s ease-in-out, top 0.5s ease-in-out";

   // add default position back to highlight
   highlight[0].style.left = `-20%`;
   highlight[0].style.top = `-13%`;
});

cardWrapper[1].addEventListener("mousemove", (e) => {
   // remove transition
   card[1].style.transition = "none";
   highlight[1].style.transition = "none";
   const x = e.offsetX;
   const y = e.offsetY;
   const { width, height } = cardWrapper[1].getBoundingClientRect();
   const halfWidth = width / 2;
   const halfHeight = height / 2;

   // calculate angle
   const rotationY = ((x - halfWidth) / halfWidth) * mostX;
   const rotationX = ((y - halfHeight) / halfHeight) * mostY;

   // set rotation
   card[1].style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;
   highlight[1].style.left = `${(rotationY / mostX) * 30 * -1}%`;
   highlight[1].style.top = `${(rotationX / mostY) * 30 * -1}%`;
});

cardWrapper[1].addEventListener("mouseleave", () => {
   // add transition back
   card[1].style.transition = "transform 0.5s ease-in-out";
   card[1].style.transform = `rotateY(0) rotateX(0)`;
   highlight[1].style.transition =
      "left 0.5s ease-in-out, top 0.5s ease-in-out";

   // add default position back to highlight
   highlight[1].style.left = `-20%`;
   highlight[1].style.top = `-13%`;
});

const observer = new IntersectionObserver((entries) => {
   // Loop over the entries
   entries.forEach((entry) => {
      // If the element is visible
      if (entry.isIntersecting) {
         // Add the animation class
         entry.target.classList.add("square-animation");
      }
   });
});

observer.observe(document.querySelector(".square"));
