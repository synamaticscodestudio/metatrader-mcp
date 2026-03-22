# Type (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessengerTemplate ](imtconmessengertemplate.md "IMTConMessengerTemplate")/ Type | [](imtconmessengertemplate_clear.md "Clear") [](imtconmessengertemplate_id.md "Group") |
| --- | --- | --- |
| --- | --- |

IMTConMessengerTemplate::Type
Get the template type.
C++
uint32_t IMTConMessengerTemplate::Type() const  
---  
.NET (Gateway/Manager API)
EnMessengerTemplateTypes CIMTConMessengerTemplate.Type()  
---  
Python
MTConMessengerTemplate.Type  
---  
Return Value
Messaging service provider. Passed by [IMTConMessengerTemplate::EnMessengerTemplateTypes](imtconmessengertemplate_enum.htm#enmessengertemplatetypes) enumeration value.
IMTConMessenger::Type
Set the template type.
C++
MTAPIRES IMTConMessengerTemplate::Type( const uint32_t type // template type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessengerTemplate.Type( EnMessengerTemplateTypes type // template type )  
---  
Python
MTConMessengerTemplate.Type  
---  
Parameters
type
[in] Тип шаблона сообщений. Passed by [IMTConMessengerTemplate::EnMessengerTemplateTypes](imtconmessengertemplate_enum.htm#enmessengertemplatetypes) enumeration value.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code is returned.