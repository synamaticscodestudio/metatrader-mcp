# SpreadAdd (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Spreads ](serverapi_config_spread.md "Spreads")/ SpreadAdd | [](imtserverapi_spreadunsubscribe.md "SpreadUnsubscribe") [](imtserverapi_spreaddelete.md "SpreadDelete") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SpreadAdd
Add or update a spread configuration.
MTAPIRES IMTServerAPI::SpreadAdd( IMTSpreadSymbol* spread // Spread configuration object )  
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