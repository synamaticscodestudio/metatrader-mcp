# TemplateUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessenger ](imtconmessenger.md "IMTConMessenger")/ TemplateUpdate | [](imtconmessenger_templateadd.md "TemplateAdd") [](imtconmessenger_templatedelete.md "TemplateDelete") |
| --- | --- | --- |
| --- | --- |

IMTConMessenger::TemplateUpdate
Edit the message template used by the messenger.
C++
MTAPIRES IMTConMessenger::TemplateUpdate( const uint32_t pos, // template position const IMTConMessengerTemplate* tpl // template object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessenger.TemplateUpdate( uint pos, // template position CIMTConMessengerTemplate tpl // template object )  
---  
Python
MTConMessenger.TemplateUpdate( pos, # template position tpl # template object )  
---  
MTConMessenger.TemplateSet( tpl_list  # list of templates )  
---  
Parameters
pos
[in] The position of the template in the list, starting from 0.
tpl
[in] Template object [IMTConMessengerTemplate](imtconmessengertemplate.md "IMTConMessengerTemplate").
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code is returned.