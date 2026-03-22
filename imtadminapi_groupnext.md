# GroupNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Groups ](imtadminapi_config_group.md "Functions")/ GroupNext | [](imtadminapi_grouptotal.md "GroupTotal") [](imtadminapi_groupget.md "GroupGet") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::GroupNext
Get the group configuration by the index.
C++
MTAPIRES IMTAdminAPI::GroupNext( const UINT pos, // Position of the configuration IMTConGroup* group // Group configuration object )  
---  
.NET
MTRetCode CIMTAdminAPI.GroupNext( uint pos, // Position of the configuration CIMTConGroup group // Group configuration object )  
---  
Python
AdminAPI.GroupNext( pos # Position of the configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
group
[out] An object of group configuration. The group object must be first created using the [IMTAdminAPI::GroupCreate](imtadminapi_groupcreate.md "GroupCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a group with a specified index to the group object.