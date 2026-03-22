# GroupTotal (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Groups ](imtgatewayapi_config_group.md "Functions")/ GroupTotal | [](imtgatewayapi_groupunsubscribe.md "GroupUnsubscribe") [](imtgatewayapi_groupnext.md "GroupNext") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::GroupTotal
Get the number of the groups configurations available for a gateway.
C++
UINT IMTGatewayAPI::GroupTotal()  
---  
.NET
uint CIMTGatewayAPI.GroupTotal()  
---  
Return Value
The number of group configurations available for a gateway.
Note
This method is used only for gateways.
Available client groups are indicated on the "Groups" tab of a gateway in MetaTrader 5 Administrator. [IMTConGateway::Group*](imtcongateway_symboladd.md "SymbolAdd") methods group is provided for working with available client groups in Gateway API.