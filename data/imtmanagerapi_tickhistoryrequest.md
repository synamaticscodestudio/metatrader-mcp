# TickHistoryRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Tick Data ](imtmanagerapi_tick.md "Tick Data Functions")/ TickHistoryRequest | [](imtmanagerapi_tickstat.md "TickStat") [](imtmanagerapi_tickhistoryrequestraw.md "TickHistoryRequestRaw") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::TickHistoryRequest
Get quotes for a symbol in the specified time range.
C++
MTAPIRES IMTManagerAPI::TickHistoryRequest( LPCWSTR symbol, // Symbol const INT64 from, // Start date const INT64 to, // End date MTTickShort*& ticks, // Reference to the array of structures of quotes UINT& ticks_total // Number of quotes )  
---  
.NET
MTTickShort[] CIMTManagerAPI.TickHistoryRequest( string symbol, // Symbol long  from, // Start date long to, // End date MTRetCode res // Response code )  
---  
Python
ManagerAPI.TickHistoryRequest( symbol, # Symbol from, # Start date to # End date )  
---  
Parameters
news
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
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
After being used, the array of structures [MTTickShort](mttickshort.md "MTTickShort") must be released using the [IMTManagerAPI::Free](imtmanagerapi_free.md "Free") method.
The method only works with the quotes accepted by the history server in accordance with symbol filtering settings ([IMTConSymbol::Filter*](imtconsymbol_filtersoft.md "FilterSoft")). To work with the raw quote stream, use [IMTManagerAPI::TickHistoryRequestRaw](imtmanagerapi_tickhistoryrequestraw.md "TickHistoryRequestRaw").
For the method operation, you should enable the pumping mode [IMTManagerAPI::PUMP_MODE_SYMBOL](imtmanagerapi_enpumpmodes.md "Pumping Mode").
This method cannot be called from event handlers (any methods of IMT*Sink classes).
The method was previously called TickRequest.