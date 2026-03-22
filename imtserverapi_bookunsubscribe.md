# BookUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Depth of Market ](serverapi_book.md "Depth of Market")/ BookUnsubscribe | [](imtserverapi_booksubscribe.md "BookSubscribe") [](imtserverapi_bookget.md "BookGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::BookUnsubscribe
Unsubscribe from events associated with changes in the symbol's DOM.
MTAPIRES IMTServerAPI::BookUnsubscribe( IMTBookSink* sink // A pointer to the IMTBookSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTBookSink](imtbooksink.md "IMTBookSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTServerAPI::BookSubscribe](imtserverapi_booksubscribe.md "BookSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.
This method can be used only on history servers.