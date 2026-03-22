# TradeUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Trade Requests ](serverapi_trading_request.md "Trade Requests")/ TradeUnsubscribe | [](imtserverapi_tradesubscribe.md "TradeSubscribe") [](imtserverapi_traderequest.md "TradeRequest") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::TradeUnsubscribe
Unsubscribe from events and hooks associated with trade requests.
MTAPIRES IMTServerAPI::TradeUnsubscribe( IMTTradeSink* sink // A pointer to the IMTTradeSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTTradeSink](imttradesink.md "Interface of Trade Events") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTServerAPI::TradeSubscribe](imtserverapi_tradesubscribe.md "TradeSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.