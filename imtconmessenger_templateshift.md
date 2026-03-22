# TemplateShift (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessenger ](imtconmessenger.md "IMTConMessenger")/ TemplateShift | [](imtconmessenger_templateclear.md "TemplateClear") [](imtconmessenger_templatetotal.md "TemplateTotal") |
| --- | --- | --- |
| --- | --- |

IMTConMessenger::TemplateShift
Move the message template in the messenger settings.
C++
MTAPIRES IMTConMessenger::TemplateShift( const UINT pos, // template position const int shift // shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessenger.TemplateShift( uint pos, // template position int  shift // shift )  
---  
Python
MTConMessenger.TemplateShift( pos, # template position shift # shift )  
---  
Parameters
pos
[in] The position of the template in the list, starting from 0.
shift
[in] The shift of the template relative to its current position. A negative value indicates a shift towards the beginning of the list, while a positive value indicates a shift towards the end.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code is returned.