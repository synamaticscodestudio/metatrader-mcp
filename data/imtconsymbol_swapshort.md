# SwapShort (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ SwapShort | [](imtconsymbol_swaplong.md "SwapLong") [](imtconsymbol_swap3day.md "Swap3Day") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::SwapShort
Get the swap size for short positions.
C++
double IMTConSymbol::SwapShort() const  
---  
.NET (Gateway/Manager API)
double CIMTConSymbol.SwapShort()  
---  
Python (Manager API)
MTConSymbol.SwapShort  
---  
Return Value
The swap size for short positions.
Note
Swap units depend on their calculation mode ([IMTConSymbol::SwapMode](imtconsymbol_swapmode.md "SwapMode")).
IMTConSymbol::SwapShort
Set the swap size for short positions.
C++
MTAPIRES IMTConSymbol::SwapShort( const double swap // Swap amount )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.SwapShort( double swap // Swap amount )  
---  
Python (Manager API)
MTConSymbol.SwapShort  
---  
Parameters
swap
[in] The swap size for short positions.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Swap units depend on their calculation mode ([IMTConSymbol::SwapMode](imtconsymbol_swapmode.md "SwapMode")).