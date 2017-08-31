# garage_lead_data_extractor
This is a [Google Apps Script](https://script.google.com) attached to a Google Spreadhsheet.

Extracts lead data stored in MySQL databases on the website servers before inserting them into 4 sheets of a Google Sheets workbook. The filling of data and sending of an email are all [time triggered](https://developers.google.com/apps-script/guides/triggers/installable).

Time triggers are used to trigger the two functions in the `Code.gs` file.

The two [time-triggered](https://developers.google.com/apps-script/guides/triggers/installable) functions call a variuety of database methods to update the Google Spreadsheet these scrpts are attached to then finally a Spreadsheet addon called *Schedule & Send Email in Spreadsheets* is used to send this spreadsheet once a month. 

THe use of the addon is supurfluous. The whole thing could be done from within the script alone and will be added at a later update.
