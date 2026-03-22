# FeederTranslateCreate (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Data Feeds ](imtgatewayapi_config_datafeeds.md "Functions")/ FeederTranslateCreate | [](imtgatewayapi_feederparamcreate.md "FeederParamCreate") [](imtgatewayapi_config_gateway.md "Functions") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::FeederTranslateCreate
Create an object of setup of converting the information transmitted from a data feed.
C++
IMTConFeederTranslate* IMTGatewayAPI::FeederTranslateCreate()  
---  
.NET
CIMTConFeederTranslate CIMTGatewayAPI.FeederTranslateCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConFeederTranslate](imtconfeedertranslate.md "IMTConFeederTranslate") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConFeederTranslate::Release](imtconfeedertranslate_release.md "Release") method of this object.