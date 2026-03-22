# ProviderToken (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessenger ](imtconmessenger.md "IMTConMessenger")/ ProviderToken | [](imtconmessenger_providerpassword.md "ProviderPassword") [](imtconmessenger_providersubod.md "ProviderSubId") |
| --- | --- | --- |
| --- | --- |

IMTConMessenger::ProviderToken
Get the authentication token, which is used for sending messages via the messenger.
C++
LPCWSTR IMTConMessenger::ProviderToken() const  
---  
.NET (Gateway/Manager API)
string CIMTConMessenger.ProviderToken()  
---  
Python
MTConMessenger.ProviderToken  
---  
Return Value
If successful, the method returns a pointer to a string with the token. Otherwise, NULL is returned.
Note
The availability (the need to fill) of this parameter depends on the selected messaging service provider ([IMTConMessenger::ProviderType](imtconmessenger_providertype.md "ProviderType")). Please contact the provider for details.
The pointer to the resulting string is valid for the lifetime of the [IMTConMessenger](imtconmessenger.md "IMTConMessenger") object.
You should create a string copy if you want to use it after the object removal (call of the [IMTConMessenger::Release](imtconmessenger_release.md "Release") method of this object).
IMTConMessenger::ProviderToken
Set the authentication token, which is used for sending messages via the messenger.
C++
MTAPIRES IMTConMessenger::ProviderToken( LPCWSTR token // Authentication token )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessenger.ProviderToken( srting token // Authentication token )  
---  
Python
MTConMessenger.ProviderToken  
---  
Parameters
token
[in] The authentication token, which is used for sending messages via the messenger.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The availability (the need to fill) of this parameter depends on the selected messaging service provider ([IMTConMessenger::ProviderType](imtconmessenger_providertype.md "ProviderType")). Please contact the provider for details.
The maximum token length is 128 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.