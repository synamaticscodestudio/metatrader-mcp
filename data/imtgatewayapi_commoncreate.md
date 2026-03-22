# CommonCreate (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Common ](imtgatewayapi_config_common.md "Functions")/ CommonCreate | [](imtgatewayapi_config_common.md "Functions") [](imtgatewayapi_commonsubscribe.md "CommonSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::CommonCreate
Create a common platform configuration object.
C++
IMTConCommon* IMTGatewayAPI::CommonCreate()  
---  
.NET
CIMTConCommon CIMTGatewayAPI.CommonCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConCommon](imtconcommon.md "IMTConCommon") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConCommon::Release](imtconcommon_release.md "Release") method of this object.
The method is not available for data feeds.