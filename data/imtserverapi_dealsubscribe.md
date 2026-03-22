# DealSubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Deals ](serverapi_trading_deal.md "Deals")/ DealSubscribe | [](imtserverapi_dealcreatearray.md "DealCreateArray") [](imtserverapi_dealunsubscribe.md "DealUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DealSubscribe
Subscribe to events and hooks associated with changes in the database of deals.
MTAPIRES IMTServerAPI::DealSubscribe( IMTDealSink* sink // A pointer to the IMTDealSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTDealSink](imtdealsink.md "IMTDealSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTDealSink](imtdealsink.md "IMTDealSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::DealUnsubscribe](imtserverapi_dealunsubscribe.md "DealUnsubscribe") or until the plugin is deleted.