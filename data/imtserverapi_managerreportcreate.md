# ManagerReportCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Managers ](serverapi_config_manager.md "Managers")/ ManagerReportCreate | [](imtserverapi_manageraccesscreate.md "ManagerAccessCreate") [](imtserverapi_managersubscribe.md "ManagerSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ManagerReportCreate
Create an object for the manager's permission to access the report.
IMTConManagerReport* IMTServerAPI::ManagerReportCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConManagerReport](imtconmanagerreport.md "IMTConManagerReport") interface. In case of failure, NULL is returned.
Note
The created object must be destroyed by calling the [IMTConManagerReport::Release](imtconmanagerreport_release.md "Release") method of this object.