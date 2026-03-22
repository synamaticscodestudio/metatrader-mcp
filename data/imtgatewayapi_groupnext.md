# GroupNext (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Groups ](imtgatewayapi_config_group.md "Functions")/ GroupNext | [](imtgatewayapi_grouptotal.md "GroupTotal") [](imtgatewayapi_groupget.md "GroupGet") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::GroupNext
Get the group configuration by the index.
C++
MTAPIRES IMTGatewayAPI::GroupNext( const UINT pos, // Position of the configuration IMTConGroup* group // Group configuration object )  
---  
.NET
MTRetcCode CIMTGatewayAPI.GroupNext( uint pos, // Position of the configuration CIMTConGroup group // Group configuration object )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
group
[out] An object of group configuration. The group object must be first created using the [IMTGatewayAPI::GroupCreate](imtgatewayapi_groupcreate.md "GroupCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the configuration data of a group with a specified index to the group object.