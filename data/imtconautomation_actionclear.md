# ActionClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutomation ](imtconautomation.md "IMTConAutomation")/ ActionClear | [](imtconautomation_actiondelete.md "ActionDelete") [](imtconautomation_actionshift.md "ActionShift") |
| --- | --- | --- |
| --- | --- |

IMTConAutomation::ActionClear
Clear the list of all automation task [actions](https://support.metaquotes.net/en/docs/mt5/platform/administration/automation/automation_action).
C++
MTAPIRES IMTConAutomation::ActionClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutomation.ActionClear()  
---  
Python
MTConAutomation.ActionClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method deletes all actions of an automation task.