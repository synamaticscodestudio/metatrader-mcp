# OnMessengerUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessengerSink ](imtconmessengersink.md "IMTConMessengerSink")/ OnMessengerUpdate | [](imtconmessengersink_onmessengeradd.md "OnMessengerAdd") [](imtconmessengersink_onmessengerdelete.md "OnMessengerDelete") |
| --- | --- | --- |
| --- | --- |

IMTConMessengerSink::OnMessengerUpdate
A handler of the messenger configuration update event.
C++
virtual void IMTConMessengerSink::OnMessengerUpdate( const IMTConMessenger* config // A pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConMessengerSink.OnMessengerUpdate( CIMTConMessenger config // Configuration object )  
---  
Parameters
config
[in] A pointer to the updated configuration object.
Note
This method is called by the API to notify that a messenger configuration has been updated.