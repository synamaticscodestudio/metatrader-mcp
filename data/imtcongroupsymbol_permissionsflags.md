# PermissionsFlags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ PermissionsFlags | [](imtcongroupsymbol_orderflagsdefault.md "OrderFlagsDefault") [](imtcongroupsymbol_bookdepthlimit.md "BookDepthLimit") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::PermissionsFlags
Get permission flags for the group symbols.
C++
UINT64 IMTConGroupSymbol::PermissionsFlags() const  
---  
.NET (Gateway/Manager API)
EnPermissionsFlags CIMTConGroupSymbol.PermissionsFlags()  
---  
Python (Manager API)
MTConGroupSymbol.PermissionsFlags  
---  
Return Value
A value from the [IMTConGroup::EnPermissionsFlags](imtcongroupsymbol_enum.htm#enpermissionsflags) enumeration.
IMTConGroupSymbol::PermissionsFlags
Set permission flags for the group symbols.
C++
MTAPIRES IMTConGroupSymbol::PermissionsFlags( const UINT64 flags // Permission flags )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupSymbol.PermissionsFlags( EnPermissionsFlags flags // Permission flags )  
---  
Python (Manager API)
MTConGroupSymbol.PermissionsFlags  
---  
Parameters
flags
[in] The [IMTConGroup:EnPermissionsFlags](imtcongroupsymbol_enum.htm#enpermissionsflags) enumeration is used for passing permission flags..
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.