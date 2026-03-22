# SwapMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ SwapMode | [](imtcongroupsymbol_marginhedgeddefault.md "MarginHedgedDefault") [](imtcongroupsymbol_swapmodedefault.md "SwapModeDefault") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::SwapMode
Get the swap calculation mode for a certain symbol for the group.
C++
UINT IMTConGroupSymbol::SwapMode() const  
---  
.NET (Gateway/Manager API)
EnSwapMode CIMTConGroupSymbol.SwapMode()  
---  
Python (Manager API)
MTConGroupSymbol.SwapMode  
---  
Return Value
One of the values of the [IMTConSymbol::EnSwapMode](imtconsymbol_enum.htm#enswapmode) enumeration.
IMTConGroupSymbol::SwapMode
Set the swap calculation mode for a certain symbol for the group.
C++
MTAPIRES IMTConGroupSymbol::SwapMode( const UINT mode // Swap calculation mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupSymbol.SwapMode( EnSwapMode mode // Swap calculation mode )  
---  
Python (Manager API)
MTConGroupSymbol.SwapMode  
---  
Parameters
mode
[in] To pass the swap calculation mode, the [IMTConSymbol::EnSwapMode](imtconsymbol_enum.htm#enswapmode) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
To use basic swap settings for the group, you should specify default values for all parameters, including SwapMode, SwapLong, SwapShort, Swap3Day and SwapYearDays. Thus, setting a default value for SwapMode alone is not enough.