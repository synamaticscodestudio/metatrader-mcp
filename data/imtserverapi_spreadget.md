# SpreadGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Spreads ](serverapi_config_spread.md "Spreads")/ SpreadGet | [](imtserverapi_spreadnext.md "SpreadNext") [](serverapi_config_group.md "Groups") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SpreadGet
Receiving a spread configuration by the identifier.
MTAPIRES IMTServerAPI::SpreadGet( UINT id, // Configuration name IMTConSpread* spread // Spread configuration object )  
---  
Parameters
id
[in] [Configuration identifier](imtconspread_id.md "ID").
spread
[out] Spread configuration object. The spread object must be first created using [IMTServerAPI::SpreadCreate](imtserverapi_symbolcreate.md "SymbolCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
[IMTConSpread::ID](imtconspread_id.md "ID") value is used as the identifier.