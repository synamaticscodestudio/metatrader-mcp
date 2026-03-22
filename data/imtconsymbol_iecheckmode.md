# IECheckMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ IECheckMode | [](imtconsymbol_retimeout.md "RETimeout") [](imtconsymbol_ietimeout.md "IETimeout") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::IECheckMode
Get the check mode for instant execution.
C++
UINT IMTConSymbol::IECheckMode() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSymbol.IECheckMode()  
---  
Python (Manager API)
MTConSymbol.IECheckMode  
---  
Return Value
A value of the [IMTConSymbol::EnInstantMode](imtconsymbol_enum.htm#eninstantmode) enumeration.
Note
This method is reserved for future use and is not currently implemented.
IMTConSymbol::IECheckMode
Set the check mode for instant execution.
C++
MTAPIRES IMTConSymbol::IECheckMode( const UINT mode // Mode of checking )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.IECheckMode( uint mode // Mode of checking )  
---  
Python (Manager API)
MTConSymbol.IECheckMode  
---  
Parameters
mode
[in] Check mode for instant execution. To pass the mode, the  [IMTConSymbol::EnInstantMode](imtconsymbol_enum.htm#eninstantmode) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method is reserved for future use and is not currently implemented.