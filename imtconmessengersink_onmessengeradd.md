# OnMessengerAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessengerSink ](imtconmessengersink.md "IMTConMessengerSink")/ OnMessengerAdd | [](imtconmessengersink.md "IMTConMessengerSink") [](imtconmessengersink_onmessengerupdate.md "OnMessengerUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConMessengerSink::OnMessengerAdd
A handler of the the addition of a new messenger configuration.
C++
virtual void IMTConMessengerSink::OnMessengerAdd( const IMTConMessenger* config // A pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConMessengerSink.OnMessengerAdd( CIMTConMessenger config // Configuration object )  
---  
Parameters
config
[in] A pointer to the object of the added configuration.
Note
This method is called by the API to notify of adding of a new messenger configuration.