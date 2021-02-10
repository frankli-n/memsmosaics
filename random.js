

let counter = 0;
let imgs = [
  "../../images_diamonds/beetle.jpg",
  "../../images_diamonds/budgies45.jpg",
  "../../images_diamonds/shattered_smalti.jpg",
  "../../images_diamonds/cicadas.jpg",
  "../../images_diamonds/tupaia45.png"
];

let imgs_phone = [
  "../../images_diamonds/phone/beetle_phoneview.png",
  "../../images_diamonds/phone/tuapaia_phoneview.png",
  "../../images_diamonds/phone/littlehouses1_phoneview.png",
  "../../images_diamonds/phone/littlehouses2_phoneview.png",
  "../../images_diamonds/phone/cross_phoneview.png"
];

function myFunction(x) {
  if (x.matches) { // If screen is small
    d = imgs_phone;
  } else {
    d = imgs;
  }
}

var x = window.matchMedia("(max-width: 890px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

// document.querySelector(".diamond-pic").addEventListener("click", function(event){
// 	console.log(this.src)
// 	this.style.background = "url(" + imgs[counter] + ")";
//   this.src = imgs[counter];
//   // As long as the counter is less than the last index in the array
//   // increase the counter. Otherwise, start over.
//   counter = counter < imgs.length-1 ? counter+1 : 0;
// });
document.querySelectorAll('.diamond-pic').forEach(item => {
  item.addEventListener("click", function(event){
	this.style.background = "url(" + d[counter] + ")";
	this.style.backgroundSize = "cover";
	this.style.transitionDuration = "1s";
  	this.src = d[counter];
	  // As long as the counter is less than the last index in the array
	  // increase the counter. Otherwise, start over.
	  counter = counter < imgs.length-1 ? counter+1 : 0;
});
})
