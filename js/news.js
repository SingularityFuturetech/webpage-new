$(document).ready(function() {
    //alert("todo listo")
    })
    
    const title = "NEWS";
    
    for(let i=0; i<title.length; i++){
      let fadeTime = 500
      let timer = fadeTime + 400*i;
      let letra = title.charAt(i);
      setTimeout(function(){    
         $('h2').append(`<span class="letra${i}">${letra}        </span>`);    
         $(`h2 > .letra${i}`).hide();
         $(`h2 > .letra${i}`).fadeIn(fadeTime);},timer
       );
    }