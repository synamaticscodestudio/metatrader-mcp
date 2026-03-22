# GroupGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Groups ](imtadminapi_config_group.md "Functions")/ GroupGet | [](imtadminapi_groupnext.md "GroupNext") [](imtadminapi_config_leverage.md "Floating Margin") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::GroupGet
Get the group configuration by the name.
C++
MTAPIRES IMTAdminAPI::GroupGet( LPCWSTR name, // Name of the configuration IMTConGroup* group // Group configuration object )  
---  
.NET
MTRetCode CIMTAdminAPI.GroupGet( string name, // Name of the configuration CIMTConGroup group // Group configuration object )  
---  
Python
AdminAPI.GroupGet( name # Name of the configuration )  
---  
Parameters
name
[in] The name of the configuration.
group
[out] An object of group configuration. The group object must be first created using the [IMTAdminAPI::GroupCreate](imtadminapi_groupcreate.md "GroupCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConGroup::Group()](imtcongroup_group.md "Group") value is used as the name.