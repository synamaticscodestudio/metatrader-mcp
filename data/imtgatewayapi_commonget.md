# CommonGet (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Common ](imtgatewayapi_config_common.md "Functions")/ CommonGet | [](imtgatewayapi_commonunsubscribe.md "CommonUnsubscribe") [](imtgatewayapi_config_datafeeds.md "Functions") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::CommonGet
Get the common platform configuration.
C++
MTAPIRES IMTGatewayAPI::CommonGet( IMTConCommon* common // Configuration )  
---  
.NET
MTRetCode CIMTGatewayAPI.CommonGet( CIMTConCommon common // Configuration )  
---  
Parameters
common
[out] A common configuration object. The object must first be created using the [IMTGatewayAPI::CommonCreate](imtgatewayapi_commoncreate.md "CommonCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method is not available for data feeds.