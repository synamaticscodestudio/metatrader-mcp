# TimeSet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Time ](imtadminapi_config_time.md "Functions")/ TimeSet | [](imtadminapi_timeget.md "TimeGet") [](imtadminapi_timeserver.md "TimeServer") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::TimeSet
Set the time configuration.
C++
MTAPIRES IMTAdminAPI::TimeSet( const IMTConTime* config // An object of time configuration )  
---  
.NET
MTRetCode CIMTAdminAPI.TimeSet( CIMTConTime config // An object of time configuration )  
---  
Python
AdminAPI.TimeSet( config # An object of time configuration )  
---  
Parameters
config
[in] An object of time configuration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.