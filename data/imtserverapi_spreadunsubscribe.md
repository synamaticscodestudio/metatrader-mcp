# SpreadUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Spreads ](serverapi_config_spread.md "Spreads")/ SpreadUnsubscribe | [](imtserverapi_spreadsubscribe.md "SpreadSubscribe") [](imtserverapi_spreadadd.md "SpreadAdd") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SpreadUnsubscribe
Unsubscribe from events and hooks associated with spread configuration.
MTAPIRES IMTServerAPI::SpreadUnsubscribe( IMTConSpreadSink* sink // pointer to IMTConSpreadSink object )  
---  
Parameters
sink
[in] Pointer to the object that implements [IMTConSymbolSink](imtconsymbolsink.md "IMTConSymbolSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTServerAPI::SpreadSubscribe](imtserverapi_spreadsubscribe.md "SpreadSubscribe") method. If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.