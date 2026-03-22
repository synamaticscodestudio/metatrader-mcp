# SenderName (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Mail Servers ](config_email.md "Mail Servers") / [ IMTConEmail ](imtconemail.md "IMTConEmail")/ SenderName | [](imtconemail_sendermail.md "SenderMail") [](imtconemail_server.md "Server") |
| --- | --- | --- |
| --- | --- |

IMTConEmail::SenderName
Get the email sender's name in the mail server configuration.
C++
LPCWSTR IMTConEmail::SenderName() const  
---  
.NET (Gateway/Manager API)
string CIMTConEmail.SenderName()  
---  
Python
MTConEmail.SenderName  
---  
Return Value
If successful, the method returns a pointer to a string with the sender's name. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConEmail](imtconemail.md "IMTConEmail") object.
You should create a string copy if you want to use it after the object removal (call of the [IMTConEmail::Release](imtconemail_release.md "Release") method of this object).
IMTConEmail::SenderName
Set the email sender's name in the mail server configuration.
C++
MTAPIRES IMTConEmail::SenderName( LPCWSTR name // Sender's name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConEmail.SenderName( srting name // Sender's name )  
---  
Python
MTConEmail.SenderName  
---  
Parameters
name
[in] Email sender name.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The maximum name length is 128 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.