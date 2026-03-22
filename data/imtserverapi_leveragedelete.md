# LeverageDelete (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Floating Margin ](serverapi_config_leverage.md "Floating Margin")/ LeverageDelete | [](imtserverapi_leverageadd.md "LeverageAdd") [](imtserverapi_leverageshift.md "LeverageShift") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::LeverageDelete
Delete a floating margin configuration by name.
MTAPIRES IMTServerAPI::LeverageDelete( LPCWSTR name // Configuration name )  
---  
Parameters
name
[in] The name of the configuration to delete. The [IMTConLeverage::Name](imtconleverage_name.md "Name") value is used for the configuration name.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, the code of the encountered error is returned.
Note
A configuration can only be deleted from plugins running on the main server. For all other plugins, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
IMTServerAPI::LeverageDelete
Delete a floating margin configuration by index.
MTAPIRES IMTServerAPI::LeverageDelete( const UINT pos // Configuration position )  
---  
Parameters
pos
[in] Configuration position starting from 0.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, the code of the encountered error is returned.
Note
A configuration can only be deleted from plugins running on the main server. For all other plugins, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.