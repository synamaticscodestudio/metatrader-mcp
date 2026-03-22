# ManagerUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Managers ](imtadminapi_config_manager.md "Functions")/ ManagerUpdate | [](imtadminapi_managerunsubscribe.md "ManagerUnsubscribe") [](imtadminapi_managerupdatebatch.md "ManagerUpdateBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ManagerUpdate
Adds or updates a manager configuration.
C++
MTAPIRES IMTAdminAPI::ManagerUpdate( IMTConManager* manager // An object of manager configuration )  
---  
.NET
MTRetCode CIMTAdminAPI.ManagerUpdate( CIMTConManager manager // An object of manager configuration )  
---  
Python
AdminAPI.ManagerUpdate( manager # An object of manager configuration )  
---  
Parameters
manager
[in] An object of manager configuration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_api.md "API") response code. Otherwise, an error code will be returned.
Note
A configuration can be added or updated only from the applications that run on the main server. For all other applications the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.
Before adding, the correctness of the record is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.