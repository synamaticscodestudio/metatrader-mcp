# ManagerUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Managers ](imtadminapi_config_manager.md "Functions")/ ManagerUnsubscribe | [](imtadminapi_managersubscribe.md "ManagerSubscribe") [](imtadminapi_managerupdate.md "ManagerUpdate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ManagerUnsubscribe
Unsubscribe from events associated with the configuration of managers.
C++
MTAPIRES IMTAdminAPI::ManagerUnsubscribe( IMTConManagerSink* sink // A pointer to the IMTConManagerSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.ManagerUnsubscribe( CIMTConManagerSink sink // CIMTConManagerSink object )  
---  
Python
AdminAPI.ManagerUnsubscribe( sink # IMTConManagerSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConManagerSink](imtconmanagersink.md "IMTConManagerSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTAdminAPI::ManagerSubscribe](imtadminapi_managersubscribe.md "ManagerSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.