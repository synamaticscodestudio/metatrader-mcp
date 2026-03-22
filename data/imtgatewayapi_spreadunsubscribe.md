# SpreadUnsubscribe (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Spreads ](imtgatewayapi_config_spread.md "Configuration of Spreads")/ SpreadUnsubscribe | [](imtgatewayapi_spreadsubscribe.md "SpreadSubscribe") [](imtgatewayapi_spreadadd.md "SpreadAdd") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::SpreadUnsubscribe
Unsubscribe from events and hooks associated with spread configuration.
C++
MTAPIRES IMTGatewayAPI::SpreadUnsubscribe( IMTConSpreadSink* sink // pointer to IMTConSpreadSink object )  
---  
.NET
MTRetCode CIMTGatewayAPI.SpreadUnsubscribe( CIMTConSpreadSink sink // CIMTConSpreadSink object )  
---  
Parameters
sink
[in] Pointer to the object that implements [IMTConSymbolSink](imtconspreadsink.md "IMTConSpreadSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTGatewayAPI::SpreadSubscribe](imtgatewayapi_spreadsubscribe.md "SpreadSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.