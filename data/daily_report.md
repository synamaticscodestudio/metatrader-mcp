# Daily (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Ready-made Examples ](reportapi_examples.md "Ready-made Examples")/ Daily | [](credit_facility_report.md "Credit Facility") [](daily_detailed_report.md "Daily Detailed") |
| --- | --- | --- |
| --- | --- |

Daily Report
Daily Report is a report on the financial state of the requested accounts as of the end of a day.
Setup
The following parameters must be set in the manager terminal before requesting the report:
  * Groups — the groups containing the accounts, on which the report must be created. You can specify one or several accounts separating them by commas;
  * Period — starting and ending date of the period. The report will be generated for each day in the selected period.

Daily reports generation must be enabled on the server for the appropriate account groups to generate this type of reports.  
---  
The report contains the following data:
  * Time — date and time, the data is generated for;
  * Login — account number;
  * Name — account holder name;

  * Group — group the account belongs to;

  * Country — client's country of residence;
  * Account comment — comment to the trading account;

  * Prev Balance — balance at the end of the previous day;
  * Deposit — total funds deposited/withdrawn from the account per day; 
  * Closed P/L — total closed profit/loss at all deals per day.
  * Balance — balance at the end of the day;
  * Credit — credit funds deposited/withdrawn from the account per day;
  * Floating P/L — floating profit/loss of all open positions at the end of the day;
  * Equity — equity at the end of the day;
  * Margin — money required to cover open positions as of the end of the day;
  * Free Margin — amount of free margin volume as of the end of the day;
  * Currency — deposit currency.
