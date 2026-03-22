# Calculate Profit (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading") / [ Trade Requests ](webapi_trade.md "Trade Requests")/ Calculate Profit | [](webapi_trade_margin_check.md "Check Margin") [](webapi_dealer_send.md "Send Request") |
| --- | --- | --- |
| --- | --- |

Calculate Profit for a Position
The request allows calculating profit to be received after closing the position under the specified conditions.
Request Format
GET /api/trade/calc_profit?group=group&symbol=symbol&type=operation&volume=volume&price_open=open price&price_close=close price POST /api/trade/calc_profit?group=group&symbol=symbol&type=operation&volume=volume&price_open=open price&price_close=close price  
---  
Response Format
{ "retcode" : "code description", "answer" : { "Profit" : "profit", "Profit_rate" : "profit conversion rate" } }  
---  
Example
//--- request to the server GET /api/trade/calc_profit?group=demoforex&symbol=EURUSD&type=0&volume=10000000&price_open=1.11500&price_close=1.12500 //--- server response { "retcode" : "0 Done", "answer" : { "Profit" : "77.750000", "Profit_rate" : "0.777508" } }  
---  
Request Parameters
  * group — the name of the account group for which the calculation is performed.
  * symbol — the name of the trading instrument for which the calculation is performed.
  * type — position direction: buying - 0, selling - 1.
  * volume — position volume, one unit correspond to 1/100000000 lots.
  * price_open — position open price.
  * price_close — position close price.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * profit — position profit in the [deposit currency](imtcongroup_currency.md "Currency") of the specified group.
  * profit_rate — position profit conversion rate from the trading symbol [profit currency](imtconsymbol_currencyprofit.md "CurrencyProfit") to the group deposit currency.

Note
  * Profit is converted from the profit currency of a trading instrument to the group deposit currency using the current market prices for the group.
  * The symbol involved in the calculation must be available to the group for which the calculation is performed.
