function britanniaVouchersQuery(conn) {
  var start = new Date();
  var sql = conn.createStatement();
  var result = sql.executeQuery('SELECT * FROM britannia_vouchers_db ORDER BY ID DESC');
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet2 = ss.getSheetByName('britannia_vouchers');
  var cell = sheet2.getRange('A2');
  var numCols = result.getMetaData().getColumnCount();
  
  Logger.log(cell.getA1Notation());
  var row = 0;
  while (result.next()) {
    for (var col = 0; col < numCols; col++) {
      cell.offset(row, col).setValue(result.getString(col + 1));
    }
    row++;
  }
    
  result.close();
  sql.close();
  var end = new Date();
  Logger.log('Time elapsed: %sms', end - start);
}

function britanniaContactQuery(conn) {
  var start = new Date();
  var sql = conn.createStatement();
  var result = sql.executeQuery('SELECT * FROM britannia_contact_db ORDER BY ID DESC');
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet3 = ss.getSheetByName('britannia_contact');
  var cell = sheet3.getRange('A2');
  var numCols = result.getMetaData().getColumnCount();
  
  Logger.log(cell.getA1Notation());
  var row = 0;
  while (result.next()) {
    for (var col = 0; col < numCols; col++) {
      cell.offset(row, col).setValue(result.getString(col + 1));
    }
    row++;
  }
    
  result.close();
  sql.close();
  var end = new Date();
  Logger.log('Time elapsed: %sms', end - start);
}
