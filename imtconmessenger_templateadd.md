# TemplateAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessenger ](imtconmessenger.md "IMTConMessenger")/ TemplateAdd | [](imtconmessenger_groupnext.md "GroupNext") [](imtconmessenger_templateupdate.md "TemplateUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConMessenger::TemplateAdd
Add a message template that the messenger will use.
C++
MTAPIRES IMTConMessenger::TemplateAdd( IMTConMessengerTemplate* tpl // template object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessenger.TemplateAdd( CIMTConMessengerTemplate tpl // template object )  
---  
Python
MTConMessenger.GroupAdd( tpl  # template object )  
---  
Parameters
group
[in] Template object [IMTConMessengerTemplate](imtconmessengertemplate.md "IMTConMessengerTemplate").
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code is returned.