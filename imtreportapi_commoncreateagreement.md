# CommonCreateAgreement (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Common ](imtreportapi_config_common.md "Common")/ CommonCreateAgreement | [](imtreportapi_commoncreateallocation.md "CommonCreateAllocation") [](imtreportapi_commonget.md "CommonGet") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::CommonCreate
Create an agreement object for an account allocation configuration.
IMTConAccountAgreement* IMTReportAPI::CommonCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConAccountAgreement](imtconaccountagreement.md "IMTConAccountAgreement") interface. On failure, NULL is returned.
Note
The created object must be destroyed by calling the [IMTConAccountAgreement::Release](imtconaccountagreement_release.md "Release") method of this object.