# TradeUnsubscribeEOD (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Trade Requests ](serverapi_trading_request.md "Trade Requests")/ TradeUnsubscribeEOD | [](imtserverapi_tradesubscribeeod.md "TradeSubscribeEOD") [](imtserverapi_tradeaccountset.md "TradeAccountSet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::TradeUnsubscribeEOD
Unsubscribe from events associated with operations performed at the end of a trading day/month.
MTAPIRES IMTServerAPI::TradeUnsubscribeEOD( IMTEndOfDaySink* sink // A pointer to the IMTEndOfDaySink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTEndOfDaySink](imtendofdaysink.md "Interface of End-of-Day Events") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTServerAPI::TradeSubscribeEOD](imtserverapi_tradesubscribeeod.md "TradeSubscribeEOD"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.