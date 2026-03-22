# ManagerCurrent (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Managers ](imtreportapi_config_manager.md "Managers")/ ManagerCurrent | [](imtreportapi_managerreportcreate.md "ManagerReportCreate") [](imtreportapi_managertotal.md "ManagerTotal") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::ManagerCurrent
Get the configuration of the manager that requested a report generation from a manager terminal.
MTAPIRES IMTReportAPI::ManagerCurrent( IMTConManager* manager // An object of manager configuration )  
---  
Parameters
manager
[out] An object of manager configuration. The manager object must be first created using the [IMTReportAPI::ManagerCreate](imtreportapi_managercreate.md "ManagerCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.