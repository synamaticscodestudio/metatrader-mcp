# CommonCreateAgreement (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Common ](imtadminapi_config_common.md "Functions")/ CommonCreateAgreement | [](imtadminapi_commoncreateallocation.md "CommonCreateAllocation") [](imtadminapi_commonsubscribe.md "CommonSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::CommonCreate
Create an agreement object for an account allocation configuration.
C++
IMTConAccountAgreement* IMTAdminAPI::CommonCreate()  
---  
.NET
CIMTConAccountAgreement CIMTAdminAPI.CommonCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConAccountAgreement](imtconaccountagreement.md "IMTConAccountAgreement") interface. On failure, NULL is returned.
Note
The created object must be destroyed by calling the [IMTConAccountAgreement::Release](imtconaccountagreement_release.md "Release") method of this object.