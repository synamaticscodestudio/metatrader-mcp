# CommonCreateAgreement (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Common ](serverapi_config_common.md "Common")/ CommonCreateAgreement | [](imtserverapi_commoncreateallocation.md "CommonCreateAllocation") [](imtserverapi_commonsubscribe.md "CommonSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::CommonCreate
Create an agreement object for an account allocation configuration.
IMTConAccountAgreement* IMTServerAPI::CommonCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConAccountAgreement](imtconaccountagreement.md "IMTConAccountAgreement") interface. On failure, NULL is returned.
Note
The created object must be destroyed by calling the [IMTConAccountAgreement::Release](imtconaccountagreement_release.md "Release") method of this object.