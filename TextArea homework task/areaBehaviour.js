/* eslint-disable brace-style */
/* eslint-disable no-unused-vars */

let minRows = 5;
let maxRows = 10;

function updateVariables () {
  let tempMinRows = Number(document.getElementById('minimum').value);
  let tempMaxRows = Number(document.getElementById('maximum').value);
  if (tempMaxRows < tempMinRows || tempMinRows < 1 || tempMaxRows === tempMinRows) {
    window.alert('Incorrect parameters were passed. Make sure the values are positive');
  } else {
    minRows = tempMinRows;
    maxRows = tempMaxRows;
    updateArea();
  }
}

function updateArea () {
  let textArea = document.getElementById('myAreaId');
  let charsPairRow = Number(textArea.cols);
  let printedText = textArea.value;
  let seperateLines = printedText.split('\n');
  let rowCounter = Number(0);
  for (let i = 0; i < seperateLines.length; i++) {
    if (seperateLines[i].length > charsPairRow) {
      rowCounter = rowCounter + Math.ceil(Number(seperateLines[i].length) / charsPairRow);
    }
    else {
      rowCounter = rowCounter + 1;
    }
  }
  if (rowCounter > minRows && rowCounter <= maxRows) {
    textArea.rows = rowCounter;
  }
  else if (rowCounter <= minRows) {
    textArea.rows = minRows;
  }
  else {
    textArea.rows = maxRows;
  }
}
