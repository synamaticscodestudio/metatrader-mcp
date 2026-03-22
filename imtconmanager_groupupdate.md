# GroupUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Managers ](config_manager.md "Managers") / [ IMTConManager ](imtconmanager.md "IMTConManager")/ GroupUpdate | [](imtconmanager_groupadd.md "GroupAdd") [](imtconmanager_groupshift.md "GroupShift") |
| --- | --- | --- |
| --- | --- |

IMTConManager::GroupUpdate
Modify [a group of accounts](config_group.md "Groups"), which is processed by the manager, at the specified position in the list.
C++
MTAPIRES IMTConManager::GroupUpdate( const UINT pos, // Position of the group LPCWSTR path // Path to the group )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConManager.GroupUpdate( uint pos, // Position of the group string path // Path to the group )  
---  
Python (Manager API)
MTConManager.GroupUpdate( pos, # Position of the group path # Path to the group )  
---  
MTConManager.GroupSet( path_list # A list of paths )  
---  
Parameters
pos
[in] Position of the group in the list, starting with 0.
path
[in] The updated path to a group in accordance with the hierarchy of groups.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The value of [IMTConGroup::Group](imtcongroup_group.md "Group") is used as the path to the group.