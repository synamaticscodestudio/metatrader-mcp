# TickHistoryRequest (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Tick Data ](imtgatewayapi_ticks.md "Tick Data")/ TickHistoryRequest | [](imtgatewayapi_ticks.md "Tick Data") [](imtgatewayapi_tickhistoryrequestraw.md "TickHistoryRequestRaw") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::TickHistoryRequest
Get quotes for a symbol in the specified time range.
C++
MTAPIRES IMTGatewayAPI::TickHistoryRequest( LPCWSTR symbol, // Symbol const INT64 from, // Beginning date const INT64 to, // End date MTTickRate*& ticks, // Link to an array of quote structures UINT& ticks_total // Number of quotes )  
---  
.NET
MTTickRate[] CIMTGatewayAPI.TickHistoryRequest( string symbol, // Symbol long from, // Beginning date long to, // End date out MTRetCode res // Response code )  
---  
Parameters
symbol
[in] The name of the symbol, for which you need to get quotes.
from
[in] The start date for requesting quotes. The date is specified in seconds since 01.01.1970.
to
[in] The end date for requesting quotes. The date is specified in seconds since 01.01.1970.
ticks
[out] A reference to the array of structures which describe quotes ([MTTickRate](mttickrate.md "MTTickRate")).
ticks_total
[out] The total number of received quotes.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
After the use, the [MTTickRate](mttickrate.md "MTTickRate") array of structures must be released using the [IMTGatewayAPI::Free](imtgatewayapi_free.md "Free") method.
The method only works with the quotes accepted by the history server in accordance with symbol filtering settings ([IMTConSymbol::Filter*](imtconsymbol_filtersoft.md "FilterSoft")). To work with the raw quote stream, use [IMTGatewayAPI::TickHistoryRequestRaw](imtgatewayapi_tickhistoryrequestraw.md "TickHistoryRequestRaw").
The method cannot be called from event handlers (any IMT*Sink class methods).