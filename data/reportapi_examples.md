# Ready-made Examples (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API")/ Ready-made Examples | [](reportapi_multithreading.md "Multithreading") [](accounts_groups_report.md "Accounts Groups") |
| --- | --- | --- |
| --- | --- |

Ready-made Examples
MetaTrader 5 Report API installation packet contains several ready-made examples of reports in source codes. Their analysis allows a developer to quickly learn the details of using Report API and start creating custom reports.
Report examples can be found in the [/Examples](files_folders_structure.htm#exmaples) folder of the directory where MetaTrader 5 Report API is installed.
  * Accounts.Standard.Reports — this example demonstrates possibilities for [HTML reports](reportapi_html.md "HTML Reports") generation using a custom template and also for realization of graphic expression in the form of SVG chart It includes the following reports:

  * [Accounts Groups](accounts_groups_report.md "Accounts Groups") — statistical report on accounts in groups on a server.
  * [Accounts Grow](accounts_growth_report.md "Accounts Growth") — report on the growth of the number of accounts in groups on a server.
  * [Accounts Lifetime by Countries](accounts_lifetime_report.md "Accounts Lifetime by Countries") — lifetime of accounts with a distribution by countries.

  * Capital.Standard.Reports — example of financial reports on clients:

  * [Money Flow Daily](money_flow_daily_report.md "Money Flow Daily") — a group of reports presenting the movement of funds on client accounts.
  * [Money Flow Weekly](money_flow_weekly_report.md "Money Flow Weekly") — a group of reports representing the weekly movement of funds on client accounts.
  * [Lifetime Value](lifetime_value_report.md "Lifetime Value") — a group of reports concerning client LTVs.
  * [First Time Deposit](first_time_deposit_report.md "First Time Deposit") — a group of reports on first-time deposits on client accounts.
  * [Retention of Clients](retention_of_clients_report.md "Retention of Clients") — new client retention report.
  * [Retention of Trading Accounts](retention_of_trading_accounts_report.md "Retention of Trading Accounts") — new client retention report by individual accounts.

  * Trades.Standard.Reports — the source code that contains [tabular reports](reportapi_tables.md "Tabular Reports") generation examples included into the MetaTrader 5 platform:

  * [Agent](agents_report.md "Agents") — report on all transactions connected with charging agent commissions.

  * [Agents Detailed](agents_detailed_report.md "Agents Detailed") — detailed report on agent commissions.

  * [Credit Facility](credit_facility_report.md "Credit Facility") — credit operations report for the selected period.
  * [Daily Report](daily_report.md "Daily") — report on the financial state of the requested accounts as of the end of a day.
  * [Daily Detailed](daily_detailed_report.md "Daily Detailed") — detailed report on the financial state of the one selected account as of the end of the day.
  * [Deals History](deals_history_report.md "Deals History") — summary report on the deals for the selected period.
  * [Deals Profit](deals_profit_report.md "Deals Profit") — detailed report on deals for the selected period.
  * [Deals Initiators](deals_initiators_report.md "Deals Initiators") — deal initiators (reasons) report.
  * [Deals Geography](deals_geography_report.md "Deals Geography") — trading activity distribution by country.
  * [Deals Weekly](deals_weekly_report.md "Deals Weekly") — trader activity report.
  * [Deposit and Withdrawal](deposit_withdrawal_report.md "Deposit and Withdrawal") — report on deposit and withdrawal operations for the selected period.
  * [Equity](equity_report.md "Equity") — report on the financial state of the requested accounts as at the end of the day. The accounts are grouped according to their "Comment" field value. This report allows to generate reports on clients' accounts grouping them by custom criteria.

  * [Execution Types](execution_type_report.md "Execution Types") — report on the number, volume and type of executed trades.

  * [Margin Calls](margin_call_report.md "Margin Calls") — report on the state of margin call or stop out accounts.
  * [Orders History](orders_history_report.md "Orders History") — summary report on the orders for the selected period.

  * [Positions History](positions_history_report.md "Positions History") — summary report on positions for the selected period.

  * [Risk Appetite](risk_appetite_report.md "Risk Appetite") — a report reflecting the risk level accepted by traders.
  * [Segregated](segregated_report.md "Segregated") — summary report on the change of financial state of the requested accounts for the specified period.
  * [Summary](summary_report.md "Summary") — summary motion of funds and funds cycles for the selected period.

  * [Trade Accounts](trade_accounts_report.md "Trade Accounts") — report on the current trading statuses of client accounts.

  * [Trade Modifications](trade_modification_report.md "Trade Modifications") — report on trade operations manually changed by an administrator, manager or API.
  * [Trade Performance Summary](performance_summary_report.md "Trade Performance Summary") — detailed trading statistics of trading accounts.
  * [Trade Group Statistics](group_statistics_report.md "Trade Group Statistics") — detailed statistics of groups: the number of accounts, commission amounts, share of trades by type, and more.

  * [StopOut Compensations](stopouts_compensation_report.md "StopOut Compensations") — report on operations associated with the compensation of a negative balance in the situation of Stop out. All trades with the "so compensation" type are included into this report.
  * [Fast Profit Deals](fast_profit_deals_report.md "Fast Profit Deals") — this report is designed to detect traders exploiting arbitrage opportunities through quote delays

  * Daily.Standard.Reports — the source code that contains daily reports generation examples included into the MetaTrader 5 platform:

  * [Daily Dealing](daily_dealing_report.md "Daily Dealing") — daily report on the activity of dealers.
  * [Daily Server Logs](daily_server_report.md "Daily Server Logs") — statistical report on the operation of the platform for the specified day.
  * [Daily Trades](daily_trade_report.md "Daily Trades") — report on trade operations for the specified day.

  * [Daily Orders](daily_orders_report.md "Daily Orders") — report on client orders open at the end of the selected day.
  * [Daily Positions](daily_positions_report.md "Daily Positions") — report on client positions open at the end of the selected day.

  * [Daily Expert Advisors](daily_expert_report.md "Daily Expert Advisors") — report on trading operations performed by Expert Advisors of clients.

  * Gateway.Standard.Reports — the source code that contains examples of several reports on gateways:

  * [Gateways Turnover](gateways_turnover_report.md "Gateways Turnover") — report on volumes of the deals handled by gateways.
  * [Gateways Profit](gateways_profit_report.md "Gateways Profit") — report on volumes of the deals handled by gateways, as well as the profit earned by a broker when handling these deals.
  * [Gateways White Label](gateways_wl_report.md "Gateways White Label") — report on volumes of the deals performed on a trading server by external brokers via MetaTrader 5 Gateway (standard or White Label version).

  * Trades.Transaction.Reports — the source code that contains an example of the trade transaction report:

  * [Trade Transactions](trade_transaction_report.md "Trade Transactions") — provides detailed data on trading operations on MetaTrader 5 servers.

  * [NFA](nfa_report.md "NFA") — the source code that contains an example of reports to be submitted to NFA regulator.

  * [EMIR](emir_report.md "EMIR") — the source code that contains an example of a report to be submitted to regulator according to EMIR.

  * [Fund Overview](fund_overview_report.md "Fund Overview") — a report reflecting the key characteristics of a hedge fund.
