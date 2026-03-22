# GroupCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Groups ](imtreportapi_config_group.md "Groups")/ GroupCreate | [](imtreportapi_config_group.md "Groups") [](imtreportapi_groupsymbolcreate.md "GroupSymbolCreate") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::GroupCreate
Create an object of the group configuration.
IMTConGroup* IMTReportAPI::GroupCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConGroup](imtcongroup.md "IMTConGroup") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConGroup::Release](imtcongroup_release.md "Release") method of this object.