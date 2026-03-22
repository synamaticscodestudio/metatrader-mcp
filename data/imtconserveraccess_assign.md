# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAccess ](imtconserveraccess.md "IMTConServerAccess")/ Assign | [](imtconserveraccess_release.md "Release") [](imtconserveraccess_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConServerAccess::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConServerAccess::Assign( const IMTConServerAccess* param // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAccess.Assign( CIMTConServerAccess param // Source object )  
---  
Parameters
param
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.