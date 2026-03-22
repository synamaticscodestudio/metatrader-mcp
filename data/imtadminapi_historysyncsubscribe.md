# HistorySyncSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ History Synchronization ](imtadminapi_config_historysync.md "Functions")/ HistorySyncSubscribe | [](imtadminapi_historysynccreate.md "HistorySyncCreate") [](imtadminapi_historysyncunsubscribe.md "HistorySyncUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::HistorySyncSubscribe
Subscribe to events associated with the configuration of price data synchronization.
C++
MTAPIRES IMTAdminAPI::HistorySyncSubscribe( IMTConHistorySyncSink* sink // A pointer to the IMTConHistorySyncSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.HistorySyncSubscribe( CIMTConHistorySyncSink sink // CIMTConHistorySyncSink object )  
---  
Python
AdminAPI.HistorySyncSubscribe( sink # IMTConHistorySyncSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConHistorySyncSink](imtconhistorysyncsink.md "IMTConHistorySyncSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTConHistorySyncSink](imtconhistorysyncsink.md "IMTConHistorySyncSink") cannot subscribe to events twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
To receive [IMTConHistorySyncSink::OnHistorySyncSync](imtconhistorysyncsink_onhistorysyncsync.md "OnHistorySyncSync") events, subscribe before calling the [IMTAdminAPI::Connect](imtadminapi_connect.md "Connect") method.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTAdminAPI::HistorySyncUnsubscribe](imtadminapi_historysyncunsubscribe.md "HistorySyncUnsubscribe") or until the administrator interface is deleted using the [IMTAdminAPI::Release](imtadminapi_release.md "Release") method.