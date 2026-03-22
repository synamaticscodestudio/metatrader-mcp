# PriceLimitMax (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ PriceLimitMax | [](imtconsymbol_pricesettle.md "PriceSettle") [](imtconsymbol_pricelimitmin.md "PriceLimitMin") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::PriceLimitMax
Get the maximum allowed price of the symbol.
C++
double IMTConSymbol::PriceLimitMax() const  
---  
.NET (Gateway/Manager API)
double CIMTConSymbol.PriceLimitMax()  
---  
Python (Manager API)
MTConSymbol.PriceLimitMax  
---  
Return Value
The maximum allowed price of the symbol.
IMTConSymbol::PriceLimitMax
Set the maximum allowed price of the symbol.
C++
MTAPIRES IMTConSymbol::PriceLimitMax( const double price // Maximum price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.PriceLimitMax( double price // Maximum price )  
---  
Python (Manager API)
MTConSymbol.PriceLimitMax  
---  
Parameters
value
[in] The maximum allowed price of the symbol.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.