# ProviderPassword (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessenger ](imtconmessenger.md "IMTConMessenger")/ ProviderPassword | [](imtconmessenger_providerlogin.md "ProviderLogin") [](imtconmessenger_providertoken.md "ProviderToken") |
| --- | --- | --- |
| --- | --- |

IMTConMessenger::ProviderPassword
Get the password of the account which is used for sending messages via the messenger.
C++
LPCWSTR IMTConMessenger::ProviderPassword() const  
---  
.NET (Gateway/Manager API)
string CIMTConMessenger.ProviderPassword()  
---  
Python
MTConMessenger.ProviderPassword  
---  
Return Value
If successful, the method returns a pointer to a string with the password. Otherwise, NULL is returned.
Note
The availability (the need to fill) of this parameter depends on the selected messaging service provider ([IMTConMessenger::ProviderType](imtconmessenger_providertype.md "ProviderType")). Please contact the provider for details.
The pointer to the resulting string is valid for the lifetime of the [IMTConMessenger](imtconmessenger.md "IMTConMessenger") object.
You should create a string copy if you want to use it after the object removal (call of the [IMTConMessenger::Release](imtconmessenger_release.md "Release") method of this object).
IMTConMessenger::ProviderPassword
Set the password of the account which is used for sending messages via the messenger.
C++
MTAPIRES IMTConMessenger::ProviderPassword( LPCWSTR password // Password )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessenger.ProviderPassword( srting password // Password )  
---  
Python
MTConMessenger.ProviderPassword  
---  
Parameters
password
[in] The password of the account which is used for sending messages via the messenger.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The availability (the need to fill) of this parameter depends on the selected messaging service provider ([IMTConMessenger::ProviderType](imtconmessenger_providertype.md "ProviderType")). Please contact the provider for details.
The maximum password length is 128 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.