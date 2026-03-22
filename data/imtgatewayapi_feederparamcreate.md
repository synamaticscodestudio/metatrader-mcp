# FeederParamCreate (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Data Feeds ](imtgatewayapi_config_datafeeds.md "Functions")/ FeederParamCreate | [](imtgatewayapi_feedercreate.md "FeederCreate") [](imtgatewayapi_feedertranslatecreate.md "FeederTranslateCreate") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::FeederParamCreate
Create an object of the parameter of the data feeds.
C++
IMTConParam* IMTGatewayAPI::FeederParamCreate()  
---  
.NET
CIMTConParam CIMTGatewayAPI.FeederParamCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConParam](imtconparam.md "IMTConParam") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConParam::Release](imtconparam_release.md "Release") method of this object.