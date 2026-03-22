# BookSubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Depth of Market ](serverapi_book.md "Depth of Market")/ BookSubscribe | [](serverapi_book.md "Depth of Market") [](imtserverapi_bookunsubscribe.md "BookUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::BookSubscribe
Subscribe to events associated with changes in the symbol's DOM.
MTAPIRES IMTServerAPI::BookSubscribe( IMTBookSink* sink // A pointer to the IMTBookSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTBookSink](imtbooksink.md "IMTBookSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTBookSink](imtbooksink.md "IMTBookSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::BookUnsubscribe](imtserverapi_bookunsubscribe.md "BookUnsubscribe") or until the plugin is deleted.
This method can be used only on history servers.
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates only a successful event subscription, but not receiving of the Market Depth. To receive notifications about the arrival of the Market Depth, use the [IMTBookSink::OnBook](imtbooksink_onbook.md "OnBook") event.