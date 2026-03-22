# GroupNext (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Groups ](imtreportapi_config_group.md "Groups")/ GroupNext | [](imtreportapi_grouptotal.md "GroupTotal") [](imtreportapi_groupget.md "GroupGet") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::GroupNext
Get the group configuration by the index.
MTAPIRES IMTReportAPI::GroupNext( const UINT pos, // Position of the configuration IMTConGroup* group // Group configuration object )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
group
[out] An object of group configuration. The group object must be first created using the [IMTReportAPI::GroupCreate](imtreportapi_groupcreate.md "GroupCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a group with a specified index to the group object.