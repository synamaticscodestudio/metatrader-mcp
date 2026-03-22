# Login (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Mail Servers ](config_email.md "Mail Servers") / [ IMTConEmail ](imtconemail.md "IMTConEmail")/ Login | [](imtconemail_server.md "Server") [](imtconemail_password.md "Password") |
| --- | --- | --- |
| --- | --- |

IMTConEmail::Login
Get the SMTP login in the mail server configuration.
C++
LPCWSTR IMTConEmail::Login() const  
---  
.NET (Gateway/Manager API)
string CIMTConEmail.Login()  
---  
Python
MTConEmail.Login  
---  
Return Value
If successful, the method returns a pointer to a string with the SMTP login. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConEmail](imtconemail.md "IMTConEmail") object.
You should create a string copy if you want to use it after the object removal (call of the [IMTConEmail::Release](imtconemail_release.md "Release") method of this object).
IMTConEmail::Login
Set the SMTP login in the mail server configuration.
C++
MTAPIRES IMTConEmail::Login( LPCWSTR login // SMTP login )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConEmail.Login( srting login // SMTP login )  
---  
Python
MTConEmail.Login  
---  
Parameters
login
[in] SMTP login for accessing the account on the mail server.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The maximum login length is 128 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.