# ProviderLogin (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessenger ](imtconmessenger.md "IMTConMessenger")/ ProviderLogin | [](imtconmessenger_provideraddress.md "ProviderAddress") [](imtconmessenger_providerpassword.md "ProviderPassword") |
| --- | --- | --- |
| --- | --- |

IMTConMessenger::ProviderLogin
Get the login of the account which is used for sending messages via the messenger.
C++
LPCWSTR IMTConMessenger::ProviderLogin() const  
---  
.NET (Gateway/Manager API)
string CIMTConMessenger.ProviderLogin()  
---  
Python
MTConMessenger.ProviderLogin  
---  
Return Value
If successful, the method returns a pointer to a string with the login. Otherwise, NULL is returned.
Note
The availability (the need to fill) of this parameter depends on the selected messaging service provider ([IMTConMessenger::ProviderType](imtconmessenger_providertype.md "ProviderType")). Please contact the provider for details.
The pointer to the resulting string is valid for the lifetime of the [IMTConMessenger](imtconmessenger.md "IMTConMessenger") object.
You should create a string copy if you want to use it after the object removal (call of the [IMTConMessenger::Release](imtconmessenger_release.md "Release") method of this object).
IMTConMessenger::ProviderLogin
Set the login of the account which is used for sending messages via the messenger.
C++
MTAPIRES IMTConMessenger::ProviderLogin( LPCWSTR login // Login )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessenger.ProviderLogin( srting login // Login )  
---  
Python
MTConMessenger.ProviderLogin  
---  
Parameters
name
[in] The login of the account which is used for sending messages via the messenger.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The availability (the need to fill) of this parameter depends on the selected messaging service provider ([IMTConMessenger::ProviderType](imtconmessenger_providertype.md "ProviderType")). Please contact the provider for details.
The maximum login length is 128 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.