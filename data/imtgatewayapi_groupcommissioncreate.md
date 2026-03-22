# GroupCommissionCreate (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Groups ](imtgatewayapi_config_group.md "Functions")/ GroupCommissionCreate | [](imtgatewayapi_groupsymbolcreate.md "GroupSymbolCreate") [](imtgatewayapi_grouptiercreate.md "GroupTierCreate") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::GroupCommissionCreate
Create an object of commission configuration for a group.
C++
IMTConCommission* IMTGatewayAPI::GroupCommissionCreate()  
---  
.NET
CIMTConCommission CIMTGatewayAPI.GroupCommissionCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConCommission](imtconcommission.md "IMTConCommission") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConCommission::Release](imtconcommission_release.md "Release") method of this object.