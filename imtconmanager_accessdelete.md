# AccessDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Managers ](config_manager.md "Managers") / [ IMTConManager ](imtconmanager.md "IMTConManager")/ AccessDelete | [](imtconmanager_accessupdate.md "AccessUpdate") [](imtconmanager_accessshift.md "AccessShift") |
| --- | --- | --- |
| --- | --- |

IMTConManager::AccessDelete
Delete a range of IP addresses, from which a manager is allowed to connect to the platform, based on its position in the list.
C++
MTAPIRES IMTConManager::AccessDelete( const UINT pos // Position of a range of addresses )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConManager.AccessDelete( uint pos // Position of a range of addresses )  
---  
Python (Manager API)
MTConManager.AccessDelete( pos # Position of a range of addresses )  
---  
Parameters
pos
[in] Position of a range of addresses in the list, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.