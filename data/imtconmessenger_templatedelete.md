# TemplateDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessenger ](imtconmessenger.md "IMTConMessenger")/ TemplateDelete | [](imtconmessenger_templateupdate.md "TemplateUpdate") [](imtconmessenger_templateclear.md "TemplateClear") |
| --- | --- | --- |
| --- | --- |

IMTConMessenger::TemplateDelete
Delete the group of accounts for which the messenger is used.
C++
MTAPIRES IMTConMessenger::TemplateDelete( const UINT pos // template position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessenger.TemplateDelete( uint pos // template position )  
---  
Python
MTConMessenger.TemplateDelete( pos # template position )  
---  
Parameters
pos
[in] The position of the template in the list, starting from 0.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code is returned.