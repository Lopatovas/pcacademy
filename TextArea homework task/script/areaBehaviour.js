// eslint-disable-next-line no-unused-vars
function areaControl () {
  let minRows = 5;
  let maxRows = 10;

  function updateMinMaxRows () {
    let minimumInput = document.getElementById('minimum');
    let maximumInput = document.getElementById('maximum');
    let tempMinRows = Number(minimumInput.value);
    let tempMaxRows = Number(maximumInput.value);
    if (tempMaxRows < tempMinRows || tempMinRows < 1 || tempMaxRows === tempMinRows) {
      showMessage('Error, incorrect parameters were passed. Make sure the inputs are positive and Minimum < Maximum');
      minimumInput.value = minRows;
      maximumInput.value = maxRows;
    } else if (tempMinRows % 1 !== 0 || tempMaxRows % 1 !== 0) {
      showMessage('Error, incorrect parameters were passed. Make sure the values are full numbers');
      minRows = Math.round(tempMinRows);
      maxRows = Math.round(tempMaxRows);
      minimumInput.value = minRows;
      maximumInput.value = maxRows;
      updateArea();
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
      } else {
        rowCounter = rowCounter + 1;
      }
    }
    if (rowCounter > minRows && rowCounter <= maxRows) {
      textArea.rows = rowCounter;
    } else if (rowCounter <= minRows) {
      textArea.rows = minRows;
    } else {
      textArea.rows = maxRows;
    }
  }

  function showMessage (text) {
    let message = document.getElementById('message');
    message.innerHTML = text;
    message.className = 'show';
    setTimeout(disableToast(message), 3000);
  }

  function disableToast (message) {
    message.className = message.className.replace('show', '');
  }

  updateMinMaxRows();
}
