function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Script').addItem('GraphPapersize', 'GraphPapersize').addToUi();
}

function onEdit() {
  onOpen();
}

function GraphPaperize() {
  var ui          = SpreadsheetApp.getUi(),
      sheet       = SpreadsheetApp.getActiveSheet(),
      response    = ui.prompt('Enter width/height of cells (default 25):'),
      defaultSize = 25;

  if (response.getSelectedButton() == ui.Button.OK) {
    var inputSize = parseInt(response.getResponseText()),
        size      = (inputSize > 0) ? inputSize : defaultSize;
    for(var i = 1; i <= 1000; i++) {
      sheet.setRowHeight(i, size);
      if (i <= 26) sheet.setColumnWidth(i, size);
    }
  }
}
