# GroupDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessenger ](imtconmessenger.md "IMTConMessenger")/ GroupDelete | [](imtconmessenger_groupupdate.md "GroupUpdate") [](imtconmessenger_groupclear.md "GroupClear") |
| --- | --- | --- |
| --- | --- |

IMTConMessenger::GroupDelete
Delete the group of accounts for which the messenger is used.
C++
MTAPIRES IMTConMessenger::GroupDelete( const UINT pos // Group position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessenger.GroupDelete( uint pos // Group position )  
---  
Python
MTConMessenger.GroupDelete( pos # Group position )  
---  
Parameters
pos
[in] Position of the group in the list, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.