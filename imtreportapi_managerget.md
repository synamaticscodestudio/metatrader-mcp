# ManagerGet (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Managers ](imtreportapi_config_manager.md "Managers")/ ManagerGet | [](imtreportapi_managernext.md "ManagerNext") [](imtreportapi_config_gateway.md "Functions") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::ManagerGet
Gets a manager configuration with the specified login.
MTAPIRES IMTReportAPI::ManagerGet( const UINT64 login, // Login of a manager IMTConManager* manager // An object of manager configuration )  
---  
Parameters
login
[in] The login of a manager.
manager
[out] An object of manager configuration. The manager object must be first created using the [IMTReportAPI::ManagerCreate](imtreportapi_managercreate.md "ManagerCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConManager::Login()](imtconmanager_login.md "Login") value is used as the login.