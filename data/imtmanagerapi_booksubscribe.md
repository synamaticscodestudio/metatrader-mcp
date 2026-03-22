# BookSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Market Depth ](imtmanagerapi_book.md "Depth of Market Functions")/ BookSubscribe | [](imtmanagerapi_book.md "Depth of Market Functions") [](imtmanagerapi_booksubscribebatch.md "BookSubscribeBatch") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::BookSubscribe
Subscribe to events associated with changes in the symbol's DOM.
C++
MTAPIRES IMTManagerAPI::BookSubscribe( LPCWSTR symbol, // Symbol IMTBookSink* sink // A pointer to the IMTBookSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.BookSubscribe( string symbol, // Symbol CIMTBookSink sink // CIMTBookSink object )  
---  
Python
ManagerAPI.BookSubscribe( symbol, # Symbol sink # IMTBookSink object )  
---  
Parameters
news
[in] The symbol for which your subscribe.
sink
[in] A pointer to the object that implements the [IMTBookSink](imtbooksink.md "IMTBookSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
An attempt to subscribe to a symbol with the Depth of Market disabled ([IMTConSymbol::TickBookDepth](imtconsymbol_tickbookdepth.md "TickBookDepth") equal to ==0) will cause the [MT_RET_ERR_NETWORK](retcodes_common.md "Common errors") error.
Note
Subscribing to events is thread safe. One and the same interface [IMTBookSink](imtbooksink.md "IMTBookSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTManagerAPI::BookUnsubscribe](imtmanagerapi_bookunsubscribe.md "BookUnsubscribe") or until the administrator interface is deleted using the [IMTManagerAPI::Release](imtmanagerapi_release.md "Release") method.
The subscription to the events associated with DOM changes works only for the symbols selected using the [IMTManagerAPI::SelectedAdd](imtmanagerapi_selectedadd.md "SelectedAdd") (or for all symbols if they are selected using [IMTManagerAPI::SelectedAddAll](imtmanagerapi_selectedaddall.md "SelectedAddAll")).
In the [IMTBookSink::OnBook](imtbooksink_onbook.md "OnBook") handler, Manager API always receives the full Marked Depth state (rather than changes relative to the current state). Market Depth elements passed in [MTBook::items](mtbook.md "MTBook/MTBookDiff") are sorted by price in the descending order. Market Depth reset elements ([MTBookItem::ItemReset](mtbookitem.htm#enbookitem)) are not used in Manager API.
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates only a successful event subscription, but not receiving of the Market Depth. To receive notifications about the arrival of the Market Depth, use the [IMTBookSink::OnBook](imtbooksink_onbook.md "OnBook") event.