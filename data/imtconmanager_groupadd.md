# GroupAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Managers ](config_manager.md "Managers") / [ IMTConManager ](imtconmanager.md "IMTConManager")/ GroupAdd | [](imtconmanager_right.md "Right") [](imtconmanager_groupupdate.md "GroupUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConManager::GroupAdd
Add [a group of accounts](config_group.md "Groups") that the manager will process.
C++
MTAPIRES IMTConManager::GroupAdd( LPCWSTR path // Path to the group )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConManager.GroupAdd( string path // Path to the group )  
---  
Python (Manager API)
MTConManager.GroupAdd( path # Path to the group )  
---  
Parameters
path
[in] Path to a group in accordance with the hierarchy of groups.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The value of [IMTConGroup::Group](imtcongroup_group.md "Group") is used as the path to the group.
The maximum length of the group path is 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.