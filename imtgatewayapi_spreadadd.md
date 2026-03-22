# SpreadAdd (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Spreads ](imtgatewayapi_config_spread.md "Configuration of Spreads")/ SpreadAdd | [](imtgatewayapi_spreadunsubscribe.md "SpreadUnsubscribe") [](imtgatewayapi_spreaddelete.md "SpreadDelete") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::SpreadAdd
Add or update a spread configuration.
C++
MTAPIRES IMTGatewayAPI::SpreadAdd( IMTSpreadSymbol* spread // Spread configuration object )  
---  
.NET
MTRetCode CIMTGatewayAPI.SpreadAdd( CIMTSpreadSymbol spread // Spread configuration object )  
---  
Parameters
spread
[in] Spread configuration object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
When calling the method, a check is made whether the entry already exists. If the entry already exists, it is updated, otherwise a new entry is added. A key field for comparison is [IMTConSpread::ID](imtconspread_id.md "ID"). When trying to add a record with an identical ID, no changes are made, and therefore [IMTConSpreadSink::OnSpreadUpdate](imtconspreadsink_onspreadupdate.md "OnSpreadUpdate") notification method is not called.
A configuration can be added or updated only from the plugins that run on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.
Before adding, the correctness of the record is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.