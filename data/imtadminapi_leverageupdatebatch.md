# LeverageUpdateBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Floating Margin ](imtadminapi_config_leverage.md "Floating Margin")/ LeverageUpdateBatch | [](imtadminapi_leverageupdate.md "LeverageUpdate") [](imtadminapi_leveragedelete.md "LeverageDelete") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::LeverageUpdateBatch
Add or update a batch of floating margin configurations.
C++
MTAPIRES IMTAdminAPI::LeverageUpdateBatch( IMTConLeverage** configs, // Array of configurations const UINT config_total, // Number of configurations in the array MTAPIRES* results // Array of results )  
---  
.NET
MTRetCode CIMTAdminAPI.LeverageUpdateBatch( CIMTConLeverage[] configs, // Array of configurations MTRetCode[] results // Array of results )  
---  
Python
AdminAPI.LeverageUpdateBatch( list[MTConLeverage] configs # Array of configurations )  
---  
Parameters
configs
[in] Pointer to the array of configurations which should be added/updated.
config_total
[in] Number of configurations in the 'configs' array.
results
[out] Array with the results of applying each configuration on the server.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, the code of the encountered error is returned. The response code [MT_RET_OK](retcodes_successful.md "Successful completion") indicates successful submission of changes to the server. The result of applying these changes are passed in the 'results' parameter.
Note
A configuration can only be added or updated from the applications running on the main server. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned.
A record is validated before being added. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.