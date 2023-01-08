

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
    $('.guy').css('opacity', '100');
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
    const prent = $( "#prent" ).val();
    localStorage.setItem('prent', prent);
    const prentKleur = $( "#prentKleur" ).val();
    localStorage.setItem('prentKleur', prentKleur);
    if (prent == 'Zuyd') { 
        $('.zuydPrent').css('display', 'block')
    } else if (prent == 'AC/DC'){
        $('.acdcPrent').css('display', 'block')
    } else {
        $('.legoPrent').css('display', 'block')
    }
    $('.st0').css('fill', prentKleur)
    $('#textInputted').html('Zo dus jij vindt ' + prent + ' leuk? <br><br> Je komt aan bij een grot. Hier zou het gouden steentje moeten liggen. Je krijgt hier de keuze om naar links of naar rechts te gaan.')
    $('html, body').animate({ scrollTop: $('#scene-4').offset().top }, 'slow');
}

function toLeft(){
    $('html, body').animate({ scrollTop: $('#scene-5').offset().top }, 'slow');
    $('#textInputtedLR').html('Je loopt naar links en hoort in de verte een geluid, vreemd. Zou het een engelen geluid zijn, zou dit de juiste weg naar het gouden steentje zijn?')
    $('#wrong').css('display', 'none')
    $('.lastig').addClass('loser');
    $('.lastig').html('GA TERUG');
    $('#probeer').html('En of dat dit een engelengeluid was. Je loopt de hoek om en ziet de enige echte Jerome Gelissen zijn Japanse versie van Loco Loco zingen! Maar helaas... Geen gouden steentje.')

}

function toRight(){
    $('html, body').animate({ scrollTop: $('#scene-5').offset().top }, 'slow');
    $('#textInputtedLR').html('Je loopt naar rechts het is heel donker, in de verte zie je licht, het lijkt er op dat dit de juiste weg is.')
    $('.lastig').removeClass('loser');
    $('.lastig').html('GO');
    $('#probeer').html('Je loopt de rechterkant op. Er heerst een gouden gloed over de gehele kamer, echter zit er hekwerk rondom het blokje. Jawel, het gouden blokje is in zicht!')

}

function toSixth(){
    $('html, body').animate({ scrollTop: $('#scene-6').offset().top }, 'slow');
}

$('.lastig').click(function () {
    if ($(this).hasClass('loser')) {
        $('html, body').animate({ scrollTop: $('#scene-4').offset().top }, 'slow');
    } else {
        $('html, body').animate({ scrollTop: $('#scene-7').offset().top }, 'slow');
    }
})





function clearStorage() {
    localStorage.clear();
    $("body").css('background', '#F7F7FF');
    $('html, body').animate({ scrollTop: $('#scene-0').offset().top }, 'slow');
    $('.guy').css('opacity', '0');
    $(".logo").css('width', '60vw');
    $('.zuydPrent').css('display', 'none')
    $('.acdcPrent').css('display', 'none')
    $('.legoPrent').css('display', 'none')
    $('#wrong').css('display', 'block')

}


$(window).on("touchstart touchmove scroll", function(event) {
    event.preventDefault();
});
