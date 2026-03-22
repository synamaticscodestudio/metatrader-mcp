# TemplateNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessenger ](imtconmessenger.md "IMTConMessenger")/ TemplateNext | [](imtconmessenger_templatetotal.md "TemplateTotal") [](imtconmessengercountry.md "IMTConMessengerCountry") |
| --- | --- | --- |
| --- | --- |

IMTConMessenger::TemplateNext
Get a message template used by the messenger by its index in the list.
C++
MTAPIRES IMTConMessenger::TemplateNext( const UINT pos, // template position IMTConMessengerTemplate* tpl  // template object ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessenger.TemplateNext( uint pos, // template position CIMTConMessengerTemplate tpl // template object )  
---  
Python
MTConMessenger.TemplateNext( pos # template position )  
---  
MTConMessenger.TemplateGet()  
---  
Parameters
pos
[in] The position of the template in the list, starting from 0.
tpl
[out] Template object. The 'tpl' object must be created in advance using the [IMTServerAPI::MessengerGroupCreate](imtserverapi_messengergroupcreate.md "MessengerGroupCreate") or [IMTAdminAPI::MessengerGroupCreate](imtadminapi_messengergroupcreate.md "MessengerGroupCreate") method.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code is returned.