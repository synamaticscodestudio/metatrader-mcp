# ActionDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutomation ](imtconautomation.md "IMTConAutomation")/ ActionDelete | [](imtconautomation_actionupdate.md "ActionUpdate") [](imtconautomation_actionclear.md "ActionClear") |
| --- | --- | --- |
| --- | --- |

IMTConAutomation::ActionDelete
Delete an automation task [action](https://support.metaquotes.net/en/docs/mt5/platform/administration/automation/automation_action) at the specified position.
C++
MTAPIRES IMTConAutomation::ActionDelete( const UINT pos // Action position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutomation.ActionDelete( uint pos // Action position )  
---  
Python
MTConAutomation.ActionDelete( pos # Action position )  
---  
Parameters
pos
[in] Action position in the list starting at 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.