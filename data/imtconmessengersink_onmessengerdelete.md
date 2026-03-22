# OnMessengerDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessengerSink ](imtconmessengersink.md "IMTConMessengerSink")/ OnMessengerDelete | [](imtconmessengersink_onmessengerupdate.md "OnMessengerUpdate") [](imtconmessengersink_onmessengersync.md "OnMessengerSync") |
| --- | --- | --- |
| --- | --- |

IMTConMessengerSink:OnMessengerDelete
A handler of the messenger configuration deletion event.
C++
virtual void IMTConMessengerSink::OnMessengerDelete( const IMTConMessenger* config // A pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConMessengerSink.OnMessengerDelete( CIMTConMessenger config // Configuration object )  
---  
Parameters
config
A pointer to the object of the deleted configuration.
Note
This method is called by the API to notify of deletion of a messenger configuration.