# KYCCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ KYC ](serverapi_kyc.md "KYC")/ KYCCreate | [](serverapi_kyc.md "KYC") [](imtserverapi_kyccountrycreate.md "KYCCountryCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::KYCCreate
Create a KYC provider configuration object.
IMTConKYC* IMTServerAPI::KYCCreate()  
---  
Return Value
Returns a pointer to the created object implementing the [IMTConKYC](imtconkyc.md "IMTConKYC") interface. Null is returned in case of failure.
Note
The created object should be destroyed by calling the [IMTConKYC::Release](imtconkyc_release.md "Release") method of this object.