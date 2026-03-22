# OnTimeSync (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Time ](config_time.md "Time") / [ IMTConTimeSink ](imtcontimesink.md "IMTConTimeSink")/ OnTimeSync | [](imtcontimesink_ontimeupdate.md "OnTimeUpdate") [](config_holiday.md "Holidays") |
| --- | --- | --- |
| --- | --- |

IMTConTimeSink::OnTimeSync
A handler of the event of synchronization of the platform time settings.
C++
virtual void IMTConTimeSink::OnTimeSync()  
---  
.NET (Gateway/Manager API)
virtual void CIMTConTimeSink.OnTimeSync()  
---  
Note
This method is called by the API to notify of the platform time settings synchronization.
Synchronization of time settings is performed on Access, History, Trade and Backup servers during connection to the main server.