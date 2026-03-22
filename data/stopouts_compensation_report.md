# StopOut Compensations (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Ready-made Examples ](reportapi_examples.md "Ready-made Examples")/ StopOut Compensations | [](group_statistics_report.md "Trade Group Statistics") [](money_flow_daily_report.md "Money Flow Daily") |
| --- | --- | --- |
| --- | --- |

StopOuts Compensation Report
StopOuts Compensation Report reflects operations relating to the [compensation of a negative balance after the Stop Out state](https://support.metaquotes.net/en/docs/mt5/platform/administration/admin_groups/groups_settings#compensate). All trades with the "so compensation" type are included into this report.
The report features sorting the requested data. Specify the following parameters before requesting a report in the manager terminal:
  * Groups — the groups containing the accounts, on which the report must be created. You can specify one or several accounts separating them by commas.
  * Period — starting and ending date of the period, for which the report will be generated.

The following data on each compensation deal is available in the report:
  * Deal — the ticket of the deal.
  * Login — account number.
  * Name — account holder's name.

  * Group — group the account belongs to.

  * Country — client's country of residence.
  * Account comment — comment to the trading account.

  * Time — time of the compensation operation.
  * Amount — the compensation amount.
  * Currency — the currency, in which the compensation was performed. Corresponds to the account deposit currency.
