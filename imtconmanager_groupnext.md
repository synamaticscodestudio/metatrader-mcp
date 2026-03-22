# GroupNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Managers ](config_manager.md "Managers") / [ IMTConManager ](imtconmanager.md "IMTConManager")/ GroupNext | [](imtconmanager_grouptotal.md "GroupTotal") [](imtconmanager_accessadd.md "AccessAdd") |
| --- | --- | --- |
| --- | --- |

IMTConManager::GroupNext
Get [a group](config_group.md "Groups") processed by the manager, at a specified position in the list.
C++
LPCWSTR IMTConManager::GroupNext( const UINT pos // Position of the group ) const  
---  
.NET (Gateway/Manager API)
string CIMTConManager.GroupNext( uint  pos // Position of the group )  
---  
Python (Manager API)
MTConManager.GroupNext( pos # Position of the group )  
---  
MTConManager.GroupGet()  
---  
Parameters
pos
[in] Position of the group in the list, starting with 0.
Return Value
If successful, it returns a pointer to a string with a path to the group. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConManager](imtconmanager.md "IMTConManager") object.
To use the string after the object removal (call of the [IMTConManager::Release](imtconmanager_release.md "Release") method of this object), a copy of it should be created.