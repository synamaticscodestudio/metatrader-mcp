# SpreadSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Spreads ](imtadminapi_config_spread.md "Configuration of Spreads")/ SpreadSubscribe | [](imtadminapi_spreadlegcreate.md "SpreadLegCreate") [](imtadminapi_spreadunsubscribe.md "SpreadUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SpreadSubscribe
Subscribe to events and hooks associated with the configuration of spreads.
C++
MTAPIRES IMTAdminAPI::SpreadSubscribe( IMTConSpreadSink* sink // pointer to IMTConSpreadSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.SpreadSubscribe( CIMTConSpreadSink sink // CIMTConSpreadSink object )  
---  
Python
AdminAPI.SpreadSubscribe( sink # IMTConSpreadSink object )  
---  
Parameters
sink
[in] Pointer to the object that implements [IMTConSpreadSink](imtconspreadsink.md "IMTConSpreadSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same [IMTConSpreadSink](imtconspreadsink.md "IMTConSpreadSink") interface cannot subscribe to an event twice - in this case, [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") response code is returned.
To receive [IMTConSpreadSink::OnSpreadSync](imtconspreadsink_onspreadsync.md "OnSpreadSync") events, subscribe before calling the [IMTAdminAPI::Connect](imtadminapi_connect.md "Connect") method.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTAdminAPI::SpreadUnsubscribe](imtadminapi_spreadunsubscribe.md "SpreadUnsubscribe") or until the administrator interface is deleted using the [IMTAdminAPI::Release](imtadminapi_release.md "Release") method.