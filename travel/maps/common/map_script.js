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

/*
let dateMap = {};
$.each(states, function (stateId, state) {
  if ('passed' in state) {
    if (state['passed'] in dateMap) {
      dateMap[state['passed']].push(stateId + '-passed');
    } else {
      dateMap[state['passed']] = [stateId + '-passed'];
    }
  } else if ('visited' in state) {
    if (state['visited'] in dateMap) {
      dateMap[state['visited']].push(stateId + '-visited');
    } else {
      dateMap[state['visited']] = [stateId + '-visited'];
    }
  }
});

let sortedDates = Object.keys(dateMap).sort();
console.log(sortedDates);
$.each(sortedDates, function (index, date) {
  var eventsOnDate = dateMap[date];
  setTimeout(function () {
    $.each(eventsOnDate, function (indexx, stateEvent) {
      var stateAndEvent = stateEvent.split("-");
      var stateDOM = $('#' + stateAndEvent[0])[0];
      stateDOM.classList = [stateAndEvent[1]];
      console.log(stateAndEvent[0] + stateDOM.classList);
    });
  }, 500 * index);
});
*/

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