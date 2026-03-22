# SpreadUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Spreads ](imtadminapi_config_spread.md "Configuration of Spreads")/ SpreadUnsubscribe | [](imtadminapi_spreadsubscribe.md "SpreadSubscribe") [](imtadminapi_spreadupdate.md "SpreadUpdate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SpreadUnsubscribe
Unsubscribe from events and hooks associated with spread configuration.
C++
MTAPIRES IMTAdminAPI::SpreadUnsubscribe( IMTConSpreadSink* sink // pointer to IMTConSpreadSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.SpreadUnsubscribe( CIMTConSpreadSink sink // CIMTConSpreadSink object )  
---  
Python
AdminAPI.SpreadSubscribe( sink # IMTConSpreadSink object )  
---  
Parameters
sink
[in] Pointer to the object that implements [IMTConSymbolSink](imtconsymbolsink.md "IMTConSymbolSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTAdminAPI::SpreadSubscribe](imtadminapi_spreadsubscribe.md "SpreadSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.