# CommonCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Common ](serverapi_config_common.md "Common")/ CommonCreate | [](serverapi_config_common.md "Common") [](imtserverapi_commoncreateallocation.md "CommonCreateAllocation") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::CommonCreate
Create an object of the common platform configuration.
IMTConCommon* IMTServerAPI::CommonCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConCommon](imtconcommon.md "IMTConCommon") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConCommon::Release](imtconcommon_release.md "Release") method of this object.