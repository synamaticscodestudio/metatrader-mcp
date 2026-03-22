# KYCGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ KYC ](serverapi_kyc.md "KYC")/ KYCGet | [](imtserverapi_kycnext.md "KYCNext") [](imtserverapi_kycstart.md "KYCStart") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::KYCGet
Get a messenger configuration by name.
MTAPIRES IMTServerAPI::KYCGet( LPCWSTR name, // Configuration name IMTConKYC* kyc // KYC provider configuration object )  
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