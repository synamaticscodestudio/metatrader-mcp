# OnEmailDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Mail Servers ](config_email.md "Mail Servers") / [ IMTConEmailSink ](imtconemailsink.md "IMTConEmailSink")/ OnEmailDelete | [](imtconemailsink_onemailupdate.md "OnEmailUpdate") [](imtconemailsink_onemailsync.md "OnEmailSync") |
| --- | --- | --- |
| --- | --- |

OnEmailDelete
Handler of the deletion of a mail server configuration.
C++
virtual void IMTConEmailSink::OnEmailDelete( const IMTConEmail* config // A pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConEmailSink.OnEmailDelete( CIMTConEmail config // Configuration object )  
---  
Parameters
config
A pointer to the object of the deleted configuration.
Note
This method is called by the API to notify of deletion of a mail server configuration.