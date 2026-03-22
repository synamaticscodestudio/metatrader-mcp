# KYCGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ KYC ](imtadminapi_config_kyc.md "KYC")/ KYCGet | [](imtadminapi_kycnext.md "KYCNext") [](imtadminapi_kycstart.md "KYCStart") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::KYCGet
Get a KYC provider configuration by name.
C++
MTAPIRES IMTAdminAPI::KYCGet( LPCWSTR name, // Configuration name IMTConKYC* kyc // KYC provider configuration object )  
---  
.NET
MTRetCode CIMTAdminAPI.KYCGet( string name, // Configuration name CIMTConKYC kyc // KYC provider configuration object )  
---  
Parameters
name
[in] The name of the configuration.
kyc
[out] KYC provider configuration object. The 'kyc' object must be created in advance using the [IMTServerAPI::KYCCreate](imtserverapi_kyccreate.md "KYCCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConKYC::Name](imtconkyc_name.md "Name") value is used as the configuration name.