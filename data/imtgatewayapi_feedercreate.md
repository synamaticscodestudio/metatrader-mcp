# FeederCreate (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Data Feeds ](imtgatewayapi_config_datafeeds.md "Functions")/ FeederCreate | [](imtgatewayapi_config_datafeeds.md "Functions") [](imtgatewayapi_feederparamcreate.md "FeederParamCreate") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::FeederCreate
Create an object of the data feed configuration.
C++
IMTConFeeder* IMTGatewayAPI::FeederCreate()  
---  
.NET
CIMTConFeeder CIMTGatewayAPI.FeederCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConFeeder](imtconfeeder.md "MTConFeeder") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConFeeder::Release](imtconfeeder_release.md "Release") method of this object.