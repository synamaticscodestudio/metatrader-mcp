# GroupCreateArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Groups ](imtmanagerapi_config_group.md "Groups")/ GroupCreateArray | [](imtmanagerapi_groupcreate.md "GroupCreate") [](imtmanagerapi_groupsymbolcreate.md "GroupSymbolCreate") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::GroupCreateArray
Create a groups array object.
C++
IMTConGroupArray* IMTManagerAPI::GroupCreateArray()  
---  
.NET
CIMTConGroupArray CIMTManagerAPI.GroupCreateArray()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConGroupArray](imtcongrouparray.md "IMTConGroupArray") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConGroupArray::Release](imtcongrouparray_release.md "Release") method of this object.