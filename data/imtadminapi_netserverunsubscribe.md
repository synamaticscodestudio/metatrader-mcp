# NetServerUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Network ](imtadminapi_config_network.md "Functions")/ NetServerUnsubscribe | [](imtadminapi_netserversubscribe.md "NetServerSubscribe") [](imtadminapi_netserverrestart.md "NetServerRestart") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::NetServerUnsubscribe
Unsubscribe from events associated with the configuration of the platform components.
C++
MTAPIRES IMTAdminAPI::NetServerUnsubscribe( IMTConServerSink* sink // A pointer to the IMTConServerSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.NetServerUnsubscribe( CIMTConServerSink sink // CIMTConServerSink object )  
---  
Python
AdminAPI.NetServerUnsubscribe( sink # IMTConServerSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConServerSink](imtconserversink.md "IMTConServerSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTAdminAPI::NetServerSubscribe](imtadminapi_netserversubscribe.md "NetServerSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.