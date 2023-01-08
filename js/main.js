

//storage shit
var numKeys = localStorage.length;
const keyNaam = localStorage.getItem('naam');
$('#nameText').html('Hi '+keyNaam+'!');
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



console.log(numKeys);

function start(){
    $('html, body').animate({ scrollTop: $('#scene-1').offset().top }, 'slow');
    $(".logo").css('width', '30vw');
}

function nome() {
    const naam = $( "#name" ).val();
    localStorage.setItem('naam', naam);
    $('#nameText').html('Hi '+naam+'!');
    $('html, body').animate({ scrollTop: $('#scene-2').offset().top }, 'slow');
}
 function kleurtjes() {
    let colour =  $("#colour").val();
    localStorage.setItem('colour', colour);
    $("body").css('background', colour);
    $('#colourText').html(colour+'?! I like that colour too!');
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
}


$(window).on("touchstart touchmove scroll", function(event) {
    event.preventDefault();
});
