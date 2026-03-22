# LeverageAdd (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Floating Margin ](serverapi_config_leverage.md "Floating Margin")/ LeverageAdd | [](imtserverapi_leverageunsubscribe.md "LeverageUnsubscribe") [](imtserverapi_leveragedelete.md "LeverageDelete") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::LeverageAdd
Add or update a floating margin configuration.
MTAPIRES IMTServerAPI::LeverageAdd( IMTConLeverage* config // Configuration object )  
---  
Parameters
config
[in] Floating margin configuration object [IMTConLeverage](imtconleverage.md "IMTConLeverage").
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, the code of the encountered error is returned.
Note
When the method is called, the system checks whether the record being added already exists. If the record is found, the system updates it. Otherwise, a new entry is added. The comparison is based on the configuration name field [IMTConLeverage::Name](imtconleverage_name.md "Name"). If an attempt is made to add a completely identical record, no changes are made, and consequently, the notification method [IMTConLeverageSink::OnLeverageUpdate](imtconleveragesink_onleverageupdate.md "OnLeverageUpdate") is not called.
A configuration can only be added or updated from plugins running on the main server. For all other plugins, the response code [MT_RET_ERR_NOTMAIN](retcodes_common.md "Common errors") is returned.
A record is validated before being added. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.