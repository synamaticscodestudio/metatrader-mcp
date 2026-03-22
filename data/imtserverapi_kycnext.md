# KYCNext (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ KYC ](serverapi_kyc.md "KYC")/ KYCNext | [](imtserverapi_kyctotal.md "KYCTotal") [](imtserverapi_kycget.md "KYCGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::KYCNext
Get a KYC provider configuration by index.
MTAPIRES IMTServerAPI::KYCNext( const UINT pos, // Position of configuration IMTConKYC* kyc // KYC provider configuration object )  
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