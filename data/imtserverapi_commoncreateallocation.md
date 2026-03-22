# CommonCreateAllocation (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Common ](serverapi_config_common.md "Common")/ CommonCreateAllocation | [](imtserverapi_commoncreate.md "CommonCreate") [](imtserverapi_commoncreateagreement.md "CommonCreateAgreement") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::CommonCreateAllocation
Create an account allocation configuration object.
IMTConAccountAllocation* IMTServerAPI::CommonCreateAllocation()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConAccountAllocation](imtconaccountallocation.md "IMTConAccountAllocation") interface. On failure, NULL is returned.
Note
The created object must be destroyed by calling the [IMTConAccountAllocation::Release](imtconaccountallocation_release.md "Release") method of this object.