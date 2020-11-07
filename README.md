# MySQL to Google Sheets Convertor
This is a [Google Apps Script](https://script.google.com) attached to a Google Spreadsheet. It was developed for a client who wante dall their contact requests, email subscriptions and reviews that contained emails to be combined into several Google Sheets which could be emailed to them.

It extracts lead data stored in MySQL databases on the website servers before inserting them into 4 separate sheets of a Google Sheets workbook. The filling of data and sending of an email are all [time triggered](https://developers.google.com/apps-script/guides/triggers/installable).

Time triggers are used to trigger the two functions in the `Code.gs` file.

The two [time-triggered](https://developers.google.com/apps-script/guides/triggers/installable) functions call a variety of database methods to update the Google Spreadsheet these scrpts are attached to then finally a Spreadsheet addon called *Schedule & Send Email in Spreadsheets* is used to send this spreadsheet once a month. 

    The use of the addon is supurfluous. The whole thing could be done from within the script alone and will be added at a later update.
