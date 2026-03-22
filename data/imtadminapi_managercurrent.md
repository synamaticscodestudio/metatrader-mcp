# ManagerCurrent (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Managers ](imtadminapi_config_manager.md "Functions")/ ManagerCurrent | [](imtadminapi_managerget.md "ManagerGet") [](imtadminapi_config_historysync.md "Functions") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ManagerCurrent
Get the configuration of the current manager account.
C++
MTAPIRES IMTAdminAPI::ManagerCurrent( IMTConManager* manager // Manager configuration object )  
---  
.NET
MTRetCode CIMTAdminAPI.ManagerCurrent( CIMTConManager manager // Manager configuration object )  
---  
Python
AdminAPI.ManagerCurrent( manager # Manager configuration object )  
---  
Parameters
manager
[out] An object of manager configuration. The 'manager' object must be previously created using the [IMTAdminAPI::ManagerCreate](imtadminapi_managercreate.md "ManagerCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method returns the description of the manager account using which the Manager API application is currently [connected ](imtadminapi_connect.md "Connect") to the server.