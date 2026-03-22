# ManagerCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Managers ](imtreportapi_config_manager.md "Managers")/ ManagerCreate | [](imtreportapi_config_manager.md "Managers") [](imtreportapi_manageraccesscreate.md "ManagerAccessCreate") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::ManagerCreate
Create an object of manager configuration.
IMTConManager* IMTReportAPI::ManagerCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConManager](imtconmanager.md "IMTConManager") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConManager::Release](imtconmanager_release.md "Release") method of this object.