# LeverageDeleteBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Floating Margin ](imtadminapi_config_leverage.md "Floating Margin")/ LeverageDeleteBatch | [](imtadminapi_leveragedelete.md "LeverageDelete") [](imtadminapi_leverageshift.md "LeverageShift") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::LeverageDeleteBatch
Delete a batch of floating margin configurations.
C++
MTAPIRES IMTAdminAPI::LeverageDeleteBatch( IMTConLeverage**  configs, // Array of settings const UINT config_total, // Number of settings in the array MTAPIRES* results // Array of results )  
---  
.NET
MTRetCode CIMTAdminAPI.LeverageDeleteBatch( CIMTConLeverage[] configs, // Array of settings MTRetCode[] results // Array of results )  
---  
Python
AdminAPI.LeverageDeleteBatch( list[MTConLeverage] configs # Array of settings )  
---  
Parameters
configs
[in] Pointer to an array of configurations which should be deleted.
config_total
[in] Number of configurations in the 'configs' array.
results
[out] Array with the results of deleting each configuration on the server.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, the code of the encountered error is returned. The response code [MT_RET_OK](retcodes_successful.md "Successful completion") indicates successful submission of changes to the server. The result of applying these changes are passed in the 'results' parameter.
Note
Configurations can only be deleted when connected to the main trade server. In all other cases, the [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") response code is returned. If the object is not found, the [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") error code is added to the 'results' array of this object.