# SpreadCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Spreads ](serverapi_config_spread.md "Spreads")/ SpreadCreate | [](serverapi_config_spread.md "Spreads") [](imtserverapi_spreadlegcreate.md "SpreadLegCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SpreadCreate
Create an object of the configuration of a spread.
IMTConSpread* IMTServerAPI::SpreadCreate()  
---  
Return Value
It returns a pointer to the created object that implements [IMTConSpread](imtconspread.md "IMTConSpread") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling [IMTConSpread::Release](imtconspread_release.md "Release") method of this object.