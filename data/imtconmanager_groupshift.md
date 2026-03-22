# GroupShift (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Managers ](config_manager.md "Managers") / [ IMTConManager ](imtconmanager.md "IMTConManager")/ GroupShift | [](imtconmanager_groupupdate.md "GroupUpdate") [](imtconmanager_groupdelete.md "GroupDelete") |
| --- | --- | --- |
| --- | --- |

IMTConManager::GroupShift
Move [a group of accounts](config_group.md "Groups"), which is processed by the manager, in the list of groups.
C++
MTAPIRES IMTConManager::GroupShift( const UINT pos, // Position of the group const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConManager.GroupShift( uint pos, // Position of the group int shift // Shift )  
---  
Python (Manager API)
MTConManager.GroupShift( pos, # Position of the group shift # Shift )  
---  
Parameters
pos
[in] Position of the group in the list, starting with 0.
shift
[in] Shift of a group relative to its current position. A negative value means the shift to the top of the list, a positive value - to its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.