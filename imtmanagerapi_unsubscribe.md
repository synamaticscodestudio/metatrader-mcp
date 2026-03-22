# Unsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Connection to the Server ](imtmanagerapi_connection.md "Connecting to the Server")/ Unsubscribe | [](imtmanagerapi_subscribe.md "Subscribe") [](imtmanagerapi_proxyset.md "ProxySet") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::Unsubscribe
Unsubscribe from common events of the [IMTManagerAPI](imtmanagerapi.md "Manager Interface") interface.
C++
virtual MTAPIRES IMTManagerAPI::Unsubscribe( IMTManagerSink* sink // A pointer to the IMTManagerSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.Unsubscribe( CIMTManagerSink sink // CIMTManagerSink object )  
---  
Python
ManagerAPI.Unsubscribe( sink # IMTManagerSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTManagerSink](imtmanagersink.md "Manager API Events Interface") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method is pared to [IMTManagerAPI::Subscribe](imtmanagerapi_subscribe.md "Subscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.