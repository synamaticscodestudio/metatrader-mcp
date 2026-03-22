# BookSubscribeBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Market Depth ](imtmanagerapi_book.md "Depth of Market Functions")/ BookSubscribeBatch | [](imtmanagerapi_booksubscribe.md "BookSubscribe") [](imtmanagerapi_bookunsubscribe.md "BookUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::BookSubscribeBatch
Subscribe to events related to a change of the Market Depth of multiple symbols.
C++
MTAPIRES IMTManagerAPI::BookSubscribeBatch( LPWSTR* symbols, // Array of symbols UINT symbols_total, // Number of symbols IMTBookSink* sink // A pointer to the IMTBookSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.BookSubscribeBatch( array<String^>^  symbols, // Array of symbols CIMTBookSink sink // CIMTBookSink object )  
---  
Python
ManagerAPI.BookSubscribeBatch( symbols, # Array of symbols sink # IMTBookSink object )  
---  
Parameters
symbol
[in] An array of symbols, to which events you want to subscribe.
symbols_total
[in] The number of elements in the 'symbols' array.
sink
[in] A pointer to the object that implements the [IMTBookSink](imtbooksink.md "IMTBookSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
Subscribing to events is thread safe. The same [IMTBookSink](imtbooksink.md "IMTBookSink") interface cannot subscribe to an event twice: in this case the [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") response code is returned.
The object at which 'sink' points, must remain in the memory (must not be removed) until the call of [IMTManagerAPI::BookUnsubscribe](imtmanagerapi_bookunsubscribe.md "BookUnsubscribe") or until the manager interface is deleted using the [IMTManagerAPI::Release](imtmanagerapi_release.md "Release") method.
Subscription to Market Depth change events is only performed for the symbols selected using the [IMTManagerAPI::SelectedAdd](imtmanagerapi_selectedadd.md "SelectedAdd") method (or for all symbols if they are selected using [IMTManagerAPI::SelectedAddAll](imtmanagerapi_selectedaddall.md "SelectedAddAll"))
In the [IMTBookSink::OnBook](imtbooksink_onbook.md "OnBook") handler, Manager API always receives the full Marked Depth state (rather than changes relative to the current state). Market Depth elements passed in [MTBook::items](mtbook.md "MTBook/MTBookDiff") are sorted by price in the descending order. Market Depth reset elements ([MTBookItem::ItemReset](mtbookitem.htm#enbookitem)) are not used in Manager API.
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates only a successful event subscription, but not receiving of the Market Depth. To receive notifications about the arrival of the Market Depth, use the [IMTBookSink::OnBook](imtbooksink_onbook.md "OnBook") event.