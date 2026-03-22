# TickValue (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ TickValue | [](imtconsymbol_spreaddiffbalance.md "SpreadDiffBalance") [](imtconsymbol_ticksize.md "TickSize") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::TickValue
Get the price of one tick of a symbol.
C++
double IMTConSymbol::TickValue() const  
---  
.NET (Gateway/Manager API)
double CIMTConSymbol.TickValue()  
---  
Python (Manager API)
MTConSymbol.TickValue  
---  
Return Value
Symbol tick price.
IMTConSymbol::TickValue
Set the price of one tick of a symbol.
C++
MTAPIRES IMTConSymbol::TickValue( const double value // Tick price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.TickValue( double value // Tick price )  
---  
Python (Manager API)
MTConSymbol.TickValue  
---  
Parameters
value
[in] Symbol tick price.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.