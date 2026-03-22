# GroupShift (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessenger ](imtconmessenger.md "IMTConMessenger")/ GroupShift | [](imtconmessenger_groupclear.md "GroupClear") [](imtconmessenger_grouptotal.md "GroupTotal") |
| --- | --- | --- |
| --- | --- |

IMTConMessenger::GroupShift
Shift a group in the messenger settings.
C++
MTAPIRES IMTConMessenger::GroupShift( const UINT pos, // Group position const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessenger.GroupShift( uint pos, // Group position int  shift // Shift )  
---  
Python
MTConMessenger.GroupShift( pos, # Group position shift # Shift )  
---  
Parameters
pos
[in] Position of the group in the list, starting with 0.
shift
[in] The shift of the group relative to its current position. A negative value means shift towards the top of the list, a positive value shifts towards the end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.