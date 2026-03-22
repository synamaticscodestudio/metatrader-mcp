# ActionAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutomation ](imtconautomation.md "IMTConAutomation")/ ActionAdd | [](imtconautomation_conditionnext.md "ConditionNext") [](imtconautomation_actionupdate.md "ActionUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConAutomation::ActionAdd
Add an automation task [action](https://support.metaquotes.net/en/docs/mt5/platform/administration/automation/automation_action).
C++
MTAPIRES IMTConAutomation::ActionAdd( IMTConAutoAction* action // Action object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutomation.ActionAdd( CIMTConAutoAction action // Action object )  
---  
Python
MTConAutomation.ActionAdd( action # Action object )  
---  
Parameters
action
[in] [IMTConAutoAction](imtconautoaction.md "IMTConAutoAction") action object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.