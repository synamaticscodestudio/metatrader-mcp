# OnEmailSync (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Mail Servers ](config_email.md "Mail Servers") / [ IMTConEmailSink ](imtconemailsink.md "IMTConEmailSink")/ OnEmailSync | [](imtconemailsink_onemaildelete.md "OnEmailDelete") [](config_messenger.md "Messengers") |
| --- | --- | --- |
| --- | --- |

IMTConEmailSink::OnEmailSync
Handler of the synchronization of mail server configurations.
C++
virtual void IMTConEmailSink::OnEmailSync()  
---  
.NET (Gateway/Manager API)
virtual void CIMTConEmailSink.OnEmailSync()  
---  
Note
This method is called by the API to notify of synchronization of mail server configurations.
Synchronization of mail server configurations is carried out on Access, History, Trade and Backup servers during connection to the main server.