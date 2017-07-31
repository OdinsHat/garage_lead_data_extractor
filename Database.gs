/**
 * @file carries functions for database handling including opening and closing connection
 * @author Doug Bromley
 */


/**
 * Connect to the database using the Script Properties set in the Constants.gs file
 *
 * @returns {Object} a JDBC database connection object
 */
function connectDatabase() {
  var scriptProperties = PropertiesService.getScriptProperties();
  
  var db_ip = scriptProperties.getProperty('DBIP');
  var db_name = scriptProperties.getProperty('DBNAME')
  var db_user = scriptProperties.getProperty('DBUSER');
  var db_pass = scriptProperties.getProperty('DBPASS');
  
  var conn = Jdbc.getConnection("jdbc:mysql://" + db_ip + ":3356/" + db_name, db_user, db_pass);
  
  return conn;
}

/**
 * Given the conn object close the database connection
 *
 * @param {Object} conn jdbc connection object
 */
function closeDatabase(conn) {
  conn.close();
}