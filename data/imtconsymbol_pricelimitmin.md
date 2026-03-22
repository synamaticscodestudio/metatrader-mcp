# PriceLimitMin (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ PriceLimitMin | [](imtconsymbol_pricelimitmax.md "PriceLimitMax") [](imtconsymbol_tradeflags.md "TradeFlags") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::PriceLimitMin
Get the minimum allowed price of the symbol.
C++
double IMTConSymbol::PriceLimitMin() const  
---  
.NET (Gateway/Manager API)
double CIMTConSymbol.PriceLimitMin()  
---  
Python (Manager API)
MTConSymbol.PriceLimitMin  
---  
Return Value
The minimum allowed price of the symbol.
IMTConSymbol::PriceLimitMin
Set the minimum allowed price of the symbol.
C++
MTAPIRES IMTConSymbol::PriceLimitMin( const double price // Minimum price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.PriceLimitMin( double price // Minimum price )  
---  
Python (Manager API)
MTConSymbol.PriceLimitMin  
---  
Parameters
value
[in] The minimum allowed price of the symbol.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.