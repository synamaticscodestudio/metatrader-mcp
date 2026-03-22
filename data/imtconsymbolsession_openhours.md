# OpenHours (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbolSession ](imtconsymbolsession.md "IMTConSymbolSession")/ OpenHours | [](imtconsymbolsession_open.md "Open") [](imtconsymbolsession_openminutes.md "OpenMinutes") |
| --- | --- | --- |
| --- | --- |

IMTConSymbolSession::OpenHours
Get the number of hours in the opening time of trading or quoting session of a symbol.
C++
UINT IMTConSymbolSession::OpenHours() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSymbolSession.OpenHours()  
---  
Python (Manager API)
MTConSymbolSession.OpenHours  
---  
Return Value
The number of hours in the opening time of trading or quoting session of a symbol.
Note
For example, if the [IMTConSymbolSession::Open](imtconsymbolsession_open.md "Open") method returns the value 100, the IMTConSymbolSession::OpenHours will return 1 (the number of hours for 01:40).