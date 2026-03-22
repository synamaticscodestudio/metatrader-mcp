# Flags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Mail Servers ](config_email.md "Mail Servers") / [ IMTConEmail ](imtconemail.md "IMTConEmail")/ Flags | [](imtconemail_password.md "Password") [](imtconemailsink.md "IMTConEmailSink") |
| --- | --- | --- |
| --- | --- |

IMTConEmail::Flags
Get additional mail server settings.
C++
UINT64 IMTConEmail::Flags() const  
---  
.NET (Gateway/Manager API)
EnFlags CIMTConEmail.Flags()  
---  
Python
MTConEmail.Flags  
---  
Return Value
Additional settings as the values of the [IMTConEmail::EnFlags](imtconemail_enum.htm#enflags) enumeration.
IMTConEmail::Mode
Set additional mail server settings.
C++
MTAPIRES IMTConEmail::Flags( const UINT64 flags // Mail server settings )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConEmail.Flags( EnFlags flags // Mail server settings )  
---  
Python
MTConEmail.Flags  
---  
Parameters
flags
[in] Additional settings as the values of the [IMTConEmail::EnFlags](imtconemail_enum.htm#enflags) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.