# TickHistoryRequestRaw (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Tick Data ](imtmanagerapi_tick.md "Tick Data Functions")/ TickHistoryRequestRaw | [](imtmanagerapi_tickhistoryrequest.md "TickHistoryRequest") [](imtmanagerapi_tickhistoryadd.md "TickHistoryAdd") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::TickHistoryRequestRaw
Get the entire stream of quotes for a symbol (raw and processed prices in accordance with the configuration of the symbol) in the specified time range.
C++
MTAPIRES IMTManagerAPI::TickHistoryRequestRaw( LPCWSTR symbol, // Symbol const INT64 from, // Beginning date const INT64 to, // End date MTTickShort*& ticks, // Reference to an array of quote structures UINT& ticks_total // Number of quotes )  
---  
.NET
MTTickShort[] CIMTManagerAPI.TickHistoryRequestRaw( string symbol, // Symbol long from, // Beginning date long to, // End date out MTRetCode res // Response code )  
---  
Python
ManagerAPI.TickHistoryRequestRaw( symbol # Symbol from # Beginning date to # End date )  
---  
Parameters
news
[in] The name of the symbol, for which you need to get quotes.
from
[in] The start date for requesting quotes. The date is specified in seconds since 01.01.1970.
to
[in] The end date for requesting quotes. The date is specified in seconds since 01.01.1970.
ticks
[out] A reference to the array of structures which describe quotes ([MTTickShort](mttickshort.md "MTTickShort")).
ticks_total
[out] The total number of received quotes.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
If the raw quote storing option ([IMTConSymbol::TickFlags](imtconsymbol_tickflags.md "TickFlags")) is disabled in symbol settings, only the quote which were accepted by the server are received, i.e. the operation is similar to the [IMTManagerAPI::TickHistoryRequest](imtmanagerapi_tickhistoryrequest.md "TickHistoryRequest") method call.
After using the array of [MTTickShort](mttickshort.md "MTTickShort") structures must be released using the [IMTManagerAPI::Free](imtmanagerapi_free.md "Free") method.
For the method operation, you should enable the pumping mode [IMTManagerAPI::PUMP_MODE_SYMBOL](imtmanagerapi_enpumpmodes.md "Pumping Mode").
The method cannot be called from event handlers (any IMT*Sink class methods).