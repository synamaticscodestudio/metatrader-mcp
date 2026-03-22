# LeverageGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Floating Margin ](serverapi_config_leverage.md "Floating Margin")/ LeverageGet | [](imtserverapi_leveragenext.md "LeverageNext") [](serverapi_clients.md "Clients") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::LeverageGet
Get a floating margin configuration by name.
MTAPIRES IMTServerAPI::LeverageGet( LPCWSTR name, // Configuration name IMTConLeverage*  config // Configuration object )  
---  
Parameters
name
[in] Configuration name. The [IMTConSubscription::Name](imtconsubscription_name.md "Name") value is used for the configuration name.
config
[out] Configuration object. The config object must be previously created using the [IMTServerAPI::LeverageCreate](imtserverapi_leveragecreate.md "LeverageCreate") method.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, the code of the encountered error is returned.