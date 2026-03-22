# Trade Requests (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading")/ Trade Requests | [](webapi_position_fix.md "Fix Position") [](webapi_trade_data_structure.md "Data Structure") |
| --- | --- | --- |
| --- | --- |

Trade
The MetaTrader 5 Web API allows to perform trade operations on client accounts. Currently one request is available:
| Request | Description |
| --- | --- |
| --- | --- |
| [/api/trade/balance](webapi_trade_balance.md "Deposit/Withdrawal") | Conduct balance operations on client accounts. |
| [/api/trade/calc_rate_buy](webapi_trade_rate_buy.md "Calculate Conversion Rate for Buy") | Calculate the rate for buying one currency for another currency in accordance with the account group settings. |
| [/api/trade/calc_rate_sell](webapi_trade_rate_sell.md "Calculate Conversion Rate for Sell") | Calculate the rate for selling one currency for another currency in accordance with the account group settings. |
| [/api/trade/check_margin](webapi_trade_margin_check.md "Check Margin") | Check the availability of margin required for order execution. |
| [/api/trade/calc_profit](webapi_trade_profit.md "Calculate Profit") | Calculate profit of a position closed under specified trading conditions. |
| [/api/dealer/send_request](webapi_dealer_send.md "Send Request") | Send a trade request to a server on behalf of the dealer. |
| [/api/dealer/get_request_result](webapi_dealer_updates.md "Get Request Result") | Get the result of a trade request execution on the server. |