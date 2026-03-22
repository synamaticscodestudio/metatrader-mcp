# OnEmailUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Mail Servers ](config_email.md "Mail Servers") / [ IMTConEmailSink ](imtconemailsink.md "IMTConEmailSink")/ OnEmailUpdate | [](imtconemailsink_onemailadd.md "OnEmailAdd") [](imtconemailsink_onemaildelete.md "OnEmailDelete") |
| --- | --- | --- |
| --- | --- |

IMTConEmailSink::OnEmailUpdate
Handler of the update of a mail server configuration.
C++
virtual void IMTConEmailSink::OnEmailUpdate( const IMTConEmail* config // A pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConEmailSink.OnEmailUpdate( CIMTConEmail config // Configuration object )  
---  
Parameters
config
[in] A pointer to the updated configuration object.
Note
This method is called by the API to notify that a mail server configuration has been updated.