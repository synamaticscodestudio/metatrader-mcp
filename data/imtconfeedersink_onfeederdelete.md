# OnFeederDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeederSink ](imtconfeedersink.md "IMTConFeederSink")/ OnFeederDelete | [](imtconfeedersink_onfeederupdate.md "OnFeederUpdate") [](imtconfeedersink_onfeedersync.md "OnFeederSync") |
| --- | --- | --- |
| --- | --- |

IMTConFeederSink::OnFeederDelete
A handler of the event of removing a data feed configuration.
C++
virtual void IMTConFeederSink::OnFeederDelete( const IMTConFeeder* feeder // Pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConFeederSink.OnFeederDelete( CIMTConFeeder feeder // Configuration object )  
---  
Parameters
feeder
[in] A pointer to the object of the deleted configuration.
Note
This method is called by the API to notify that a data feed configuration has been deleted.