function updateETBSheets() {
  var conn = connectDatabase();
  etbVouchersQuery(conn);
  etbContactsQuery(conn);
  closeDatabase(conn);
}

function updateBritSheets() {
  var conn = connectDatabase();
  britanniaVouchersQuery(conn);
  britanniaContactQuery(conn);
  closeDatabase(conn);
}
