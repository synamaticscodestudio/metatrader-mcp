# KYCCountryCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ KYC ](serverapi_kyc.md "KYC")/ KYCCountryCreate | [](imtserverapi_kyccreate.md "KYCCreate") [](imtserverapi_kycgroupcreate.md "KYCGroupCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::KYCCountryCreate
Create an object of a country for which the KYC provider will be used.
IMTConKYCCountry* IMTServerAPI::KYCCountryCreate()  
---  
Return Value
Returns a pointer to the created object implementing the [IMTConKYCCountry](imtconkyccountry.md "IMTConKYCCountry") interface. Null is returned in case of failure.
Note
The created object should be destroyed by calling the [IMTConKYCCountry::Release](imtconkyccountry_release.md "Release") method of this object.