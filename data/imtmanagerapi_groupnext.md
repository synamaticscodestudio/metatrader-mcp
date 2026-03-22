# GroupNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Groups ](imtmanagerapi_config_group.md "Groups")/ GroupNext | [](imtmanagerapi_grouptotal.md "GroupTotal") [](imtmanagerapi_groupget.md "GroupGet") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::GroupNext
Get the group configuration by the index.
C++
MTAPIRES IMTManagerAPI::GroupNext( const UINT pos, // Position of the configuration IMTConGroup* group // Group configuration object )  
---  
.NET
MTRetCode CIMTManagerAPI.GroupNext( uint pos, // Position of the configuration CIMTConGroup group // Group configuration object )  
---  
Python
ManagerAPI.GroupNext( pos # Position of the configuration )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
group
[out] An object of group configuration. The group object must be first created using the [IMTManagerAPI::GroupCreate](imtmanagerapi_groupcreate.md "GroupCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a group with a specified index to the group object. The method is valid only if the [IMTManagerAPI::PUMP_MODE_GROUPS](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode was specified during connection.