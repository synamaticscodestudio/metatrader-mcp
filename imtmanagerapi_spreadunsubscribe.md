# SpreadUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Spreads ](imtmanagerapi_config_spread.md "Configuration of Spreads")/ SpreadUnsubscribe | [](imtmanagerapi_spreadsubscribe.md "SpreadSubscribe") [](imtmanagerapi_spreadtotal.md "SpreadTotal") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SpreadUnsubscribe
Unsubscribe from events and hooks associated with spread configuration.
C++
MTAPIRES IMTManagerAPI::SpreadUnsubscribe( IMTConSpreadSink* sink // pointer to IMTConSpreadSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.SpreadUnsubscribe( CIMTConSpreadSink sink // CIMTConSpreadSink object )  
---  
Python
ManagerAPI.SpreadUnsubscribe( sink // IMTConSpreadSink object )  
---  
Parameters
sink
[in] Pointer to the object that implements [IMTConSymbolSink](imtconsymbolsink.md "IMTConSymbolSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTManagerAPI::SpreadSubscribe](imtmanagerapi_spreadsubscribe.md "SpreadSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.