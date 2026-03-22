# IECheckMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ IECheckMode | [](imtcongroupsymbol_reflagsdefault.md "REFlagsDefault") [](imtcongroupsymbol_iecheckmodedefault.md "IECheckModeDefault") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::IECheckMode
Get the mode of checking during instant execution set for a group.
C++
UINT IMTConGroupSymbol::IECheckMode() const  
---  
.NET (Gateway/Manager API)
uint CIMTConGroupSymbol.IECheckMode()  
---  
Python (Manager API)
MTConGroupSymbol.IECheckMode  
---  
Return Value
A value of the [IMTConSymbol::EnInstantMode](imtconsymbol_enum.htm#eninstantmode) enumeration.
Note
This method is reserved for future use and is not currently implemented.
IMTConGroupSymbol::IECheckMode
Set the mode of checking during instant execution for a group.
C++
MTAPIRES IMTConGroupSymbol::IECheckMode( const UINT mode // Mode of checking )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupSymbol.IECheckMode( uint mode // Mode of checking )  
---  
Python (Manager API)
MTConGroupSymbol.IECheckMode  
---  
Parameters
mode
[in] Check mode for instant execution. To pass the check mode, the [IMTConSymbol::EnInstantMode](imtconsymbol_enum.htm#eninstantmode) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method is reserved for future use and is not currently implemented.