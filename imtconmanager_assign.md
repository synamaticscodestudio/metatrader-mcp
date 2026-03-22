# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Managers ](config_manager.md "Managers") / [ IMTConManager ](imtconmanager.md "IMTConManager")/ Assign | [](imtconmanager_release.md "Release") [](imtconmanager_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConManager::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConManager::Assign( const IMTConManager* manager // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConManager.Assign( CIMTConManager manager // Source object )  
---  
Parameters
manager
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.