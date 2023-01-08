
$(document).ready(function(){
    $(window).scrollTop(0);
});
//===========
function myFunction() {
  $(window).scrollTop(0);
}
//===========
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $("header").addClass('scrolled');
        }else{
            $("header").removeClass('scrolled');
        }
    })

//===========

let textLength = 0;
let text = "I'm Eric";

function type() {
    let textChar = text.charAt(textLength++);
    let paragraph = document.getElementById("typed");
    let charElement = document.createTextNode(textChar);
    paragraph.appendChild(charElement);
    if(textLength < text.length+1) {
        setTimeout('type()', 120);
    } else {
        text = '';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    type();
});



let textLength2 = 0;
let text2 = "Programmer";

function type2() {
    let textChar2 = text2.charAt(textLength2++);
    let paragraph2 = document.getElementById("typed2");
    let charElement2 = document.createTextNode(textChar2);
    paragraph2.appendChild(charElement2);
    if(textLength2 < text2.length+1) {
        setTimeout('type2()', 120);
    } else {
        text2 = '';
    }
}


document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type2, 1000);
});


//============



// var header = document.getElementById("ulActive");
// var navbtns = header.getElementsByClassName("navbtn");
// for (var i = 0; i < navbtns.length; i++) {
//   navbtns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   if (current.length > 0) { 
//     current[0].className = current[0].className.replace(" active", "");
//   }
//   this.className += " active";
//   });
// }
//============================
