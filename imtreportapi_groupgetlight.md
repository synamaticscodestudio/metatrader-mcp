# GroupGetLight (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Groups ](imtreportapi_config_group.md "Groups")/ GroupGetLight | [](imtreportapi_groupget.md "GroupGet") [](imtreportapi_config_symbol.md "Symbols") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::GroupGetLight
Get an eased configuration of a group.
MTAPIRES IMTReportAPI::GroupGetLight( LPCWSTR name, // Name of agroup IMTConGroup *group // Group configuration object )  
---  
Parameters
name
[in] Name of a group. The [IMTConGroup::Group()](imtcongroup_group.md "Group") value is used as a name.
*group
[out] An object of group configuration. The group object must be first created using the [IMTReportAPI::GroupCreate](imtreportapi_groupcreate.md "GroupCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method submits all group parameters except symbols ([IMTConGroup::Symbol*](imtcongroup_symboladd.md "SymbolAdd")) and commissions settings ([IMTConGroup::Commission*](imtcongroup_commissionadd.md "CommissionAdd")).
Request for eased configurations allows to save resources.