# KYCGroupCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ KYC ](serverapi_kyc.md "KYC")/ KYCGroupCreate | [](imtserverapi_kyccountrycreate.md "KYCCountryCreate") [](imtserverapi_kycsubscribe.md "KYCSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::KYCGroupCreate
Create an object of an account group for which the messenger will be used.
IMTConKYCGroup* IMTServerAPI::KYCGroupCreate()  
---  
Return Value
Returns a pointer to the created object implementing the [IMTConKYCGroup](imtconkycgroup.md "IMTConKYCGroup") interface. Null is returned in case of failure.
Note
The created object should be destroyed by calling the [IMTConKYCGroup::Release](imtconkycgroup_release.md "Release") method of this object.