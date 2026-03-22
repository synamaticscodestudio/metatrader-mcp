# GroupCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Groups ](imtmanagerapi_config_group.md "Groups")/ GroupCreate | [](imtmanagerapi_config_group.md "Groups") [](imtmanagerapi_groupcreatearray.md "GroupCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::GroupCreate
Create an object of the group configuration.
C++
IMTConGroup* IMTManagerAPI::GroupCreate()  
---  
.NET
CIMTConGroup CIMTManagerAPI.GroupCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConGroup](imtcongroup.md "IMTConGroup") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConGroup::Release](imtcongroup_release.md "Release") method of this object.