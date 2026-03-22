# ManagerCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Managers ](imtadminapi_config_manager.md "Functions")/ ManagerCreate | [](imtadminapi_config_manager.md "Functions") [](imtadminapi_manageraccesscreate.md "ManagerAccessCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ManagerCreate
Create an object of manager configuration.
C++
IMTConManager* IMTAdminAPI::ManagerCreate()  
---  
.NET
CIMTConManager CIMTAdminAPI.ManagerCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConManager](imtconmanager.md "IMTConManager") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConManager::Release](imtconmanager_release.md "Release") method of this object.