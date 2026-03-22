# ManagerAdd (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Managers ](serverapi_config_manager.md "Managers")/ ManagerAdd | [](imtserverapi_managerunsubscribe.md "ManagerUnsubscribe") [](imtserverapi_managerdelete.md "ManagerDelete") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ManagerAdd
Adds or updates a manager configuration.
MTAPIRES IMTServerAPI::ManagerAdd( IMTConManager* manager // An object of manager configuration )  
---  
Parameters
manager
[in] An object of manager configuration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_api.md "API") response code. Otherwise, an error code will be returned.
Note
When calling the method, a check is made whether the entry already exists. If the entry already exists, it is updated, otherwise a new entry is added. A key field for comparison is the login of a manager [IMTConManager::Login()](imtconmanager_login.md "Login"). When you try to add a completely identical record, no changes are made, and therefore the [IMTConManagerSink::OnManagerUpdate](imtconmanagersink_onmanagerupdate.md "OnManagerUpdate") notification method is not called.
A configuration can be added or updated only from the plugins that run on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.
Before adding, the correctness of the record is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.