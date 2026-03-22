# KYCCountryCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ KYC ](imtadminapi_config_kyc.md "KYC")/ KYCCountryCreate | [](imtadminapi_kyccreate.md "KYCCreate") [](imtadminapi_kycgroupcreate.md "KYCGroupCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::KYCCountryCreate
Create an object of a country for which the messenger will be used.
C++
IMTConKYCCountry* IMTAdminAPI::KYCCountryCreate()  
---  
.NET
CIMTConKYCCountry CIMTAdminAPI.KYCCountryCreate()  
---  
Return Value
Returns a pointer to the created object implementing the [IMTConKYCCountry](imtconkyccountry.md "IMTConKYCCountry") interface. Null is returned in case of failure.
Note
The created object should be destroyed by calling the [IMTConKYCCountry::Release](imtconkyccountry_release.md "Release") method of this object.