function etbVouchersQuery(conn) {
  var sql = conn.createStatement();
  var result = sql.executeQuery('SELECT * FROM etb_vouchers_db ORDER BY created_atr DESC');
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet1 = ss.getSheetByName('etb_vouchers');
  var cell = sheet1.getRange('A2');
  var numCols = result.getMetaData().getColumnCount();
  
  var row = 0;
  while (result.next()) {
    for (var col = 0; col < numCols; col++) {
      cell.offset(row, col).setValue(result.getString(col + 1));
    }
    row++;
  }
    
  result.close();
  sql.close();
}

function etbContactsQuery(conn) {
  var sql = conn.createStatement();
  var result = sql.executeQuery('SELECT * FROM etb_contact_db ORDER by ID DESC');

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet4 = ss.getSheetByName('etb_contact');
  var cell = sheet4.getRange('A2');
  var numCols = result.getMetaData().getColumnCount();
  
  var row = 0;
  while (result.next()) {
    for (var col = 0; col < numCols; col++) {
      cell.offset(row, col).setValue(result.getString(col + 1));
    }
    row++;
  }
  
  result.close();
  sql.close();
}
