# SpreadDelete (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Spreads ](serverapi_config_spread.md "Spreads")/ SpreadDelete | [](imtserverapi_spreadadd.md "SpreadAdd") [](imtserverapi_spreadshift.md "SpreadShift") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SpreadDelete
Deleting a spread configuration by the index.
MTAPIRES IMTServerAPI::SpreadDelete( const UINT pos // Position of the configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can be deleted only from the plugins that run on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.