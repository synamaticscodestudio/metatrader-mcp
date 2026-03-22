# ManagerNext (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Managers ](imtreportapi_config_manager.md "Managers")/ ManagerNext | [](imtreportapi_managertotal.md "ManagerTotal") [](imtreportapi_managerget.md "ManagerGet") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::ManagerNext
Gets a manager configuration with the specified index.
MTAPIRES IMTReportAPI::ManagerNext( const UINT pos, // Position of the configuration IMTConManager* manager // An object of manager configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
manager
[out] An object of manager configuration. The manager object must be first created using the [IMTReportAPI::ManagerCreate](imtreportapi_managercreate.md "ManagerCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a manager with a specified index to the manager object.