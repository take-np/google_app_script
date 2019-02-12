function myFunction() {
 var ss = SpreadsheetApp.getActiveSpreadsheet()
 Logger.log(ss.getName());
}

function myMsg(){
  Browser.msgBox('Hello World');
}

function manual_run() {
  // munual_runを実行後、//setavailabilityが可能となる
  var res = set_availability(["tmiyazawa@netprotections.co.jp"]);
  Logger.log(res);
}

function set_availability(calendarids){ //calendaridsはカレンダidの配列を渡す。2人でなくてもよいようにはしているが、時間がかかりすぎる問題がある。

  //idをGoogle カレンダーの配列にする
  const calendars = calendarids.map(function(element, index, array) {
      return CalendarApp.getCalendarById(element);
  });

  //候補の日付の配列を取る
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const availability_spreadsheet = spreadsheet.getSheetByName('ss');
  const full = availability_spreadsheet.getDataRange().getValues();
  const schedules = full.slice(2).map(function(element, index, array) { //3行目からA列に日付が入っている仕様のはず
      return element[0];
  });

  //候補の日付の配列から、予定がない日付をフィルタして返す
  return schedules.filter(function(time, index, array) {
      return calendars.every(function(cal, ind, arr) {
        const st = new Date(time);
        var ed = new Date(time);
        ed.setMinutes(st.getMinutes() + 30);
        return cal.getEvents(st, ed).length === 0;
      })
  });
}
