# GroupCommissionCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Groups ](imtreportapi_config_group.md "Groups")/ GroupCommissionCreate | [](imtreportapi_groupsymbolcreate.md "GroupSymbolCreate") [](imtreportapi_grouptiercreate.md "GroupTierCreate") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::GroupCommissionCreate
Create an object of commission configuration for a group.
IMTConCommission* IMTReportAPI::GroupCommissionCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConCommission](imtconcommission.md "IMTConCommission") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConCommission::Release](imtconcommission_release.md "Release") method of this object.