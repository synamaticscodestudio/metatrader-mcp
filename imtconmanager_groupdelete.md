# GroupDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Managers ](config_manager.md "Managers") / [ IMTConManager ](imtconmanager.md "IMTConManager")/ GroupDelete | [](imtconmanager_groupshift.md "GroupShift") [](imtconmanager_grouptotal.md "GroupTotal") |
| --- | --- | --- |
| --- | --- |

IMTConManager::GroupDelete
Delete a group of accounts processed by the manager, by its index
C++
MTAPIRES IMTConManager::GroupDelete( const UINT pos // Position of the group )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConManager.GroupDelete( uint pos // Position of the group )  
---  
Python (Manager API)
MTConManager.GroupDelete( pos # Position of the group )  
---  
Parameters
pos
[in] Position of the group in the list, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.