# ManagerCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Managers ](imtmanagerapi_config_manager.md "Managers")/ ManagerCreate | [](imtmanagerapi_config_manager.md "Managers") [](imtmanagerapi_manageraccesscreate.md "ManagerAccessCreate") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ManagerCreate
Create a manager configuration object.
C++
IMTConManager* IMTManagerAPI::ManagerCreate()  
---  
.NET
CIMTConManager CIMTManagerAPI.ManagerCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConManager](imtconmanager.md "IMTConManager") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConManager::Release](imtconmanager_release.md "Release") method of this object.