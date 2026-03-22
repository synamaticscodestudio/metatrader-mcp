# TradeSubscribeEOD (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Trade Requests ](serverapi_trading_request.md "Trade Requests")/ TradeSubscribeEOD | [](imtserverapi_tradebalancecheck.md "TradeBalanceCheck") [](imtserverapi_tradeunsubscribeeod.md "TradeUnsubscribeEOD") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::TradeSubscribeEOD
Subscribe to events associated with operations performed at the end of a trading day/month.
MTAPIRES IMTServerAPI::TradeSubscribeEOD( IMTEndOfDaySink* sink // A pointer to the IMTEndOfDaySink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTEndOfDaySink](imtendofdaysink.md "Interface of End-of-Day Events") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTEndOfDaySink](imtendofdaysink.md "Interface of End-of-Day Events") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::TradeUnsubscribeEOD](imtserverapi_tradeunsubscribeeod.md "TradeUnsubscribeEOD") or until the plugin is deleted.