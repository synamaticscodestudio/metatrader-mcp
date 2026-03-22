# OnTimeUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Time ](config_time.md "Time") / [ IMTConTimeSink ](imtcontimesink.md "IMTConTimeSink")/ OnTimeUpdate | [](imtcontimesink.md "IMTConTimeSink") [](imtcontimesink_ontimesync.md "OnTimeSync") |
| --- | --- | --- |
| --- | --- |

IMTConTimeSink::OnTimeUpdate
A handler of the event of update of the platform time settings.
C++
virtual void IMTConTimeSink::OnTimeUpdate( const IMTConTime* config // An object of the settings )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConTimeSink.OnTimeUpdate( CIMTConTime config // An object of the settings )  
---  
Parameters
config
[in] A pointer to the updated object of settings.
Note
This method is called by the API to notify of the platform time settings update.