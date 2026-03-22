# MessageTemplate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessenger ](imtconmessenger.md "IMTConMessenger")/ MessageTemplate | [](imtconmessenger_flags.md "Flags") [](imtconmessenger_countryadd.md "CountryAdd") |
| --- | --- | --- |
| --- | --- |

IMTConMessenger::MessageTemplate
Get a basic template for sending messages via this provider.
C++
LPCWSTR IMTConMessenger::MessageTemplate() const  
---  
.NET (Gateway/Manager API)
string CIMTConMessenger.MessageTemplate()  
---  
Python
MTConMessenger.MessageTemplate  
---  
Return Value
If successful, the method returns a pointer to a string with the template. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConMessenger](imtconmessenger.md "IMTConMessenger") object.
To use the string after the object removal (after a call of the [IMTConMessenger::Release](imtconmessenger_release.md "Release") method of this object), you should create the string copy.
For further details on operations with templates please refer to [MetaTrader 5 Administrator Documentation](https://support.metaquotes.net/en/docs/mt5/platform/administration/integration/integration_messenger#template).
IMTConMessenger::MessageTemplate
Set a basic template for sending messages via this provider.
C++
MTAPIRES IMTConMessenger::MessageTemplate( LPCWSTR msg_template // Template )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessenger.MessageTemplate( srting msg_template // Template )  
---  
Python
MTConMessenger.MessageTemplate  
---  
Parameters
msg_template
[in] Message template.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The name length is limited to 128 characters (including the end-of-line character). If a longer string is assigned, it will be trimmed up to this number of characters.
For further details on operations with templates please refer to [MetaTrader 5 Administrator Documentation](https://support.metaquotes.net/en/docs/mt5/platform/administration/integration/integration_messenger#template).