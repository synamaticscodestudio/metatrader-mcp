# Orders History (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Ready-made Examples ](reportapi_examples.md "Ready-made Examples")/ Orders History | [](margin_call_report.md "Margin Calls") [](positions_history_report.md "Positions History") |
| --- | --- | --- |
| --- | --- |

Orders History Report
Orders History Report is a summary report on the orders over the selected period. This report includes all pending orders (filled, canceled, expired, etc.) except for currently active orders (placed).
Setup
The following parameters must be set in the manager terminal before requesting the report:
  * Groups — the groups containing the accounts, on which the report must be created. You can specify one or several accounts separating them by commas;
  * Period — starting and ending date of the period, for which the report will be generated.

The report contains the following data on the orders:
  * Order — ticket number (unique number) of a trade operation;

  * ID — order ID in the external system.

  * Login — account number;
  * Name — account holder name;

  * Group — group the account belongs to;

  * Country — client's country of residence;
  * Account comment — comment to the trading account;

  * Setup time — order setup time. The record is represented as YYYY.MM.DD HH:MM (year.month.day hour:minute);
  * Type — type of a trade operation: "Buy" — a long position, "Sell" — a short position or names of pending orders "Sell Stop", "Sell Limit", "Buy Stop", "Buy Limit", "Buy Stop Limit" or "Sell Stop Limit".
  * Symbol — a financial instrument of the order;
  * Volume — the volume requested in the order/executed volume, lots;
  * Price — price specified in the order at which the trade operation should be executed;

  * S/L — Stop Loss level.
  * T/P — Take Profit level.

  * ID — order ID in the external system.

  * Done time — order execution time;

  * Reason — [reason](imtorder_reason.md "Reason") for placing the order.
  * State — [order state](imtorder_state.md "State") at the end of the day for which the report is generated.

  * Comment — comments on the order.
