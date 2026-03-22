# Check Margin (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading") / [ Trade Requests ](webapi_trade.md "Trade Requests")/ Check Margin | [](webapi_trade_rate_sell.md "Calculate Conversion Rate for Sell") [](webapi_trade_profit.md "Calculate Profit") |
| --- | --- | --- |
| --- | --- |

Check Margin for the Order
This request allows checking the availability of margin required for the execution of this order.
Request Format
GET /api/trade/check_margin?login=login&symbol=symbol&type=operation&volume=volume&price=price POST /api/trade/check_margin?login=login&symbol=symbol&type=operation&volume=volume&price=price  
---  
Response Format
{ "retcode" : "code description", "answer" : { "new": { "Login": "login", ... }, {  "current": { "Login": "login", ... } } }  
---  
Example
//--- request to the server GET /api/trade/check_margin?login=3018855&symbol=EURUSD&type=1&volume=100000&price=1.27780 //--- server response { "retcode" : "0 Done", "answer" : { "new": { "Login" : "3018855", "CurrencyDigits" : "2", "Balance" : "100000.00", "Credit" : "0.00", "Margin" : "0.88", "MarginFree" : "99999.12", "MarginLevel" : "11363636.36", ... }, {  "current": { "Login" : "3018855", "CurrencyDigits" : "2", "Balance" : "100000.00", "Credit" : "0.00", "Margin" : "0.00", "MarginFree" : "100000.00", "MarginLevel" : "0.00", ... } } }  
---  
Request Parameters
  * login — the login of the account for which the order is executed.
  * symbol — the name of the trading symbol for which the order is executed.
  * type — trading order type:

  * 0 — Buy
  * 1 — Sell
  * 2 — Buy Limit
  * 3 — Sell Limit
  * 4 — Buy Stop
  * 5 — Sell Stop
  * 6 — Buy Stop Limit
  * 7 — Sell Stop Limit
  * 8 — Close By
  * volume — the volume of the trading orders, one unit correspond to 1/100000000 lots. The final order size is calculated based on the current [contract size](imtconsymbol_contractsize.md "ContractSize") for the specified trading instrument.
  * price — trading order execution type.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * new — trading account state after the execution of the specified order.
  * current — trading account state before the execution of the specified order.

Note
The check is performed taking into account the current state of the [client account](imtaccount.md "IMTAccount") (balance, credit, floating profit, open orders and positions, etc.) and using the current market prices for the [group](config_group.md "Groups") of the client.