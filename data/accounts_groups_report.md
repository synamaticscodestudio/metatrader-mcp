# Accounts Groups (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Ready-made Examples ](reportapi_examples.md "Ready-made Examples")/ Accounts Groups | [](reportapi_examples.md "Ready-made Examples") [](accounts_growth_report.md "Accounts Growth") |
| --- | --- | --- |
| --- | --- |

Accounts Groups Report
Accounts Groups Report is a statistical report on accounts groups on the server. The following data is provided for each group:
  * Accounts — number of accounts in a group;
  * Active — number of active accounts in a group. An account is deemed to be active, if it performed at least one connection to the server over the past three months.
  * Balance — current total balance of all accounts in a group;
  * Floating P/L — current total floating profit/loss of all accounts in a group;
  * Equity — current total amount of funds on all accounts in a group;
  * Currency — deposit currency in a group.

The settings are not provided for this report. All parameters are relevant at the moment of report request.