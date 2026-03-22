# CommonCreateAllocation (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Common ](imtreportapi_config_common.md "Common")/ CommonCreateAllocation | [](imtreportapi_commoncreate.md "CommonCreate") [](imtreportapi_commoncreateagreement.md "CommonCreateAgreement") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::CommonCreateAllocation
Create an account allocation configuration object.
IMTConAccountAllocation* IMTReportAPI::CommonCreateAllocation()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConAccountAllocation](imtconaccountallocation.md "IMTConAccountAllocation") interface. On failure, NULL is returned.
Note
The created object must be destroyed by calling the [IMTConAccountAllocation::Release](imtconaccountallocation_release.md "Release") method of this object.