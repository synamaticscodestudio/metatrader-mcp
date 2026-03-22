# Server (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Mail Servers ](config_email.md "Mail Servers") / [ IMTConEmail ](imtconemail.md "IMTConEmail")/ Server | [](imtconemail_sendername.md "SenderName") [](imtconemail_login.md "Login") |
| --- | --- | --- |
| --- | --- |

IMTConEmail::Server
Get the SMTP server address in the mail server configuration.
C++
LPCWSTR IMTConEmail::Server() const  
---  
.NET (Gateway/Manager API)
string CIMTConEmail.Server()  
---  
Python
MTConEmail.Server  
---  
Return Value
If successful, it returns a pointer to a string with the SMTP server address. Otherwise, NULL is returned.
Note
The address includes a port for connection, separated by a colon.
The pointer to the resulting string is valid for the lifetime of the [IMTConEmail](imtconemail.md "IMTConEmail") object.
You should create a string copy if you want to use it after the object removal (call of the [IMTConEmail::Release](imtconemail_release.md "Release") method of this object).
IMTConEmail::Server
Set the SMTP server address in the mail server configuration.
C++
MTAPIRES IMTConEmail::Server( LPCWSTR server // SMTP server )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConEmail.Server( srting server // SMTP server )  
---  
Python
MTConEmail.Server  
---  
Parameters
name
[in] The SMTP server address and port for connection separated by a colon.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The maximum address length is 128 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.