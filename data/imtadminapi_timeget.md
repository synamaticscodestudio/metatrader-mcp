# TimeGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Time ](imtadminapi_config_time.md "Functions")/ TimeGet | [](imtadminapi_timeunsubscribe.md "TimeUnsubscribe") [](imtadminapi_timeset.md "TimeSet") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::TimeGet
Get the time configuration.
C++
MTAPIRES IMTAdminAPI::TimeGet( IMTConTime* config // An object of time configuration )  
---  
.NET
MTRetCode CIMTAdminAPI.TimeGet( CIMTConTime config // An object of time configuration )  
---  
Python
AdminAPI.TimeGet()  
---  
Parameters
config
[out] An object of the time configuration. The config object must first be created using the [IMTAdminAPI::TimeCreate](imtadminapi_timecreate.md "TimeCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.