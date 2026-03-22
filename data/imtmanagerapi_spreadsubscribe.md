# SpreadSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Spreads ](imtmanagerapi_config_spread.md "Configuration of Spreads")/ SpreadSubscribe | [](imtmanagerapi_spreadlegcreate.md "SpreadLegCreate") [](imtmanagerapi_spreadunsubscribe.md "SpreadUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SpreadSubscribe
Subscribe to events and hooks associated with the configuration of spreads.
C++
MTAPIRES IMTManagerAPI::SpreadSubscribe( IMTConSpreadSink* sink // pointer to IMTConSpreadSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.SpreadSubscribe( CIMTConSpreadSink sink // CIMTConSpreadSink object )  
---  
Python
ManagerAPI.SpreadSubscribe( sink // IMTConSpreadSink object )  
---  
Parameters
sink
[in] Pointer to the object that implements [IMTConSpreadSink](imtconspreadsink.md "IMTConSpreadSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same [IMTConSpreadSink](imtconspreadsink.md "IMTConSpreadSink") interface cannot subscribe to an event twice - in this case, [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") response code is returned.
To receive [IMTConSpreadSink::OnSpreadSync](imtconspreadsink_onspreadsync.md "OnSpreadSync") events, subscribe before calling the [IMTManagerAPI::Connect](imtmanagerapi_connect.md "Connect") method.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTManagerAPI::SpreadUnsubscribe](imtmanagerapi_spreadunsubscribe.md "SpreadUnsubscribe") or until the administrator interface is deleted using the [IMTManagerAPI::Release](imtmanagerapi_release.md "Release") method.