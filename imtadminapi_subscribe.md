# Subscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Connection to the Server ](imtadminapi_connection.md "Connecting to the Server")/ Subscribe | [](imtadminapi_disconnect.md "Disconnect") [](imtadminapi_unsubscribe.md "Unsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::Subscribe
Subscribe to common events of the [IMTAdminAPI](imtadminapi.md "Administrator Interface").
C++
MTAPIRES IMTAdminAPI::Subscribe( IMTManagerSink* sink // A pointer to the IMTManagerSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.Subscribe( CIMTManagerSink sink // CIMTManagerSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTManagerSink](imtmanagersink.md "Manager API Events Interface") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTManagerSink](imtmanagersink.md "Manager API Events Interface") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTAdminAPI::Unsubscribe](imtadminapi_unsubscribe.md "Unsubscribe") or until the administrator interface is deleted using the [IMTAdminAPI::Release](imtadminapi_release.md "Release") method.