# MessageTemplate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessengerCountry ](imtconmessengercountry.md "IMTConMessengerCountry")/ MessageTemplate | [](imtconmessengercountry_phonecode.md "PhoneCode") [](imtconmessengergroup.md "IMTConMessengerGroup") |
| --- | --- | --- |
| --- | --- |

IMTConMessengerCountry::MessageTemplate
Get a template for sending messages to users from a given country.
C++
LPCWSTR v::MessageTemplate() const  
---  
.NET (Gateway/Manager API)
string CIMTConMessengerCountry.MessageTemplate()  
---  
Python
MTConMessengerCountry.MessageTemplate  
---  
Return Value
If successful, the method returns a pointer to a string with the template. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConMessengerCountry](imtconmessengercountry.md "IMTConMessengerCountry") object.
To use the string after the object removal (after a call of the [IMTConMessengerGroup::Release](imtconmessengercountry_release.md "Release") method of this object), you should create the string copy.
For further details on operations with templates please refer to [MetaTrader 5 Administrator Documentation](https://support.metaquotes.net/en/docs/mt5/platform/administration/integration/integration_messenger#template).
IMTConMessengerCountry::MessageTemplate
Set a template for sending messages to users from a given country.
C++
MTAPIRES IMTConMessengerCountry::MessageTemplate( LPCWSTR msg_template // Template )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessengerCountry.MessageTemplate( srting msg_template // Template )  
---  
Python
MTConMessengerCountry.MessageTemplate  
---  
Parameters
msg_template
[in] Message template.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The name length is limited to 128 characters (including the end-of-line character). If a longer string is assigned, it will be trimmed up to this number of characters.
For further details on operations with templates please refer to [MetaTrader 5 Administrator Documentation](https://support.metaquotes.net/en/docs/mt5/platform/administration/integration/integration_messenger#template).