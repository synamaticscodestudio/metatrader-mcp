# TickSize (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ TickSize | [](imtconsymbol_tickvalue.md "TickValue") [](imtconsymbol_contractsize.md "ContractSize") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::TickSize
Get the size of one tick of a symbol.
C++
double IMTConSymbol::TickSize() const  
---  
.NET (Gateway/Manager API)
double CIMTConSymbol.TickSize()  
---  
Python (Manager API)
MTConSymbol.TickSize  
---  
Return Value
Symbol tick size.
IMTConSymbol::TickSize
Set the size of one tick of a symbol.
C++
MTAPIRES IMTConSymbol::TickSize( const double size // Symbol tick size )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.TickSize( double size // Symbol tick size )  
---  
Python (Manager API)
MTConSymbol.TickSize  
---  
Parameters
size
[in] Symbol tick size.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.