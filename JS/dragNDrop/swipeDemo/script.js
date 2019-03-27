// target elements with the "draggable" class
interact('.draggable').draggable({
  axes: 'y',
  // enable inertial throwing
  inertia: true,
  // keep the element within the area of it's parent
  restrict: {
    restriction: "parent",
    endOnly: true,
    elementRect: {
      top: 0,
      left: 0,
      bottom: 1,
      right: 1
    }
  },
  // enable autoScroll
  autoScroll: false,

  // call this function on every dragmove event
  onmove: dragMoveListener,
  // call this function on every dragend event
  onend: function (event) {
    console.log('onend')

  }
});

function dragMoveListener(event) {

  var target = event.target,
    // keep the dragged position in the data-x/data-y attributes

    x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
    //        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
    y = (parseFloat(target.getAttribute('data-y')) || 0);

  //if moved more then 300pixels hide

  if (x > 0) {
    $('#' + event.target.id + 'Row').css('background', 'red');
    if (x > 200) {
      removeElement(event);
    }

  } else {
    $('#' + event.target.id + 'Row').css('background', 'green');
    if (x < -200) {
      removeElement(event);
    }
  }

  function removeElement(event) {
    $('#' + event.target.id).velocity({
      opacity: 0,
      fontSize: '0px'
    }, {duration: 600});
    $('#' + event.target.id + 'Row').slideUp(600);
  }

  // translate the element
  target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

  // update the posiion attributes
  target.setAttribute('data-x', x);
  //    target.setAttribute('data-y', y);
}

// this is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener;
