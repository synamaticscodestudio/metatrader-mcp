# BookGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Market Depth ](imtmanagerapi_book.md "Depth of Market Functions")/ BookGet | [](imtmanagerapi_bookunsubscribebatch.md "BookUnsubscribeBatch") [](imtmanagerapi_summary.md "Summary Functions") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::BookGet
Get a symbol's Depth of Market.
C++
MTAPIRES IMTManagerAPI::BookGet( LPCWSTR symbol, // Symbol MTBook& book // An array of DOM records )  
---  
.NET
MTRetCode CIMTManagerAPI.BookGet( string symbol, // Symbol out MTBook res // An array of DOM records )  
---  
Python
ManagerAPI.BookGet( symbol # Symbol )  
---  
Parameters
symbol
[in] [in] The symbol whose DOM you need to get.
book
[out] An array of DOM records of type [MTBook](mtbook.md "MTBook/MTBookDiff").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
To get information about a symbol's DOM using the IMTManagerAPI::BookGet method, it is necessary to subscribe to events of changes in the DOM of this symbol using the [IMTManagerAPI::BookSubscribe](imtmanagerapi_booksubscribe.md "BookSubscribe") method.
After using, the book array must be released using the [IMTManagerAPI::Free](imtmanagerapi_free.md "Free") method.