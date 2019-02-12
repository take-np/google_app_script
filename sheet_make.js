// テンプレートと同様のシートを複数枚作成・削除

// make
function myList() {
  var list = ["a","b","c","d","e","f"];
  for (var i = 0; i < list.length; i++){
    f = list[i];
    var ss_active_all = SpreadsheetApp.getActiveSpreadsheet();

    var ss_sheet_temp = ss_active_all.getSheetByName("temp_sheet");
    var ss_sheet_copy = ss_sheet_temp.copyTo(ss_active_all);
    ss_sheet_copy.setName(f);
  }
}

// delete
function deleteSheets(){
  var list = ["a","b","c","d","e","f"];
  for (var i = 0; i < list.length; i++){
    f = list[i];
    var ss_active_all = SpreadsheetApp.getActiveSpreadsheet();
    // そのスプレッドシートにある シート名:テスト用シート のシートを取得
    var sheet = ss_active_all.getSheetByName(f);
    // そのシートを削除
    ss_active_all.deleteSheet(sheet);
    }
}
