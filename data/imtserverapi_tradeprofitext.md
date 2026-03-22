# TradeProfitExt (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Trade Requests ](serverapi_trading_request.md "Trade Requests")/ TradeProfitExt | [](imtserverapi_tradeprofit.md "TradeProfit") [](imtserverapi_traderatebuy.md "TradeRateBuy") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::TradeProfitExt
Calculates profit for the specified trading conditions using extended volume accuracy.
MTAPIRES IMTServerAPI::TradeProfitExt( LPCWSTR group, // Group name LPCWSTR symbol, // Symbol name const UINT type, // Operation type const UINT64 volume, // Volume const double price_open, // Open price const double price_close, // Close price double& profit, // Profit double& profit_rate // Profit conversion rate )  
---  
Program Parameters
group
[in] The name of the group of clients, for which the calculations are performed.
symbol
[in] The name of the trading instrument, for which the calculations are performed.
type
[in] Position direction: buying - [IMTPosition::POSITION_BUY](imtposition_enum.htm#enpositionaction), selling - [IMTPosition::POSITION_SELL](imtposition_enum.htm#enpositionaction).
volume
[in] Position volume in the UINT64 format (one unit corresponds to 1/100000000 lot, for example, 105000000 means 1.05 lots).
price_open
[in] Position open price.
price_close
[in] Position close price.
profit
[out] Position profit in the [deposit currency](imtcongroup_currency.md "Currency") of the specified group.
profit_rate
[out] Conversion rate for the profit of the position from the [profit currency](imtconsymbol_currencyprofit.md "CurrencyProfit") of a trading instrument to the group deposit currency.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Profit is converted from the profit currency of a trading instrument to the group deposit currency using the current market prices for the group.
The method operates with [the extended volume accuracy](features.htm#volume) (8 decimal places). For standard volume accuracy, use the [IMTServerAPI::TradeProfit](imtserverapi_tradeprofit.md "TradeProfit") method.