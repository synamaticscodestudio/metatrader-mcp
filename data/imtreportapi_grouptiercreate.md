# GroupTierCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Groups ](imtreportapi_config_group.md "Groups")/ GroupTierCreate | [](imtreportapi_groupcommissioncreate.md "GroupCommissionCreate") [](imtreportapi_grouptotal.md "GroupTotal") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::GroupTierCreate
Create an object of commission range configuration for a group.
IMTConCommTier* IMTReportAPI::GroupTierCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConCommTier](imtconcommtier.md "IMTConCommTier") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConCommTier::Release](imtconcommtier_release.md "Release") method of this object.