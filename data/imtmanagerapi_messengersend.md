# MessengerSend (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Users ](imtmanagerapi_user.md "User Functions")/ MessengerSend | [](imtmanagerapi_messengerverifyphone.md "MessengerVerifyPhone") [](imtmanagerapi_online.md "Online Connection Functions") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::MessengerSend
Send an SMS message.
C++
MTAPIRES IMTManagerAPI::MessengerSend( LPCWSTR destination, // Phone number LPCWSTR group, // Group LPCWSTR sender, // Sender LPCWSTR text // Message text )  
---  
.NET
MTRetCode CIMTManagerAPI.MessengerSend( string destination, // Phone number string group, // Group string sender, // Sender string text // Message text )  
---  
Python
ManagerAPI.MessengerSend( destination, # Phone number group, # Group sender, # Sender text # Message text )  
---  
Program Parameters
destination
[in] Recipient's phone number in the format +[country code][number], for example: +74951113594. The number is indicated without spaces.
group
[in] Here you can specify the group to which the message recipient's account belongs. In this case, the platform will send the message through the first provider, in whose [settings](https://support.metaquotes.net/en/docs/mt5/platform/administration/integration#group) the specified group is found. The parameter is optional: is NULL is specified, the provider will be selected without regard to the group.
sender
[in] The name of the message sender. It is only used if the appropriate function is supported by the provider. This parameter is optional (NULL can be passed).
text
[in] The text of the notification. The maximum allowable length depends on the provider.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Code [MT_RET_MESSENGER_INVALID_PHONE](retcodes_messenger.md "Messengers") means that the specified phone number is invalid.
Code [MT_RET_MESSENGER_NOT_MOBILE](retcodes_messenger.md "Messengers") means that a landline phone number is specified instead of a mobile phone number.
Note
The [MT_RET_OK](retcodes_successful.md "Successful completion") does not indicate the successful message delivery.
To be able to send emails, the platform must have pre-configured integration with [messengers](config_messenger.md "Messengers").