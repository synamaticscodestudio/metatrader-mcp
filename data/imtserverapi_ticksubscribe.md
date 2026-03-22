# TickSubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Tick Data ](serverapi_ticks.md "Tick Data")/ TickSubscribe | [](serverapi_ticks.md "Tick Data") [](imtserverapi_tickunsubscribe.md "TickUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::TickSubscribe
Subscribe to events and hooks associated with changes in the database of price data.
MTAPIRES IMTServerAPI::TickSubscribe( IMTTickSink* sink // A pointer to the IMTTickSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTTickSink](imtticksink.md "IMTTickSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTTickSink](imtticksink.md "IMTTickSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTServerAPi::TickUnsubscribe](imtserverapi_tickunsubscribe.md "TickUnsubscribe") or until the plugin is deleted.