# TimeGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Time ](imtmanagerapi_config_time.md "Time")/ TimeGet | [](imtmanagerapi_timeunsubscribe.md "TimeUnsubscribe") [](imtmanagerapi_timeserver.md "TimeServer") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::TimeGet
Get the time configuration.
C++
MTAPIRES IMTManagerAPI::TimeGet( IMTConTime* config // An object of time configuration )  
---  
.NET
MTRetCode CIMTManagerAPI.TimeGet( CIMTConTime config // An object of time configuration )  
---  
Python
ManagerAPI.TimeGet()  
---  
Parameters
config
[out] An object of the time configuration. The config object must first be created using the [IMTManagerAPI::TimeCreate](imtmanagerapi_timecreate.md "TimeCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method is valid only if the [IMTManagerAPI::PUMP_MODE_TIME](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode was specified during connection.