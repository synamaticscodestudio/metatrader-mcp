# Right (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Managers ](config_manager.md "Managers") / [ IMTConManager ](imtconmanager.md "IMTConManager")/ Right | [](imtconmanager_limitreports.md "LimitReports") [](imtconmanager_groupadd.md "GroupAdd") |
| --- | --- | --- |
| --- | --- |

IMTConManager::Right
Gets the rights of a manager.
C++
UINT IMTConManager::Right( const UINT right // Manager's rights ) const  
---  
.NET (Gateway/Manager API)
EnManagerFlags CIMTConManager.Right( EnManagerRights right // Manager's rights )  
---  
Python (Manager API)
MTConManager.Right( right # права менеджера )  
---  
MTConManager.RightGet()  
---  
Parameters
right
[out] The manager's rights are passed in the 'right' variable using the [IMTConManager::EnManagerRights](imtconmanager_enum.htm#enmanagerrights) enumeration.
Return Value
A value of the [IMTConManager::EnManagerFlags](imtconmanager_enum.htm#enmanagerrightflags) enumeration.
IMTConManager::Right
Sets the rights of a manager.
C++
MTAPIRES IMTConManager::Right( const UINT right, // Manager's rights const UINT flags // State of rights )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConManager.Right( EnManagerRights right, // Manager's rights EnManagerFlags flags // State of rights )  
---  
Python (Manager API)
MTConManager.Right( right # права менеджера )  
---  
MTConManager.RightGet()  
---  
Parameters
right
[in] Manager's permissions are passed using the [IMTConManager::EnManagerRights](imtconmanager_enum.htm#enmanagerrights) enumeration.
flags
[in] The state of permissions (granted or not) is passed using the [IMTConManager::EnManagerRightFlags](imtconmanager_enum.htm#enmanagerrightflags) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Only one permission at a time can be set. To set multiple permissions, you should call IMTConManager::Right the appropriate number of times, every time passing one permission and its state.