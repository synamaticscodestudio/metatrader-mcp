# KYCCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ KYC ](imtadminapi_config_kyc.md "KYC")/ KYCCreate | [](imtadminapi_config_kyc.md "KYC") [](imtadminapi_kyccountrycreate.md "KYCCountryCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::KYCCreate
Create a KYC provider configuration object.
C++
IMTConKYC* IMTAdminAPI::KYCCreate()  
---  
.NET
CIMTConKYC CIMTAdminAPI.KYCCreate()  
---  
Return Value
Returns a pointer to the created object implementing the [IMTConKYC](imtconkyc.md "IMTConKYC") interface. Null is returned in case of failure.
Note
The created object should be destroyed by calling the [IMTConKYC::Release](imtconkyc_release.md "Release") method of this object.