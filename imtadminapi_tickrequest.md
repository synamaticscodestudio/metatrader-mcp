# TickRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Tick Data ](imtadminapi_tick.md "Functions")/ TickRequest | [](imtadminapi_tick.md "Functions") [](imtadminapi_tickrequestraw.md "TickRequestRaw") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::TickRequest
Get quotes for a symbol in the specified time range.
C++
MTAPIRES IMTAdminAPI::TickRequest( LPCWSTR symbol, // Symbol const INT64 from, // Start date const INT64 to, // End date MTTickShort*& ticks, // Reference to the array of structures of quotes UINT& ticks_total // Number of quotes )  
---  
.NET
MTTickShort[] CIMTAdminAPI.TickRequest( string symbol, // Symbol long from, // Start date long to, // End date out MTRetCode res // Response code )  
---  
Python
AdminAPI.TickRequest( symbol, # Symbol from, # Start date to # End date )  
---  
Parameters
symbol
[in] The name of the symbol, for which you need to get quotes.
from
[in] The start date for requesting quotes. The date is specified in seconds since January 1, 1970.
to
[in] The end date for requesting quotes. The date is specified in seconds since January 1, 1970.
ticks
[out] A reference to the array of structures that describe quotes ([MTTickShort](mttickshort.md "MTTickShort")).
ticks_total
[out] The total number of received quotes.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
After being used, the array of structures [MTTickShort](mttickshort.md "MTTickShort") must be released using the [IMTAdminAPI::Free](imtadminapi_free.md "Free") method.
This method cannot be called from event handlers (any methods of IMT*Sink classes).