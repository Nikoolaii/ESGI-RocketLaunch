'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
let rocket = $('#rocket');
let fireBtn = $('#firing-button');
let time = $('#billboard span');
let remiseZero = $('#cancel-button');
let timer = null;


/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/
function startCounter() {
  if(fireBtn.attr('src') === 'images/firing-button.png') {
    let counter = 10;
    rocket.attr('src', 'images/rocket2.gif')
    fireBtn.attr('class', 'disabled');
    fireBtn.attr('disabled', 'disabled');
    timer = setInterval(function() {
      if (counter > 0) {
        counter--;
        time.text(counter);
      } else {
        clearInterval(timer);
        fireBtn.attr('class', 'enabled');
        fireBtn.removeAttr('disabled');
        launchRocket();
      }
    }, 1000);
  } else {
    rocket.removeClass('tookOff');
    rocket.attr("src", "images/rocket1.png");
    fireBtn.attr('src', 'images/firing-button.png')
    time.text('10');
  }
}

function launchRocket() {
  fireBtn.attr('src', 'images/cancel-button.png')
  rocket.attr("src", "images/rocket3.gif");
  rocket.addClass('tookOff');
}

function remiseZeroF() {
  clearInterval(timer);
  rocket.removeClass('tookOff');
  rocket.attr("src", "images/rocket1.png");
  fireBtn.attr('src', 'images/firing-button.png')
  time.text('10');
  fireBtn.attr('class', 'enabled');
}

function stars() {
  let main = $('main');
  let nbStar = 100;

  let starsType = ['tiny', 'normal', 'big']

  for (let i = 0; i <= nbStar; i++) {

    let randomStarsType = Math.floor(Math.random() * starsType.length);

    let star = $('<div>');
    star.addClass('star');
    star.addClass(starsType[randomStarsType]);
    star.css('left', Math.random() * 100 + '%');
    star.css('top', Math.random() * 100 + '%');
    main.append(star);
  }
}

/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
fireBtn.on('click', function () {
  startCounter();
});

remiseZero.on('click', function () {
  remiseZeroF();
});

$('document').ready(function () {
  stars();
});