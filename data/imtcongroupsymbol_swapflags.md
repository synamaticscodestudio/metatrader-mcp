# SwapFlags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ SwapFlags | [](imtcongroupsymbol_swapyeardaysdefault.md "SwapYearDaysDefault") [](imtcongroupsymbol_swapflagsdefault.md "SwapFlagsDefault") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::SwapFlags
Get additional symbol swap settings for the given group.
C++
UINT IMTConGroupSymbol::SwapFlags() const  
---  
.NET (Gateway/Manager API)
EnSwapFlags CIMTConGroupSymbol.SwapFlags()  
---  
Python (Manager API)
MTConGroupSymbol.SwapFlags  
---  
Return Value
The [IMTConSymbol::EnSwapFlags](imtconsymbol_enum.htm#enswapflags) enumeration is used to pass the settings.
IMTConGroupSymbol::SwapFlags
Set additional symbol swap settings for the given group.
C++
MTAPIRES IMTConGroupSymbol::SwapFlags( const UINT flags // Settings flags )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupSymbol.SwapFlags( EnSwapFlags flags // Settings flags )  
---  
Python (Manager API)
MTConGroupSymbol.SwapFlags  
---  
Parameters
flags
[in] The [IMTConSymbol::EnSwapFlags](imtconsymbol_enum.htm#enswapflags) enumeration is used to pass the settings.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a response code describing the error is returned.