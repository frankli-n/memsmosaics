


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// function to load in images
// const express = require('express');
// const app = express();
// const path = require('path');

// Allow assets directory listings
// const serveIndex = require('serve-index'); 
// app.use('/images', serveIndex(path.join(__dirname, '/images')));

// function double(place) {
//   jump(place);
//   reload();
// }

// function jump(h){
//     var url = location.href;               //Save down the URL without hash.
//     location.href = "#"+h;                 //Go to the target element.
//     history.replaceState(null,null,url);
// }

// function reload(){
//   onclick=window.location.reload(true); 
//   //Don't like hashes. Changing it back.
// }

// 
