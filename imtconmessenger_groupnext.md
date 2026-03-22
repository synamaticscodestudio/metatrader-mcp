# GroupNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessenger ](imtconmessenger.md "IMTConMessenger")/ GroupNext | [](imtconmessenger_grouptotal.md "GroupTotal") [](imtconmessenger_templateadd.md "TemplateAdd") |
| --- | --- | --- |
| --- | --- |

IMTConMessenger::GroupNext
Get the group for which the messenger is used, by its index in the list.
C++
MTAPIRES IMTConMessenger::GroupNext( const UINT pos, // Group position IMTConMessengerGroup* group  // Group object ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessenger.GroupNext( uint pos, // Group position CIMTConMessengerGroup group // Group object )  
---  
Python
MTConMessenger.GroupNext( pos # Group position )  
---  
MTConMessenger.GroupGet()  
---  
Parameters
pos
[in] Position of the group in the list, starting with 0.
group
[out] Group object. The 'group' object must be previously created via the [IMTServerAPI::MessengerGroupCreate](imtserverapi_messengergroupcreate.md "MessengerGroupCreate") or [IMTAdminAPI::MessengerGroupCreate](imtadminapi_messengergroupcreate.md "MessengerGroupCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.