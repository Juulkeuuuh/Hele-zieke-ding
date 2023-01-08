

//storage shit
var numKeys = localStorage.length;
const keyNaam = localStorage.getItem('naam');
const keyColour = localStorage.getItem('colour');
if (keyColour) {
    $('#colourText').html(keyColour+'?! I like that colour too!');
    $("body").css('background', keyColour);
}
const keyAge = localStorage.getItem('age');
if (numKeys > 1) {
    $('html, body').animate({ scrollTop: $('#scene-'+numKeys).offset().top }, 'slow');
} else {
    $('html, body').animate({ scrollTop: $('#scene-'+0).offset().top }, 'slow');
}

function start(){
    $('html, body').animate({ scrollTop: $('#scene-1').offset().top }, 'slow');
    $(".logo").css('width', '30vw');
}

function nome() {
    const naam = $( "#name" ).val();
    localStorage.setItem('naam', naam);
    $('h5').html(naam);
    $('html, body').animate({ scrollTop: $('#scene-2').offset().top }, 'slow');
    $('.guy').css('display', 'block');
}
 function kleurtjes() {
    let colour1 =  $("#colour1").val();
    localStorage.setItem('colour1', colour1);
    $(".cls-1").css('fill', colour1);
    let colour2 =  $("#colour2").val();
    localStorage.setItem('colour2', colour2);
    $(".cls-2").css('fill', colour2);
    let colour3 =  $("#colour3").val();
    localStorage.setItem('colour3', colour3);
    $(".cls-3").css('fill', colour3);
    // $('#colourText').html(colour+'?! I like that colour too!');
    $('html, body').animate({ scrollTop: $('#scene-3').offset().top }, 'slow');
 }

function leef() {
    const leeftijd = $( "#age" ).val();
    localStorage.setItem('age', leeftijd);
    $('html, body').animate({ scrollTop: $('#scene-4').offset().top }, 'slow');
}

function clearStorage() {
    localStorage.clear();
    $("body").css('background', '#F7F7FF');
    $('html, body').animate({ scrollTop: $('#scene-0').offset().top }, 'slow');
    $('.guy').css('display', 'none');
}


$(window).on("touchstart touchmove scroll", function(event) {
    event.preventDefault();
});
