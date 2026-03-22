# GroupRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Groups ](imtmanagerapi_config_group.md "Groups")/ GroupRequest | [](imtmanagerapi_groupget.md "GroupGet") [](imtmanagerapi_grouprequestarray.md "GroupRequestArray") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::GroupRequest
Request a group configuration from a server by the name.
C++
MTAPIRES IMTManagerAPI::GroupRequest( LPCWSTR name, // Group name IMTConGroup* group // Group configuration object )  
---  
.NET
MTRetCode CIMTManagerAPI.GroupRequest( string name, // Group name CIMTConGroup group // Group configuration object )  
---  
Python
ManagerAPI.GroupRequest( name # Group name )  
---  
Parameters
name
[in] Group name.
group
[out] An object of group configuration. The group object must be first created using the [IMTManagerAPI::GroupCreate](imtmanagerapi_groupcreate.md "GroupCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConGroup::Group()](imtcongroup_group.md "Group") value is used as the name.
This method cannot be called from event handlers (any methods of IMT*Sink classes).