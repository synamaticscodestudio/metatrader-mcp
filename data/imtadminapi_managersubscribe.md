# ManagerSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Managers ](imtadminapi_config_manager.md "Functions")/ ManagerSubscribe | [](imtadminapi_managerreportcreate.md "ManagerReportCreate") [](imtadminapi_managerunsubscribe.md "ManagerUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ManagerSubscribe
Subscribe to events associated with the configuration of managers.
C++
MTAPIRES IMTAdminAPI::ManagerSubscribe( IMTConManagerSink* sink // A pointer to the IMTConManagerSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.ManagerSubscribe( CIMTConManagerSink sink // CIMTConManagerSink object )  
---  
Python
AdminAPI.ManagerSubscribe( sink # IMTConManagerSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConManagerSink](imtconmanagersink.md "IMTConManagerSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTConManagerSink](imtconmanagersink.md "IMTConManagerSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
To receive [IMTConManagerSink::OnManagerSync](imtconmanagersink_onmanagersync.md "OnManagerSync") events, subscribe before calling the [IMTAdminAPI::Connect](imtadminapi_connect.md "Connect") method.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTAdminAPI::ManagerUnsubscribe](imtadminapi_managerunsubscribe.md "ManagerUnsubscribe") or until the administrator interface is deleted using the [IMTAdminAPI::Release](imtadminapi_release.md "Release") method.