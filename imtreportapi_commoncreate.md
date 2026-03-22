# CommonCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Common ](imtreportapi_config_common.md "Common")/ CommonCreate | [](imtreportapi_config_common.md "Common") [](imtreportapi_commoncreateallocation.md "CommonCreateAllocation") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::CommonCreate
Create an object of the common platform configuration.
IMTConCommon* IMTReportAPI::CommonCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConCommon](imtconcommon.md "IMTConCommon") interface. In case of failure, it returns Null.
Note
The created object must be destroyed by calling the [IMTConCommon:Release](imtconcommon_release.md "Release") method of this object.