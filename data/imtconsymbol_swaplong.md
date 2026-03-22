# SwapLong (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ SwapLong | [](imtconsymbol_swapmode.md "SwapMode") [](imtconsymbol_swapshort.md "SwapShort") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::SwapLong
Get the swap size for long positions.
C++
double IMTConSymbol::SwapLong() const  
---  
.NET (Gateway/Manager API)
double CIMTConSymbol.SwapLong()  
---  
Python (Manager API)
MTConSymbol.SwapLong  
---  
Return Value
The swap size for long positions.
Note
Swap units depend on their calculation mode ([IMTConSymbol::SwapMode](imtconsymbol_swapmode.md "SwapMode")).
IMTConSymbol::SwapLong
Set the swap size for long positions.
C++
MTAPIRES IMTConSymbol::SwapLong( const double swap // Swap amount )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.SwapLong( double swap // Swap amount )  
---  
Python (Manager API)
MTConSymbol.SwapLong  
---  
Parameters
swap
[in] The swap size for long positions.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Swap units depend on their calculation mode ([IMTConSymbol::SwapMode](imtconsymbol_swapmode.md "SwapMode")).