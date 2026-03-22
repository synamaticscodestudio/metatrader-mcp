# LeverageNext (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Floating Margin ](serverapi_config_leverage.md "Floating Margin")/ LeverageNext | [](imtserverapi_leveragetotal.md "LeverageTotal") [](imtserverapi_leverageget.md "LeverageGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::LeverageNext
Get a floating margin configuration by index.
MTAPIRES IMTServerAPI::LeverageNext( const UINT pos, // Configuration position IMTConLeverage* config // Configuration object )  
---  
Parameters
pos
[in] Configuration position starting from 0.
config
[out] Configuration object. The config object must be previously created using the [IMTServerAPI::LeverageCreate](imtserverapi_leveragecreate.md "LeverageCreate") method.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, the code of the encountered error is returned.
Note
This method copies the subscription configuration with a specified index to the 'config' object.