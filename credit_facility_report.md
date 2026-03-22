# Credit Facility (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Ready-made Examples ](reportapi_examples.md "Ready-made Examples")/ Credit Facility | [](agents_detailed_report.md "Agents Detailed") [](daily_report.md "Daily") |
| --- | --- | --- |
| --- | --- |

Credit Facility Report
Credit Facility Report is a report on credit operations ("Credit" balance operation) for the specified period.
Setup
The following parameters must be set in the manager terminal before requesting the report:
  * Groups — the groups containing the accounts, on which the report will be created;
  * Period — starting and ending date of the period, for which credit funds accrual/withdrawal will be requested.

The following data on credit funds accrual/withdrawal is provided:
  * Deal — credit funds accrual/withdrawal deal ticket;
  * Login — number of the account, at which the deals has been performed;
  * Name — account holder name;

  * Group — group the account belongs to;

  * Country — client's country of residence;
  * Account comment — comment to the trading account;

  * Time — transaction time;
  * Comment — comments on the transaction;
  * Profit — transaction size. A positive value means that the funds have been credited, while a negative one means that the funds have been withdrawn;
  * Currency — transaction currency.
