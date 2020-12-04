function newColumn() {
  var checkDate = new Date();
  var sheet = SpreadsheetApp.getActive().getSheetByName("history");
  var columnPos = sheet.getLastColumn();
  sheet.insertColumnAfter(columnPos);
  var newCol = columnPos + 1;
  sheet.getRange(1, newCol).setValue(checkDate);
}

function recordAttendance() {
  var signInSheet = SpreadsheetApp.getActive().getSheetByName("signin");
  var historySheet = SpreadsheetApp.getActive().getSheetByName("history");
  var columnPos = historySheet.getLastColumn();
  var currentRow = 2;
  while (currentRow <= 997) {
    if (signInSheet.getRange(currentRow, 3).isChecked()) {
      historySheet.getRange(currentRow, columnPos).setValue("x");
    }
    currentRow++;
  }
  signInSheet.getRange("C2:C997").uncheck();
}