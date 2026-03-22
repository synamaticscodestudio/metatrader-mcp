# ManagerCurrent (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Managers ](imtmanagerapi_config_manager.md "Managers")/ ManagerCurrent | [](imtmanagerapi_managerreportcreate.md "ManagerReportCreate") [](imtmanagerapi_config_subscription.md "Subscriptions") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ManagerCurrent
Get the configuration of the current manager account.
C++
MTAPIRES IMTManagerAPI::ManagerCurrent( IMTConManager* manager // Manager configuration object )  
---  
.NET
MTRetCode CIMTManagerAPI.ManagerCurrent( CIMTConManager manager // Manager configuration object )  
---  
Python
ManagerAPI.ManagerCurrent()  
---  
Parameters
manager
[out] An object of manager configuration. The 'manager' object must be previously created using the [IMTManagerAPI::ManagerCreate](imtmanagerapi_managercreate.md "ManagerCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method returns the description of the manager account using which the Manager API application is currently [connected ](imtadminapi_connect.md "Connect") to the server.