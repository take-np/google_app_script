// make url list
function urlCreate(){
  var list = ["a", "b", "c"];
  var urlList = [];
  for (var i = 0; i < list.length; i++){
    var url = "URL記入" + list[i] ; // 所定のURLを記入
    urlList.push(url);
  }
  console.log(urlList);
}

// oepn url
function myFunction() {
  var openUrlList = urlCreate(); // ここへ開きたいURLを入力してください。
  for (var i = 0; i < openUrlList.length; i++){
    var eachUrl = openUrlList[i];
    var script = "<script>window.open('" + eachUrl + "', '_blank').focus();google.script.host.close();</script>";
    var html = HtmlService.createHtmlOutput(script);
    SpreadsheetApp.getUi().showModalDialog(html, 'Open ' + eachUrl);
  }
}
