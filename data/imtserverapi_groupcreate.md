# GroupCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Groups ](serverapi_config_group.md "Groups")/ GroupCreate | [](serverapi_config_group.md "Groups") [](imtserverapi_groupsymbolcreate.md "GroupSymbolCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::GroupCreate
Create an object of the group configuration.
IMTConGroup* IMTServerAPI::GroupCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConGroup](imtcongroup.md "IMTConGroup") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConGroup::Release](imtcongroup_release.md "Release") method of this object.