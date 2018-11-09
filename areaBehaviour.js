/* eslint-disable no-unused-vars */

let minRows = 0;
let maxRows = 999999;

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
  textArea.rows = minRows;
}
