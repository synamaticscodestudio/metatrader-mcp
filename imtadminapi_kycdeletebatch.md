# KYCDeleteBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ KYC ](imtadminapi_config_kyc.md "KYC")/ KYCDeleteBatch | [](imtadminapi_kycdelete.md "KYCDelete") [](imtadminapi_kycshift.md "KYCShift") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::KYCDeleteBatch
Delete a batch of KYC provider configurations.
C++
MTAPIRES IMTAdminAPI::KYCDeleteBatch( IMTConKYC**  configs, // Array of settings const UINT config_total, // Number of settings in the platform MTAPIRES* results // Array of results )  
---  
.NET
MTRetCode CIMTAdminAPI.KYCDeleteBatch( CIMTConKYC[] configs, // Array of settings MTRetCode[] results // Array of results )  
---  
Parameters
configs
[in] A pointer to an array of configurations which you want to delete.
config_total
[in] The number of configurations in the 'configs' array.
results
[out] An array with the results of each configuration deletion on the server.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned. The [MT_RET_OK](retcodes_successful.md "Successful completion") response code is an indication of successful change sending to a server; the results of applying changes are passed in the 'results' parameter.
Note
Configurations can only be deleted when connected to the main trade server. In all other cases, the [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") response code is returned. If the object is not found, the [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") error code is added to the 'results' array of this object.