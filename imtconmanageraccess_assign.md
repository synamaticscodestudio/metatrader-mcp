# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Managers ](config_manager.md "Managers") / [ IMTConManagerAccess ](imtconmanageraccess.md "IMTConManagerAccess")/ Assign | [](imtconmanageraccess_release.md "Release") [](imtconmanageraccess_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConManagerAccess::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConManagerAccess::Assign( const IMTConManagerAccess* access // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConManagerAccess.Assign( CIMTConManagerAccess access // Source object )  
---  
Parameters
access
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.