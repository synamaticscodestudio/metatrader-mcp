# Password (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Mail Servers ](config_email.md "Mail Servers") / [ IMTConEmail ](imtconemail.md "IMTConEmail")/ Password | [](imtconemail_login.md "Login") [](imtconemail_flags.md "Flags") |
| --- | --- | --- |
| --- | --- |

IMTConEmail::Password
Get the SMTP password in the mail server configuration.
C++
LPCWSTR IMTConEmail::Password() const  
---  
.NET (Gateway/Manager API)
string CIMTConEmail.Password()  
---  
Python
MTConEmail.Password  
---  
Return Value
If successful, the method returns a pointer to a string with the SMTP password. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConEmail](imtconemail.md "IMTConEmail") object.
You should create a string copy if you want to use it after the object removal (call of the [IMTConEmail::Release](imtconemail_release.md "Release") method of this object).
IMTConEmail::Password
Set the SMTP password in the mail server configuration.
C++
MTAPIRES IMTConEmail::Password( LPCWSTR server // SMTP password )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConEmail.Password( srting server // SMTP password )  
---  
Python
MTConEmail.Password  
---  
Parameters
name
[in] SMTP password for accessing the account on the mail server.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The maximum password length is 128 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.