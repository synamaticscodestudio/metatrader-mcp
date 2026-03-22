# TemplateClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessenger ](imtconmessenger.md "IMTConMessenger")/ TemplateClear | [](imtconmessenger_templatedelete.md "TemplateDelete") [](imtconmessenger_templateshift.md "TemplateShift") |
| --- | --- | --- |
| --- | --- |

IMTConMessenger::TemplateClear
Clear the list of message templates used by the messenger.
C++
MTAPIRES IMTConMessenger::TemplateClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessenger.TemplateClear()  
---  
Python
MTConMessenger.TemplateClear()  
---  
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code is returned.
Note
This method removes from the list all templates used by the messenger.