# GroupCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Groups ](imtadminapi_config_group.md "Functions")/ GroupCreate | [](imtadminapi_config_group.md "Functions") [](imtadminapi_groupsymbolcreate.md "GroupSymbolCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::GroupCreate
Create an object of the group configuration.
C++
IMTConGroup* IMTAdminAPI::GroupCreate()  
---  
.NET
CIMTConGroup CIMTAdminAPI.GroupCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConGroup](imtcongroup.md "IMTConGroup") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConGroup::Release](imtcongroup_release.md "Release") method of this object.