# SpreadNext (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Spreads ](serverapi_config_spread.md "Spreads")/ SpreadNext | [](imtserverapi_spreadtotal.md "SpreadTotal") [](imtserverapi_spreadget.md "SpreadGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SpreadNext
Receiving a spread configuration by the index.
MTAPIRES IMTServerAPI::SpreadNext( const UINT pos, // Position of the configuration IMTConSymbol* spread // Spread configuration object )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
spread
[out] Spread configuration object. The spread object must be first created using [IMTServerAPI::SpreadCreate](imtserverapi_spreadcreate.md "SpreadCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a spread with a specified index to spread object.