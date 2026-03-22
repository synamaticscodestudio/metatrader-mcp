# ActionShift (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutomation ](imtconautomation.md "IMTConAutomation")/ ActionShift | [](imtconautomation_actionclear.md "ActionClear") [](imtconautomation_actiontotal.md "ActionTotal") |
| --- | --- | --- |
| --- | --- |

IMTConAutomation::ActionShift
Move an automation task [action](https://support.metaquotes.net/en/docs/mt5/platform/administration/automation/automation_action) in the list.
C++
MTAPIRES IMTConAutomation::ActionShift( const UINT pos, // Action position const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutomation.ActionShift( uint pos, // Action position int  shift // Shift )  
---  
Python
MTConAutomation.ActionShift( pos, # Action position shift # Shift )  
---  
Parameters
pos
[in] Action position in the list starting at 0.
shift
[in] The shift of the action relative to its current position. A negative value means shift to the top of the list, a positive value - to its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.