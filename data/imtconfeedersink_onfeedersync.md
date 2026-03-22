# OnFeederSync (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeederSink ](imtconfeedersink.md "IMTConFeederSink")/ OnFeederSync | [](imtconfeedersink_onfeederdelete.md "OnFeederDelete") [](config_time.md "Time") |
| --- | --- | --- |
| --- | --- |

IMTConFeederSink::OnFeederSync
A handler of the event of synchronization of a data feed configuration.
C++
virtual void IMTConFeederSink::OnFeederSync()  
---  
.NET (Gateway/Manager API)
virtual void CIMTConFeederSink.OnFeederSync()  
---  
Note
This method is called by the API to notify of synchronization of data feed configuration.
Data feed configuration synchronization is performed on Access, History, Trade and Backup servers during connection to the main server.