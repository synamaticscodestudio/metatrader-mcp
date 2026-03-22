# HistorySyncUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ History Synchronization ](imtadminapi_config_historysync.md "Functions")/ HistorySyncUnsubscribe | [](imtadminapi_historysyncsubscribe.md "HistorySyncSubscribe") [](imtadminapi_historysyncstart.md "HistorySyncStart") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::HistorySyncUnsubscribe
Unsubscribe from events associated with the configuration of price data synchronization.
C++
MTAPIRES IMTAdminAPI::HistorySyncUnsubscribe( IMTConHistorySyncSink* sink // A pointer to the IMTConHistorySyncSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.HistorySyncUnsubscribe( CIMTConHistorySyncSink sink // CIMTConHistorySyncSink object )  
---  
Python
AdminAPI.HistorySyncUnsubscribe( sink # IMTConHistorySyncSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConHistorySyncSink](imtconhistorysyncsink.md "IMTConHistorySyncSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTAdminAPI::HistorySyncSubscribe](imtadminapi_historysyncsubscribe.md "HistorySyncSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.