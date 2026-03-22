# OnMessengerSync (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessengerSink ](imtconmessengersink.md "IMTConMessengerSink")/ OnMessengerSync | [](imtconmessengersink_onmessengerdelete.md "OnMessengerDelete") [](config_automation.md "Automations") |
| --- | --- | --- |
| --- | --- |

IMTConMessengerSink::OnMessengerSync
A handler of the messenger configuration synchronization event.
C++
virtual void IMTConMessengerSink::OnMessengerSync()  
---  
.NET (Gateway/Manager API)
virtual void CIMTConMessengerSink.OnMessengerSync()  
---  
Note
This method is called by the API to notify of synchronization of messenger configurations.
Synchronization of the messenger configurations is performed on access, history, trade and backup servers when connecting to the main server.