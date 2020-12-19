//theme-switcher

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change',() => {
        document.body.classList.toggle('dark');
});

//let the toogle botton disappear on click
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});

