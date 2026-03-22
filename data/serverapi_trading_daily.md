# Daily Reports (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface")/ Daily Reports | [](imtserverapi_newssend.md "NewsSend") [](imtserverapi_dailycreate.md "DailyCreate") |
| --- | --- | --- |
| --- | --- |

Daily Reports
In the MetaTrader 5 platform, daily reports can be generated for each [group of users](imtcongroup_reportsmode.md "ReportsMode"). A database of daily reports is a specialized storage of statuses of trading accounts. Statuses of accounts is saved at [the end of each trading day](imtconservertrade_overnighttime.md "OvernightTime"). In addition, daily reports contain other information about an account (status as of the previous day and month, totals for a trading day, etc.).
Functions of the MetaTrader 5 Server API allow receiving information from the daily reports and responding to events associated with changes in the database.
| Function | Purpose |
| --- | --- |
| --- | --- |
| [DailyCreate](imtserverapi_dailycreate.md "DailyCreate") | Create an object of a daily report. |
| [DailyCreateArray](imtserverapi_dailycreatearray.md "DailyCreateArray") | Create an object of the array of daily reports. |
| [DailySubscribe](imtserverapi_dailysubscribe.md "DailySubscribe") | Subscribe to events and hooks associated with changes in the database of daily reports. |
| [DailyUnsubscribe](imtserverapi_dailyunsubscribe.md "DailyUnsubscribe") | Unsubscribe from the events and hooks associated with changes in the database of daily reports. |
| [DailyGet](imtserverapi_dailyget.md "DailyGet") | Get an array of daily reports by the date range and login. |
| [DailyGetLight](imtserverapi_dailygetlight.md "DailyGetLight") | Get an array of light daily reports by the date range and login. Unlike full daily reports, light reports do not include open client orders and positions. |
| [DailySelectByGroup](imtserverapi_dailyselectbygroup.md "DailySelectByGroup") | Request daily reports from a database for a group of accounts using additional criteria. |
| [DailySelectByLogins](imtserverapi_dailyselectbylogins.md "DailySelectByLogins") | Request daily reports from a database for a list of logins using additional criteria. |