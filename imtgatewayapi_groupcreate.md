# GroupCreate (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Groups ](imtgatewayapi_config_group.md "Functions")/ GroupCreate | [](imtgatewayapi_config_group.md "Functions") [](imtgatewayapi_groupsymbolcreate.md "GroupSymbolCreate") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::GroupCreate
Create an object of the group configuration.
C++
IMTConGroup* IMTGatewayAPI::GroupCreate()  
---  
.NET
CIMTConGroup CIMTGatewayAPI.GroupCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConGroup](imtcongroup.md "IMTConGroup") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConGroup::Release](imtcongroup_release.md "Release") method of this object.