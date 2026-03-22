# ManagerAccessCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Managers ](serverapi_config_manager.md "Managers")/ ManagerAccessCreate | [](imtserverapi_managercreate.md "ManagerCreate") [](imtserverapi_managerreportcreate.md "ManagerReportCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ManagerAccessCreate
Create an object of configuration of an access list by IP addresses for a manager.
IMTConManagerAccess* IMTServerAPI::ManagerAccessCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConManagerAccess](imtconmanageraccess.md "IMTConManagerAccess") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConManagerAccess::Release](imtconmanageraccess_release.md "Release") method of this object.