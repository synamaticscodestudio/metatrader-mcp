# GroupGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Groups ](imtmanagerapi_config_group.md "Groups")/ GroupGet | [](imtmanagerapi_groupnext.md "GroupNext") [](imtmanagerapi_grouprequest.md "GroupRequest") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::GroupGet
Get the group configuration by the name.
C++
MTAPIRES IMTManagerAPI::GroupGet( LPCWSTR name, // Name of the configuration IMTConGroup* group // Group configuration object )  
---  
.NET
MTRetCode CIMTManagerAPI.GroupGet( string name, // Name of the configuration CIMTConGroup group // Group configuration object )  
---  
Python
ManagerAPI.GroupGet( name # Name of the configuration )  
---  
Parameters
name
[in] The name of the configuration. The [IMTConGroup::Group()](imtcongroup_group.md "Group") value is used as the name..
group
[out] An object of group configuration. The group object must be first created using the [IMTManagerAPI::GroupCreate](imtmanagerapi_groupcreate.md "GroupCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method is valid only if the [IMTManagerAPI::PUMP_MODE_GROUPS](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode was specified during connection.