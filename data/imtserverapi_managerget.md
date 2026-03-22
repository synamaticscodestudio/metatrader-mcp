# ManagerGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Managers ](serverapi_config_manager.md "Managers")/ ManagerGet | [](imtserverapi_managernext.md "ManagerNext") [](serverapi_config_historysync.md "History Synchronization") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ManagerGet
Gets a manager configuration with the specified login.
MTAPIRES IMTServerAPI::ManagerGet( const UINT64 login, // Login of a manager IMTConManager* manager // An object of manager configuration )  
---  
Parameters
login
[in] The login of a manager.
manager
[out] An object of manager configuration. The manager object must be first created using the [IMTServerAPI::ManagerCreate](imtserverapi_managercreate.md "ManagerCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConManager::Login()](imtconmanager_login.md "Login") value is used as the login.