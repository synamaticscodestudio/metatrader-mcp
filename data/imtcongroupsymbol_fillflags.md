# FillFlags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ FillFlags | [](imtcongroupsymbol_execmodedefault.md "ExecModeDefault") [](imtcongroupsymbol_fillflagsdefault.md "FillFlagsDefault") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::FillFlags
Get types of filling allowed for a symbol in this group.
C++
UINT IMTConGroupSymbol::FillFlags() const  
---  
.NET (Gateway/Manager API)
EnFillingFlags CIMTConGroupSymbol.FillFlags()  
---  
Python (Manager API)
MTConGroupSymbol.FillFlags  
---  
Return Value
One of the values of the [IMTConSymbol::EnFillingFlags](imtconsymbol_enum.htm#enfillingflags) enumeration.
IMTConGroupSymbol::FillFlags
Set types of filling allowed for a symbol in this group.
C++
MTAPIRES IMTConGroupSymbol::FillFlags( const UINT flags // Filling type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupSymbol.FillFlags( EnFillingFlags flags // Filling type )  
---  
Python (Manager API)
MTConGroupSymbol.FillFlags  
---  
Parameters
flags
[in] To pass the mode of filling, the [IMTConSymbol::EnFillingFlags](imtconsymbol_enum.htm#enfillingflags) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.