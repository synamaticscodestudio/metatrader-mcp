# ProviderAddress (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessenger ](imtconmessenger.md "IMTConMessenger")/ ProviderAddress | [](imtconmessenger_providertype.md "ProviderType") [](imtconmessenger_providerlogin.md "ProviderLogin") |
| --- | --- | --- |
| --- | --- |

IMTConMessenger::ProviderAddress
Get the messaging service provider's server address from a messenger configuration.
C++
LPCWSTR IMTConMessenger::ProviderAddress() const  
---  
.NET (Gateway/Manager API)
string CIMTConMessenger.ProviderAddress()  
---  
Python
MTConMessenger.ProviderAddress  
---  
Return Value
If successful, it returns a pointer to a string with the server address. Otherwise, NULL is returned.
Note
The availability (the need to fill) of this parameter depends on the selected messaging service provider ([IMTConMessenger::ProviderType](imtconmessenger_providertype.md "ProviderType")). Please contact the provider for details.
The pointer to the resulting string is valid for the lifetime of the [IMTConMessenger](imtconmessenger.md "IMTConMessenger") object.
You should create a string copy if you want to use it after the object removal (call of the [IMTConMessenger::Release](imtconmessenger_release.md "Release") method of this object).
IMTConMessenger::ProviderAddress
Set the messaging service provider's server address in a messenger configuration.
C++
MTAPIRES IMTConMessenger::ProviderAddress( LPCWSTR address // Server address )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessenger.ProviderAddress( srting address // Server address )  
---  
Python
MTConMessenger.ProviderAddress  
---  
Parameters
name
[in] Provider's server address.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The availability (the need to fill) of this parameter depends on the selected messaging service provider ([IMTConMessenger::ProviderType](imtconmessenger_providertype.md "ProviderType")). Please contact the provider for details.
The maximum address length is 128 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.