# GroupGet (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Groups ](imtgatewayapi_config_group.md "Functions")/ GroupGet | [](imtgatewayapi_groupnext.md "GroupNext") [](imtgatewayapi_config_time.md "Functions") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::GroupGet
Get the group configuration by the name.
C++
MTAPIRES IMTGatewayAPI::GroupGet( LPCWSTR name, // Name of the configuration IMTConGroup* group // Group configuration object )  
---  
.NET
MTRetCode CIMTGatewayAPI.GroupGet( string name, // Name of the configuration CIMTConGroup group // Group configuration object )  
---  
Parameters
name
[in] The name of the configuration.
group
[out] An object of group configuration. The group object must be first created using the [IMTGatewayAPI::GroupCreate](imtgatewayapi_groupcreate.md "GroupCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConGroup::Group()](imtcongroup_group.md "Group") value is used as the name.