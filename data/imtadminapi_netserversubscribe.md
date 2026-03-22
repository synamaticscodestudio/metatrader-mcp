# NetServerSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Network ](imtadminapi_config_network.md "Functions")/ NetServerSubscribe | [](imtadminapi_netserverbackupfoldercreate.md "NetServerBackupFolderCreate") [](imtadminapi_netserverunsubscribe.md "NetServerUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::NetServerSubscribe
Subscribe to events associated with the configuration of the platform components.
C++
MTAPIRES IMTAdminAPI::NetServerSubscribe( IMTConServerSink* sink // A pointer to the IMTConServerSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.NetServerSubscribe( CIMTConServerSink sink // CIMTConServerSink object )  
---  
Python
AdminAPI.NetServerSubscribe( sink # IMTConServerSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConServerSink](imtconserversink.md "IMTConServerSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTConServerSink](imtconserversink.md "IMTConServerSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
To receive [IMTConServerSink::OnConServerSync](imtconserversink_onconserversync.md "OnConServerSync") events, subscribe before calling the [IMTAdminAPI::Connect](imtadminapi_connect.md "Connect") method.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTAdminAPI::NetServerUnsubscribe](imtadminapi_netserverunsubscribe.md "NetServerUnsubscribe") or until the administrator interface is deleted using the [IMTAdminAPI::Release](imtadminapi_release.md "Release") method.