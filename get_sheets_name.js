function  wmap_getSheetId(sheet_name) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheet_name);
  var tmp = sheet.getSheetId();
  return tmp;
}

function wmap_getSheetsName(){
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  var sheet_names = new Array();
  
  if (sheets.length >= 1) {  
    for(var i = 0;i < sheets.length; i++)
    {
      sheet_names.push(sheets[i].getName());
    }
  }
  return sheet_names;

