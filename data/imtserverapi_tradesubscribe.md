# TradeSubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Trade Requests ](serverapi_trading_request.md "Trade Requests")/ TradeSubscribe | [](imtserverapi_tradeexecutioncreate.md "TradeExecutionCreate") [](imtserverapi_tradeunsubscribe.md "TradeUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::TradeSubscribe
Subscribe to events and hooks associated with trade requests.
MTAPIRES IMTServerAPI::TradeSubscribe( IMTTradeSink* sink // A pointer to the IMTTradeSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTTradeSink](imttradesink.md "Interface of Trade Events") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTTradeSink](imttradesink.md "Interface of Trade Events") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::TradeUnsubscribe](imtserverapi_tradeunsubscribe.md "TradeUnsubscribe") or until the plugin is deleted.