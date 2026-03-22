# PhoneCode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessengerCountry ](imtconmessengercountry.md "IMTConMessengerCountry")/ PhoneCode | [](imtconmessengercountry_clear.md "Clear") [](imtconmessengercountry_messagetemplate.md "MessageTemplate") |
| --- | --- | --- |
| --- | --- |

IMTConMessengerCountry::PhoneCode
Get a country calling code.
C++
LPCWSTR IMTConMessengerCountry::PhoneCode() const  
---  
.NET (Gateway/Manager API)
string CIMTConMessengerCountry.PhoneCode()  
---  
Python
MTConMessengerCountry.PhoneCode  
---  
Return Value
If successful, the method returns a pointer to a string with the calling code. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConMessengerCountry](imtconmessengercountry.md "IMTConMessengerCountry") object.
To use the string after the object removal (after a call of the [IMTConMessengerGroup::Release](imtconmessengercountry_release.md "Release") method of this object), you should create the string copy.
IMTConMessengerCountry::PhoneCode
Set the country calling code.
C++
MTAPIRES IMTConMessengerCountry::PhoneCode( LPCWSTR code // Country code )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessengerCountry.PhoneCode( srting code // Country code )  
---  
Python
MTConMessengerCountry.PhoneCode  
---  
Parameters
code
[in] Country calling code, including the "+" sign.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.