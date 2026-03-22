# Daily Reports (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade")/ Daily Reports | [](imtexposuresink_onexposureupdate.md "OnExposureUpdate") [](imtdaily.md "\\IMTDaily") |
| --- | --- | --- |
| --- | --- |

Daily Reports
In the MetaTrader 5 platform, daily reports can be generated for each [group of users](imtcongroup_reportsmode.md "ReportsMode"). A database of daily reports is a specialized storage of statuses of trading accounts. Statuses of accounts is saved at [the end of each trading day](imtconservertrade_overnighttime.md "OvernightTime"). In addition, daily reports contain other information about an account (status as of the previous day and month, totals for a trading day, etc.).
MetaTrader 5 API interfaces allow obtaining data of users' daily reports. The following daily report interfaces are available:
  * [IMTDaily](imtdaily.md "\\IMTDaily") An interface that provides access to all parameters of daily reports.
  * [IMTDailyArray](imtdailyarray.md "IMTDailyArray") An interface for working with the arrays of daily reports.
  * [IMTDailySink](imtdailysink.md "IMTDailySink") An interface for handling events associated with change of a database of reports.
