# Return Codes (MetaTrader5SDK)

|  | Return Codes | [](journal.md "Journal Constants") [](retcodes_successful.md "Successful completion") |
| --- | --- | --- |
| --- | --- |

Return Codes
The vast majority of functions in the MetaTrader 5 API return a special code to notify of the results of their implementation To develop high-quality, stable applications, a programmer should check the return codes of functions of called API methods.
Return codes are contained in the EnMTAPIRetcode enumeration, in file MT5APIConstants.h and are divided into several groups:
| Group of codes | Range of values | Description |
| --- | --- | --- |
| --- | --- | --- |
| [Successful completion](retcodes_successful.md "Successful completion") | 0-1 | Codes that are returned with the successful completion of an operation. |
| [Common errors](retcodes_common.md "Common errors") | 2-999 | Codes returned when common errors occur. |
| [Authentication](retcodes_authentication.md "Authentication") | 1000-1999 | Codes returned during the authentication of users. |
| [Configuration management](retcodes_configs.md "Configuration Management") | 2000-2999 | Codes that are returned when changing configurations. |
| [User management](retcodes_clients.md "User management") | 3000-3999 | The codes returned when working with the database of users. |
| [Trade management](retcodes_trades.md "Trade management") | 4000-4999 | The codes returned when working with the trading database. |
| [Report Generation](retcodes_reports.md "Report Generation") | 5000-5999 | Codes that are returned when generating reports. |
| [Price Data](retcodes_price_history.md "Price Data") | 6000-6999 | Codes that are returned when working with price data. |
| [Trade Requests](retcodes_trade_request.md "Trade Requests") | 10000-10999 | Codes returned while processing trade requests. |
| [Dealer](retcodes_dealer.md "Dealer") | 11000-11999 | Codes returned during the work of a dealer. |
| [API](retcodes_api.md "API") | 12000-12999 | Codes related to the operation of API. |
| [Instant messengers](retcodes_messenger.md "Messengers") | 14000-14999 | Codes related to message sending via instant messengers. |
| [Subscriptions](retcodes_subscription.md "Subscriptions") | 15000-15999 | Codes related to the operation of the [Subscriptions](https://support.metaquotes.net/en/docs/mt5/platform/administration/subscriptions) service. |