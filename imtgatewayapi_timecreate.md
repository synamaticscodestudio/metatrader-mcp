# TimeCreate (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Time ](imtgatewayapi_config_time.md "Functions")/ TimeCreate | [](imtgatewayapi_config_time.md "Functions") [](imtgatewayapi_timesubscribe.md "TimeSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::TimeCreate
Create an object of the time configuration.
C++
IMTConTime* IMTGatewayAPI::TimeCreate()  
---  
.NET
CIMTConTime CIMTGatewayAPI.TimeCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConTime](imtcontime.md "IMTConTime") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConTime::Release](imtcontime_release.md "Release") method of this object.