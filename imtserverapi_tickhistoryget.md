# TickHistoryGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Tick Data ](serverapi_ticks.md "Tick Data")/ TickHistoryGet | [](imtserverapi_tickhistorygetraw.md "TickHistoryGetRaw") [](serverapi_book.md "Depth of Market") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::TickHistoryGet
Get the history of quotes processed in accordance with the symbol configuration in the specified time range.
MTAPIRES IMTServerAPI::TickHistoryGet( LPCWSTR symbol, // Symbol const INT64 from, // Start date const INT64 to, // End date MTTickShort*& ticks, // A pointer to the array of structures of quotes UINT& ticks_total // Number of quotes )  
---  
Parameters
symbol
[in] The name of the symbol, for which you need to get quotes.
from
[in] The start date for requesting quotes. The date is specified in seconds since January 1, 1970.
to
[in] The end date for requesting quotes. The date is specified in seconds since January 1, 1970.
ticks
[out] A pointer to the array of structures that describe quotes ([MTTickShort](mttickshort.md "MTTickShort")).
ticks_total
[out] The total number of received quotes.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method can be used on both history and trade servers.
When using the method on a history server, the data is requested directly from the databases of the history server.
When using the method on a trade server, a request for data is sent to the history server within this method. Thus the method returns the same result with using it on any type of the server (history or trade). But note, that each call of the method leads to a network request to the history server. Frequent calls of the method may decrease the performance. 
Use of this method on a history server is similar to the [IMTServerAPI:TickGet](imtserverapi_tickget.md "TickGet") method.
After being used, the array of structures [MTTickShort](mttickshort.md "MTTickShort") must be released using the [IMTServerAPI::Free](imtserverapi_free.md "Free") method.