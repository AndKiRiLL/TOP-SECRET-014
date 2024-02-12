field.onclick = function(event) {

    // Задаём координаты для поля относительно окна браузера made Andriyanov ////
    let fieldCoords = this.getBoundingClientRect();

    // Координаты мячика
    let ballCoords = {
      top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
      left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
    };


    /////// ОГРАНИЧЕНИЯ ДЛЯ МЕЧА НА ПОЛЕ //// made Andriyanov ////

    // Top
    if (ballCoords.top < 0) ballCoords.top = 0;

    // Left
    if (ballCoords.left < 0) ballCoords.left = 0;

    // Right
    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
      ballCoords.left = field.clientWidth - ball.clientWidth;
    }

    // Bottom
    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
      ballCoords.top = field.clientHeight - ball.clientHeight;
    }


    // Определение что мячик в воротах ///// made Andriyanov /////
    let status = document.querySelector('#status')
    if (ballCoords.left + ball.clientWidth / 2 < 120 && ballCoords.top + ball.clientHeight / 2 > 320 && ballCoords.top + ball.clientHeight / 2 < 540) {
        status.style.visibility = 'visible'
    } else if (ballCoords.left + ball.clientWidth / 2 > 1155 && ballCoords.top + ball.clientHeight / 2 > 320 && ballCoords.top + ball.clientHeight / 2 < 540) {
        status.style.visibility = 'visible'
    } else {
        status.style.visibility = 'hidden'
    }


    // Преобразование в значения для стилей
    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
  }



///////////////////// Вторая часть //////////////////////////// made Andriyanov ///////
let elem_global = document.getElementById('html')

elem_global.addEventListener('mousemove', function(event) {
    let x = event.clientX;
    let y = event.clientY;

    elem = document.elementFromPoint(x, y)
})

function message_close() {
  elem.parentNode.parentNode.remove()
}