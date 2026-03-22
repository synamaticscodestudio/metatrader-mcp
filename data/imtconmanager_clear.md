# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Managers ](config_manager.md "Managers") / [ IMTConManager ](imtconmanager.md "IMTConManager")/ Clear | [](imtconmanager_assign.md "Assign") [](imtconmanager_login.md "Login") |
| --- | --- | --- |
| --- | --- |

IMTConManager::Clear
Clear an object.
C++
MTAPIRES IMTConManager::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConManager.Clear()  
---  
Python (Manager API)
MTConManager.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.