
// mygtukas nuvedantis į puslapio viršų

function scrollToTop() {
  window.scrollTo(0, 0);
}


// mobili navigacija

function mobnavbutton() {
  var xyz = document.getElementById("mobile-navigation")
  if (xyz.style.display === "block") {
    xyz.style.display = "none";
  } else {
    xyz.style.display = "block";
  }
}


  
// formai

function popUpTask(){
  var zig = document.getElementById("popupform");
  var giz = document.getElementById("overlay");
  if(zig.style.display = 'none'){
    zig.style.display = "block";
    giz.style.display = "block";
  }
}

function closeThatForm(){
  var zig = document.getElementById("popupform");
  var giz = document.getElementById("overlay");
  zig.style.display = "none";
  giz.style.display = "none";
}

if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}

// Viešbučiai

function changecontentsingapore(){
  document.getElementById("btn_singapore").classList.remove('button_active');
  document.getElementById("btn_china").classList.remove('button_active');
  document.getElementById("btn_india").classList.remove('button_active');
  document.getElementById("btn_bhutan").classList.remove('button_active');
  document.getElementById("btn_thailand").classList.remove('button_active');
  document.getElementById("btn_nepal").classList.remove('button_active');
  document.getElementById("btn_singapore").classList.add('button_active');

  document.getElementById("singapore").style.display = "flex";
  document.getElementById("china").style.cssText = "none";
  document.getElementById("india").style.display = "none";
  document.getElementById("bhutan").style.display = "none";
  document.getElementById("thailand").style.display = "none";
  document.getElementById("nepal").style.display = "none";
  }

function changecontentchina(){
  document.getElementById("btn_singapore").classList.remove('button_active');
  document.getElementById("btn_china").classList.remove('button_active');
  document.getElementById("btn_india").classList.remove('button_active');
  document.getElementById("btn_bhutan").classList.remove('button_active');
  document.getElementById("btn_thailand").classList.remove('button_active');
  document.getElementById("btn_nepal").classList.remove('button_active');
  document.getElementById("btn_china").classList.add('button_active');

  document.getElementById("singapore").style.display = "none";
  document.getElementById("china").style.display = "flex";
  document.getElementById("india").style.display = "none";
  document.getElementById("bhutan").style.display = "none";
  document.getElementById("thailand").style.display = "none";
  document.getElementById("nepal").style.display = "none";
}

function changecontentindia(){
  document.getElementById("btn_singapore").classList.remove('button_active');
  document.getElementById("btn_china").classList.remove('button_active');
  document.getElementById("btn_india").classList.remove('button_active');
  document.getElementById("btn_bhutan").classList.remove('button_active');
  document.getElementById("btn_thailand").classList.remove('button_active');
  document.getElementById("btn_nepal").classList.remove('button_active');
  document.getElementById("btn_india").classList.add('button_active');

  document.getElementById("singapore").style.display = "none";
  document.getElementById("china").style.display = "none";
  document.getElementById("india").style.display = "flex";
  document.getElementById("bhutan").style.display = "none";
  document.getElementById("thailand").style.display = "none";
  document.getElementById("nepal").style.display = "none";
}

function changecontentbhutan(){
  document.getElementById("btn_singapore").classList.remove('button_active');
  document.getElementById("btn_china").classList.remove('button_active');
  document.getElementById("btn_india").classList.remove('button_active');
  document.getElementById("btn_bhutan").classList.remove('button_active');
  document.getElementById("btn_thailand").classList.remove('button_active');
  document.getElementById("btn_nepal").classList.remove('button_active');
  document.getElementById("btn_bhutan").classList.add('button_active');

  document.getElementById("singapore").style.display = "none";
  document.getElementById("china").style.display = "none";
  document.getElementById("india").style.display = "none";
  document.getElementById("bhutan").style.display = "flex";
  document.getElementById("thailand").style.display = "none";
  document.getElementById("nepal").style.display = "none";
}

function changecontentthailand(){
  document.getElementById("btn_singapore").classList.remove('button_active');
  document.getElementById("btn_china").classList.remove('button_active');
  document.getElementById("btn_india").classList.remove('button_active');
  document.getElementById("btn_bhutan").classList.remove('button_active');
  document.getElementById("btn_thailand").classList.remove('button_active');
  document.getElementById("btn_nepal").classList.remove('button_active');
  document.getElementById("btn_thailand").classList.add('button_active');

  document.getElementById("singapore").style.display = "none";
  document.getElementById("china").style.display = "none";
  document.getElementById("india").style.display = "none";
  document.getElementById("bhutan").style.display = "none";
  document.getElementById("thailand").style.display = "flex";
  document.getElementById("nepal").style.display = "none";
}

function changecontentnepal(){
  document.getElementById("btn_singapore").classList.remove('button_active');
  document.getElementById("btn_china").classList.remove('button_active');
  document.getElementById("btn_india").classList.remove('button_active');
  document.getElementById("btn_bhutan").classList.remove('button_active');
  document.getElementById("btn_thailand").classList.remove('button_active');
  document.getElementById("btn_nepal").classList.remove('button_active');
  document.getElementById("btn_nepal").classList.add('button_active');

  document.getElementById("singapore").style.display = "none";
  document.getElementById("china").style.display = "none";
  document.getElementById("india").style.display = "none";
  document.getElementById("bhutan").style.display = "none";
  document.getElementById("thailand").style.display = "none";
  document.getElementById("nepal").style.display = "flex";
}