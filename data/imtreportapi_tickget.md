# TickGet (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Price Data ](imtreportapi_price.md "Price Data Functions")/ TickGet | [](imtreportapi_price.md "Price Data Functions") [](imtreportapi_ticklast.md "TickLast") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::TickGet
Get accepted quotes for a symbol in the specified time range.
MTAPIRES IMTReportAPI::TickGet( LPCWSTR symbol, // Symbol const INT64 from, // Start date const INT64 to, // End date MTTickShort*& ticks, // Pointer to an array of quote structures UINT& ticks_total // Number of quotes )  
---  
Parameters
symbol
[in] The name of the symbol, for which you need to get quotes.
from
[in] The start date for requesting quotes. The date is specified in seconds since 01.01.1970. If the parameter is set to 0, the date of the first available quote is used.
to
[in] The end date for requesting quotes. The date is specified in seconds since 01.01.1970. If the parameter is set to 0, the date of the last available quote is used.
ticks
[out] A pointer to the array of structures that describe quotes ([MTTickShort](mttickshort.md "MTTickShort")).
ticks_total
[out] The total number of received quotes.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method returns only accepted quotes (which have not been processed in accordance with the symbol settings in groups).
The method only returns the buffer of the last accepted quotes (up to 128 last quotes for each symbol).
After use, the [MTTickShort](mttickshort.md "MTTickShort") array of structures must be released using the [IMTReportAPI::Free](imtreportapi_free.md "Free") method.
IMTReportAPI::TickGet
Get quotes processed in accordance with the symbol configuration in the specified time range.
MTAPIRES IMTReportAPI::TickGet( const IMTConSymbol* symbol, // Symbol configuration object const INT64 from, // Start date const INT64 to, // End date MTTickShort*& ticks, // Pointer to an array of quote structures UINT& ticks_total // Number of quotes )  
---  
Parameters
symbol
[in] An object of the symbol configuration. The symbol object must be first created using the [IMTReportAPI::SymbolCreate](imtreportapi_symbolcreate.md "SymbolCreate") method.
from
[in] The start date for requesting quotes. The date is specified in seconds since 01.01.1970. If the parameter is set to 0, the date of the first available quote is used.
to
[in] The end date for requesting quotes. The date is specified in seconds since 01.01.1970. If the parameter is set to 0, the date of the last available quote is used.
ticks
[out] A pointer to the array of structures that describe quotes ([MTTickShort](mttickshort.md "MTTickShort")).
ticks_total
[out] The total number of received quotes.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method only returns the buffer of the last quotes (up to 128 last quotes for each symbol).
After use, the [MTTickShort](mttickshort.md "MTTickShort") array of structures must be released using the [IMTReportAPI::Free](imtreportapi_free.md "Free") method.