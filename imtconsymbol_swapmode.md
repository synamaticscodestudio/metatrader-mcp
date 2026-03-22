# SwapMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ SwapMode | [](imtconsymbol_marginrateliquidity.md "MarginRateLiquidity") [](imtconsymbol_swaplong.md "SwapLong") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::SwapMode
Get the swap calculation mode for a symbol.
C++
UINT IMTConSymbol::SwapMode() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSymbol.SwapMode()  
---  
Python (Manager API)
MTConSymbol.SwapMode  
---  
Return Value
One of the values of the [IMTConSymbol::EnSwapMode](imtconsymbol_enum.htm#enswapmode) enumeration.
Note
The swap size is specified using the [IMTConSymbol::SwapLong](imtconsymbol_swaplong.md "SwapLong") and [IMTConSymbol::SwapShort](imtconsymbol_swapshort.md "SwapShort") methods.
IMTConSymbol::SwapMode
Set the swap calculation mode.
C++
MTAPIRES IMTConSymbol::SwapMode( const UINT mode // Swap mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.SwapMode( uint mode // Swap mode )  
---  
Python (Manager API)
MTConSymbol.SwapMode  
---  
Parameters
mode
[in] To pass the swap calculation mode, the [IMTConSymbol::EnSwapMode](imtconsymbol_enum.htm#enswapmode) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The swap size is specified using the [IMTConSymbol::SwapLong](imtconsymbol_swaplong.md "SwapLong") and [IMTConSymbol::SwapShort](imtconsymbol_swapshort.md "SwapShort") methods.