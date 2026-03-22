# GroupTierCreate (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Groups ](imtgatewayapi_config_group.md "Functions")/ GroupTierCreate | [](imtgatewayapi_groupcommissioncreate.md "GroupCommissionCreate") [](imtgatewayapi_groupsubscribe.md "GroupSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::GroupTierCreate
Create an object of commission range configuration for a group.
C++
IMTConCommTier* IMTGatewayAPI::GroupTierCreate()  
---  
.NET
CIMTConCommTier CIMTGatewayAPI.GroupTierCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConCommTier](imtconcommtier.md "IMTConCommTier") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConCommTier::Release](imtconcommtier_release.md "Release") method of this object.