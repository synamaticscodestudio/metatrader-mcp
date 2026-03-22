# CommonCreateAllocation (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Common ](imtadminapi_config_common.md "Functions")/ CommonCreateAllocation | [](imtadminapi_commoncreate.md "CommonCreate") [](imtadminapi_commoncreateagreement.md "CommonCreateAgreement") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::CommonCreateAllocation
Create an account allocation configuration object.
C++
IMTConAccountAllocation* IMTAdminAPI::CommonCreateAllocation()  
---  
.NET
CIMTConAccountAllocation CIMTAdminAPI.CommonCreateAllocation()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConAccountAllocation](imtconaccountallocation.md "IMTConAccountAllocation") interface. On failure, NULL is returned.
Note
The created object must be destroyed by calling the [IMTConAccountAllocation::Release](imtconaccountallocation_release.md "Release") method of this object.