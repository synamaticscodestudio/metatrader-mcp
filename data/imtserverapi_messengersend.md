# MessengerSend (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Messengers ](serverapi_config_messenger.md "Messengers")/ MessengerSend | [](imtserverapi_messengerverifyphone.md "MessengerVerifyPhone") [](serverapi_config_automation.md "Automations") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::MessengerSend
Send an SMS message.
MTAPIRES IMTServerAPI::MessengerSend( LPCWSTR destination, // Phone number LPCWSTR group, // Group LPCWSTR sender, // Sender LPCWSTR text // Message text )  
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