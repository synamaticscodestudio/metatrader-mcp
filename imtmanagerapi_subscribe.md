# Subscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Connection to the Server ](imtmanagerapi_connection.md "Connecting to the Server")/ Subscribe | [](imtmanagerapi_disconnect.md "Disconnect") [](imtmanagerapi_unsubscribe.md "Unsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::Subscribe
Subscribe to common events of the [IMTManagerAPI](imtmanagerapi.md "Manager Interface") interface.
C++
virtual MTAPIRES IMTManagerAPI::Subscribe( IMTManagerSink* sink // A pointer to the IMTManagerSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.Subscribe( CIMTManagerSink sink // CIMTManagerSink object )  
---  
Python
ManagerAPI.Subscribe( sink # IMTManagerSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTManagerSink](imtmanagersink.md "Manager API Events Interface") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTManagerSink](imtmanagersink.md "Manager API Events Interface") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of Unsubscribe or until the administrator interface is deleted using the [IMTManagerAPI::Release](imtmanagerapi_release.md "Release") method.