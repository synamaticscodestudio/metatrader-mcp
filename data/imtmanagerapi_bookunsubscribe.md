# BookUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Market Depth ](imtmanagerapi_book.md "Depth of Market Functions")/ BookUnsubscribe | [](imtmanagerapi_booksubscribebatch.md "BookSubscribeBatch") [](imtmanagerapi_bookunsubscribebatch.md "BookUnsubscribeBatch") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::BookUnsubscribe
Unsubscribe from events associated with changes in the symbol's DOM.
C++
MTAPIRES IMTManagerAPI::BookUnsubscribe( LPCWSTR symbol, // Symbol IMTBookSink* sink // A pointer to the IMTBookSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.BookUnsubscribe( string symbol, // Symbol CIMTBookSink sink // CIMTBookSink object )  
---  
Python
ManagerAPI.BookUnsubscribe( symbol, # Symbol sink # IMTBookSink object )  
---  
Parameters
symbol
[in] The symbol from which your unsubscribe.
sink
[in] A pointer to the object that implements the [IMTBookSink](imtbooksink.md "IMTBookSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTManagerAPI::BookSubscribe](imtmanagerapi_booksubscribe.md "BookSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.