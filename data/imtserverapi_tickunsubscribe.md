# TickUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Tick Data ](serverapi_ticks.md "Tick Data")/ TickUnsubscribe | [](imtserverapi_ticksubscribe.md "TickSubscribe") [](imtserverapi_tickadd.md "TickAdd") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::TickUnsubscribe
Unsubscribe from the events and hooks associated with changes in the database of price data.
MTAPIRES IMTServerAPI::TickUnsubscribe( IMTTickSink* sink // A pointer to the IMTTickSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTTickSink](imtticksink.md "IMTTickSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTServerAPI::TickSubscribe](imtserverapi_ticksubscribe.md "TickSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.