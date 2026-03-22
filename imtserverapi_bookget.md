# BookGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Depth of Market ](serverapi_book.md "Depth of Market")/ BookGet | [](imtserverapi_bookunsubscribe.md "BookUnsubscribe") [](serverapi_mail.md "Mail Database") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::BookGet
Get a symbol's Depth of Market.
MTAPIRES IMTServerAPI::BookGet( LPCWSTR symbol, // Symbol MTBook& book // An array of DOM records )  
---  
Parameters
symbol
[in] [in] The symbol whose DOM you need to get.
book
[out] An array of DOM records of type [MTBook](mtbook.md "MTBook/MTBookDiff").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
To get information about a symbol's DOM using the IMTServerAPI::BookGet method, it is necessary to subscribe to events of changes in the DOM of this symbol using the [IMTServerAPI::BookSubscribe](imtserverapi_booksubscribe.md "BookSubscribe") method.
This method can be used only on history servers.