// both function are the results of w3c and code institute lessons

//theme-switcher
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change',() => {
        document.body.classList.toggle('dark');
});

//let the toogle botton disappear on click
$(document).ready(function(){
  $("#flip").click(function(){
    $("#tips-div").slideToggle("slow");
  });
});

