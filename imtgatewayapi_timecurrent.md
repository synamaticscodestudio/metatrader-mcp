# TimeCurrent (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Time ](imtgatewayapi_config_time.md "Functions")/ TimeCurrent | [](imtgatewayapi_timeunsubscribe.md "TimeUnsubscribe") [](imtgatewayapi_timeget.md "TimeGet") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::TimeCurrent
Get the current trading time.
C++
INT64 IMTGatewayAPI::TimeCurrent()  
---  
.NET
long CIMTGatewayAPI.TimeCurrent()  
---  
Return Value
The current trading time of the platform - the number of seconds elapsed since 01.01.1970.
Note
The method returns time taking into account the /timezone and /timecorrect parameters, which are passed [in a command line when the gateway/datafeed is started](mtgatewaycreatelocal.md "MTGatewayCreateLocal"). 
  * When a gateway/datafeed is started by the history server, the values of the /timezone and /timecorrect parameters are set in accordance with time settings on the trade server ([IMTConTime](imtcontime.md "IMTConTime")).
  * When a gateway/datafeed is started as a service (remote gateway), these parameters should be specified by the user. If these parameters are not set, IMTGatewayAPI::TimeCurrent will pass time in the UTC+0 time zone.

In all configurations, databases and logs, the trading time of the platform is used, except where explicitly stated otherwise.