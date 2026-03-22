# IMTConMessengerTemplate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers")/ IMTConMessengerTemplate | [](imtconmessengergroup_group.md "Group") [](imtconmessengertemplate_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTConMessengerTemplate
The IMTConMessengerTemplate class contains methods for getting and setting template settings in messengers:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtconmessengertemplate_release.md "Release") | Delete the current object. |
| [Assign](imtconmessengertemplate_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtconmessengertemplate_clear.md "Clear") | Clear an object. |
| [Type](imtconmessengertemplate_type.md "Type") | Get and set the template type. |
| [Id](imtconmessengertemplate_id.md "Group") | Get and set the message template identifier on the provider side. |

Some SMS providers, for example, [Surfman](https://support.metaquotes.net/ru/docs/mt5/platform/administration/integration/integration_sms/surfman), do not allow sending messages in free format. All messages must follow a strict format, and their content must be pre-approved. In this case, instead of using a free-form message template ([IMTConMessenger::MessageTemplate](imtconmessenger_messagetemplate.md "MessageTemplate")), the messenger settings specify a list of events and their corresponding templates created on the provider side:
  * For each use case of SMS confirmations in the platform (such as phone verification or payment status updates), you create a template in your provider's personal account. Each template is assigned a unique identifier.
  * On the platform side, you select [event types](imtconmessengertemplate_type.md "Type") and assign them the template identifiers obtained from the provider.

This way the platform will know which provider templates to use for each SMS notification on the MetaTrader 5 side.
If a template is not assigned to a specific action, the corresponding messages will not be sent. If you enable the provider for payment status notifications, ensure that the appropriate templates are configured on the provider's side.  
---