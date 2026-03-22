# Daily Positions (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Ready-made Examples ](reportapi_examples.md "Ready-made Examples")/ Daily Positions | [](daily_orders_report.md "Daily Orders") [](daily_expert_report.md "Daily Expert Advisors") |
| --- | --- | --- |
| --- | --- |

Daily Positions
Daily Positions Report features information about [trading positions](imtposition.md "IMTPosition") which remained open at the end of the selected day.
Configuration in MetaTrader 5 Manager
The following parameters must be set in the manager terminal before requesting a report:
  * Groups — the report will be generated on accounts listed in these groups.
  * Period — a day, for which the report must be generated.

[Daily reports](imtcongroup_enum.htm#enreportsmode) must be enabled on the server for the group containing the necessary accounts, to generate this type of reports.  
---  
Data in the report
The report is presented as a table displaying the following position data:
  * Position — position ticket (unique number).
  * ID — position identifier in the external system.
  * Login — the account of the [number](imtuser.md "IMTUser") on which the position was opened.
  * Name — account holder's name.

  * Group — group the account belongs to.

  * Country — client's country of residence.
  * Account comment — comment to the trading account.

  * Creation time — position opening time. The record has a format of YYYY.MM.DD HH:MM.MSC (year.month.day hour:minute.millisecond).
  * Action — position type, buying or selling.
  * Symbol — financial instrument for which the position as opened.
  * Volume — position volume in lots.
  * Price — weight-average position opening price: (price of deal 1 * volume of deal 1 + ... + price of deal N * volume of deal N) / (volume of deal 1 + ... + volume of deal N). The rounding accuracy of the average weighted price is equal to the number of decimal places in the symbol price plus three additional digits.
  * S/L — Stop Loss level.
  * T/P — Take Profit level.
  * Commission — the amount of position withheld on the position. It is calculated as the sum of commissions on [deals](imtdeal_commission.md "Commission") by which the position was formed.
  * Fee — total position fees. It is calculated as the sum of fees on deals by which the position was formed.
  * Swap — calculated swaps.
  * Profit — position profit at the end of the selected day.
  * Currency — the currency in which the profit is indicated.
  * Reason — [reason for](imtposition_reason.md "Reason") opening a position.
  * Comment — a comment to position.
