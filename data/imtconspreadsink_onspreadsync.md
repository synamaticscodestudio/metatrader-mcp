# OnSpreadSync (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Spreads ](config_spread.md "Spreads") / [ IMTConSpreadSink ](imtconspreadsink.md "IMTConSpreadSink")/ OnSpreadSync | [](imtconspreadsink_onspreaddelete.md "OnSpreadDelete") [](config_group.md "Groups") |
| --- | --- | --- |
| --- | --- |

IMTConSpreadSink::OnSpreadSync
A handler of the event of synchronization of spread configurations.
C++
virtual void IMTConSpreadSink::OnSpreadSync()  
---  
.NET (Gateway/Manager API)
virtual void CIMTConSpreadSink.OnSpreadSync()  
---  
Note
This method is called by the API to notify of synchronization of spread configurations.
Synchronization of spread settings is performed on Access, History, Trade and Backup servers during connection to the main server.