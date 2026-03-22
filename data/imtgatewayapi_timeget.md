# TimeGet (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Time ](imtgatewayapi_config_time.md "Functions")/ TimeGet | [](imtgatewayapi_timecurrent.md "TimeCurrent") [](imtgatewayapi_config_network.md "Functions") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::TimeGet
Get the time configuration.
C++
MTAPIRES IMTGatewayAPI::TimeGet( IMTConTime* config // An object of time configuration )  
---  
.NET
MTRetCode CIMTGatewayAPI.TimeGet( CIMTConTime config // An object of time configuration )  
---  
Parameters
config
[out] An object of the time configuration. The config object must first be created using the [IMTGatewayAPI::TimeCreate](imtgatewayapi_timecreate.md "TimeCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [MT_RET_OK_NONE](retcodes_successful.md "Successful completion") response means that the time settings have not been yet initialized on the Gateway API side. Time settings can only be requested after receiving the [IMTGatewaySink::OnGatewayStart](imtgatewaysink_ongatewaystart.md "OnGatewayStart") event.