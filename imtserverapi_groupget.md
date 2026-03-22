# GroupGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Groups ](serverapi_config_group.md "Groups")/ GroupGet | [](imtserverapi_groupnext.md "GroupNext") [](serverapi_config_manager.md "Managers") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::GroupGet
Get the group configuration by the name.
MTAPIRES IMTServerAPI::GroupGet( LPCWSTR name, // Name of the configuration IMTConGroup* group // Group configuration object )  
---  
Parameters
name
[in] The name of the configuration.
group
[out] An object of group configuration. The group object must be first created using the [IMTServerAPI::GroupCreate](imtserverapi_groupcreate.md "GroupCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConGroup::Group()](imtcongroup_group.md "Group") value is used as the name.