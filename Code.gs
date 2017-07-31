/**
 * @file The main entry point for event triggers to perform one of the two main halves of the task
 * @author Doug Bromley
 */

/**
 * Update the garage data sheets with the data from 2 of 4 tables.
 */
function updateETBSheets() {
  var conn = connectDatabase();
  etbVouchersQuery(conn);
  etbContactsQuery(conn);
  closeDatabase(conn);
}

/**
 * Update the garage data sheets with the data from 2 of 4 tables.
 */
function updateBritSheets() {
  var conn = connectDatabase();
  britanniaVouchersQuery(conn);
  britanniaContactQuery(conn);
  closeDatabase(conn);
}
