function newColumn() {
  var checkDate = new Date();
  var sheet = SpreadsheetApp.getActive().getSheetByName("HISTORY");
  var columnPos = sheet.getLastColumn();
  sheet.insertColumnAfter(columnPos);
  var newCol = columnPos + 1;
  sheet.getRange(1, newCol).setValue(checkDate);
}

function recordAttendance() {
  var signInSheet = SpreadsheetApp.getActive().getSheetByName("SIGN-IN");
  var historySheet = SpreadsheetApp.getActive().getSheetByName("HISTORY");
  var columnPos = historySheet.getLastColumn();
  var currentRow = 2;
  while (currentRow <= 997) {
    if (signInSheet.getRange(currentRow, 3).isChecked()) {
      historySheet.getRange(currentRow, columnPos).setValue("X");
    }
    currentRow++;
  }
  signInSheet.getRange("C2:C997").uncheck();
}
