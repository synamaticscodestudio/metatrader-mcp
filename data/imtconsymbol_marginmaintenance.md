# MarginMaintenance (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ MarginMaintenance | [](imtconsymbol_margininitial.md "MarginInitial") [](imtconsymbol_marginrateinitial.md "MarginRateInitial") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::MarginMaintenance
Get the size of the maintenance margin.
C++
double IMTConSymbol::MarginMaintenance() const  
---  
.NET (Gateway/Manager API)
double CIMTConSymbol.MarginMaintenance()  
---  
Python (Manager API)
MTConSymbol.MarginMaintenance  
---  
Return Value
The size of the maintenance margin.
IMTConSymbol::MarginMaintenance
Set the size of the maintenance margin.
C++
MTAPIRES IMTConSymbol::MarginMaintenance( const double margin // Maintenance margin )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.MarginMaintenance( double margin // Maintenance margin )  
---  
Python (Manager API)
MTConSymbol.MarginMaintenance  
---  
Parameters
margin
[in] The size of the maintenance margin.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.