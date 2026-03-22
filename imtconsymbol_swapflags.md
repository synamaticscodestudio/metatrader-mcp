# SwapFlags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ SwapFlags | [](imtconsymbol_swapyeardays.md "SwapYearDays") [](imtconsymbol_swapratesunday.md "SwapRateSunday") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::SwapFlags
Get additional swap settings.
C++
UINT IMTConSymbol::SwapFlags() const  
---  
.NET (Gateway/Manager API)
EnSwapFlags CIMTConSymbol.SwapFlags()  
---  
Python (Manager API)
MTConSymbol.SwapFlags  
---  
Return Value
The [IMTConSymbol::EnSwapFlags](imtconsymbol_enum.htm#enswapflags) enumeration is used to pass the settings.
IMTConSymbol::SwapFlags
Set additional swap settings.
C++
MTAPIRES IMTConSymbol::SwapFlags( const UINT flags // Settings flags )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.SwapFlags( EnSwapFlags flags // Settings flags )  
---  
Python (Manager API)
MTConSymbol.SwapFlags  
---  
Parameters
flags
[in] The [IMTConSymbol::EnSwapFlags](imtconsymbol_enum.htm#enswapflags) enumeration is used to pass the settings.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a response code describing the error is returned.