# OpenMinutes (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbolSession ](imtconsymbolsession.md "IMTConSymbolSession")/ OpenMinutes | [](imtconsymbolsession_openhours.md "OpenHours") [](imtconsymbolsession_close.md "Close") |
| --- | --- | --- |
| --- | --- |

IMTConSymbolSession::OpenMinutes
Get the number of minutes in the opening time of trading or quoting session of a symbol.
C++
UINT IMTConSymbolSession::OpenMinutes() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSymbolSession.OpenMinutes()  
---  
Python (Manager API)
MTConSymbolSession.OpenMinutes  
---  
Return Value
The number of minutes in the opening time of trading or quoting session of a symbol.
Note
For example, if the [IMTConSymbolSession::Open](imtconsymbolsession_open.md "Open") method returns the value 100, the IMTConSymbolSession::OpenMinutes will return 40 (the number of minutes for 01:40).