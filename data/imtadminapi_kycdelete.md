# KYCDelete (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ KYC ](imtadminapi_config_kyc.md "KYC")/ KYCDelete | [](imtadminapi_kycupdatebatch.md "KYCUpdateBatch") [](imtadminapi_kycdeletebatch.md "KYCDeleteBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::KYCDelete
Delete a KYC provider configuration by name.
C++
MTAPIRES IMTAdminAPI::KYCDelete( LPCWSTR name // Configuration name )  
---  
.NET
MTRetCode CIMTAdminAPI.KYCDelete( string name // Configuration name )  
---  
Parameters
name
[in] The name of the configuration to delete.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can only be deleted from the applications that run on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
The [IMTConKYC::Name](imtconkyc_name.md "Name") value is used as the configuration name.
IMTAdminAPI::KYCDelete
Delete a KYC provider configuration by index.
C++
MTAPIRES IMTAdminAPI::KYCDelete( const UINT pos // Position of configuration )  
---  
.NET
MTRetCode CIMTAdminAPI.KYCDelete( uint pos // Position of configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
A configuration can only be deleted from the applications that run on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.