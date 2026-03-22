# CommonCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Common ](imtadminapi_config_common.md "Functions")/ CommonCreate | [](imtadminapi_config_common.md "Functions") [](imtadminapi_commoncreateallocation.md "CommonCreateAllocation") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::CommonCreate
Create an object of the common platform configuration.
C++
IMTConCommon* IMTAdminAPI::CommonCreate()  
---  
.NET
CIMTConCommon CIMTAdminAPI.CommonCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConCommon](imtconcommon.md "IMTConCommon") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConCommon::Release](imtconcommon_release.md "Release") method of this object.