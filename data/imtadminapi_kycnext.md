# KYCNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ KYC ](imtadminapi_config_kyc.md "KYC")/ KYCNext | [](imtadminapi_kyctotal.md "KYCTotal") [](imtadminapi_kycget.md "KYCGet") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::KYCNext
Get a KYC provider configuration by index.
C++
MTAPIRES IMTAdminAPI::KYCNext( const UINT pos, // Position of configuration IMTConKYC* kyc // KYC provider configuration object )  
---  
.NET
MTRetCode CIMTAdminAPI.KYCNext( uing pos, // Position configuration CIMTConKYC kyc // KYC provider configuration object )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
kyc
[out] KYC provider configuration object. The 'kyc' object must be created in advance using the [IMTServerAPI::KYCCreate](imtserverapi_kyccreate.md "KYCCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of the KYC provider with a specified index to the 'kyc' object.