# Unsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Connection to the Server ](imtadminapi_connection.md "Connecting to the Server")/ Unsubscribe | [](imtadminapi_subscribe.md "Subscribe") [](imtadminapi_proxyset.md "ProxySet") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::Unsubscribe
Unsubscribe from common events of the [IMTAdminAPI](imtadminapi.md "Administrator Interface").
C++
MTAPIRES IMTAdminAPI::Unsubscribe( IMTManagerSink* sink // A pointer to the IMTManagerSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.Unsubscribe( CIMTManagerSink sink // CIMTManagerSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTManagerSink](imtmanagersink.md "Manager API Events Interface") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTAdminAPI::Subscribe](imtadminapi_subscribe.md "Subscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.