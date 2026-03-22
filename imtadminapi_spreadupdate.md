# SpreadUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Spreads ](imtadminapi_config_spread.md "Configuration of Spreads")/ SpreadUpdate | [](imtadminapi_spreadunsubscribe.md "SpreadUnsubscribe") [](imtadminapi_spreadupdatebatch.md "SpreadUpdateBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SpreadUpdate
Add or update a spread configuration.
C++
MTAPIRES IMTAdminAPI::SpreadUpdate( IMTSpreadSymbol* spread // Spread configuration object )  
---  
.NET
MTRetCode CIMTAdminAPI.SpreadUpdate( CIMTSpreadSymbol spread // Spread configuration object )  
---  
Python
AdminAPI.SpreadUpdate( spread # Spread configuration object )  
---  
Parameters
spread
[in] Spread configuration object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can be added or updated only from the plugins that run on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.
Before adding, the correctness of the record is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.