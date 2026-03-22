# KYCGroupCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ KYC ](imtadminapi_config_kyc.md "KYC")/ KYCGroupCreate | [](imtadminapi_kyccountrycreate.md "KYCCountryCreate") [](imtadminapi_kycsubscribe.md "KYCSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::KYCGroupCreate
Create an object of the account group for which the KYC provider will be used.
C++
IMTConKYCGroup* IMTAdminAPI::KYCGroupCreate()  
---  
.NET
CIMTConKYCGroup CIMTAdminAPI.KYCGroupCreate()  
---  
Return Value
Returns a pointer to the created object implementing the [IMTConKYCGroup](imtconkycgroup.md "IMTConKYCGroup") interface. Null is returned in case of failure.
Note
The created object should be destroyed by calling the [IMTConKYCGroup::Release](imtconkycgroup_release.md "Release") method of this object.