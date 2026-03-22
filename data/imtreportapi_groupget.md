# GroupGet (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Groups ](imtreportapi_config_group.md "Groups")/ GroupGet | [](imtreportapi_groupnext.md "GroupNext") [](imtreportapi_groupgetlight.md "GroupGetLight") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::GroupGet
Get the group configuration by the name.
MTAPIRES IMTReportAPI::GroupGet( LPCWSTR name, // Name of the configuration IMTConGroup* group // Group configuration object )  
---  
Parameters
name
[in] The name of the configuration.
group
[out] An object of group configuration. The group object must be first created using the [IMTReportAPI::GroupCreate](imtreportapi_groupcreate.md "GroupCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConGroup::Group()](imtcongroup_group.md "Group") value is used as the name.