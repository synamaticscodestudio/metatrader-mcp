# ManagerCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Managers ](serverapi_config_manager.md "Managers")/ ManagerCreate | [](serverapi_config_manager.md "Managers") [](imtserverapi_manageraccesscreate.md "ManagerAccessCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ManagerCreate
Create an object of manager configuration.
IMTConManager* IMTServerAPI::ManagerCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConManager](imtconmanager.md "IMTConManager") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConManager::Release](imtconmanager_release.md "Release") method of this object.