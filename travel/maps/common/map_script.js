// Storing them so that they don't have to be fetched repeatedly
let stateDoms = $("path, circle"),
  infoBoxDom = $('#info-box');

// If any of the state IDs match those in our file, apply the relevant CSS class
$.each(stateDoms, function (key, value) {
  if (value.id in states) {
    let state = states[value.id];
    if ('visited' in state) {
      value.classList.add("visited");
    } else if ('passed' in state) {
      value.classList.add("passed");
    }
  }
});

// On hover, show in the info box with info for the state
stateDoms.hover(function (e) {
  let stateId = e.target.id,
    state = states[stateId] || {},
    infoBoxData = "",
    dateToDisplay = state.visited || state.passed;
  infoBoxData += (state.name || stateId);
  if (dateToDisplay) {
    infoBoxData += "<br>" + dateToDisplay;
  }
  if (state.description) {
    infoBoxData += "<br>" + state.description;
  }
  infoBoxDom.css('display', 'block');
  infoBoxDom.html(infoBoxData);
});

stateDoms.mouseleave(function (e) {
  infoBoxDom.css('display', 'none');
});

$(document).mousemove(function (e) {
  infoBoxDom.css('top', e.pageY - infoBoxDom.height() - 30);
  infoBoxDom.css('left', e.pageX - (infoBoxDom.width()) / 2);
}).mouseover();