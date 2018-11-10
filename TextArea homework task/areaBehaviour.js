/* eslint-disable brace-style */
/* eslint-disable no-unused-vars */

let minRows = 5;
let maxRows = 10;
let currentRows = minRows;

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
  /* If the linebreak count is between min and max rows, increase the row count to be equal to linebreak count */
  if (seperateLines.length > minRows && seperateLines.length <= maxRows) {
    currentRows = seperateLines.length;
  } /* If there is less or equal amount of linebreaks, default the row count to the min value */
  else if (seperateLines.length <= minRows) {
    currentRows = minRows;
  } /* If the linebreaks exceed the maximum available count of rows, default it to the maximum amount of rows */
  else if (seperateLines.length > maxRows) {
    currentRows = maxRows;
  }
  /* Implement counter to check the number of symbols and linebreaks. */
  else {
    
  }
  textArea.rows = currentRows;
}
