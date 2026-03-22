# ActionNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutomation ](imtconautomation.md "IMTConAutomation")/ ActionNext | [](imtconautomation_actiontotal.md "ActionTotal") [](imtconautocondition.md "IMTConAutoCondition") |
| --- | --- | --- |
| --- | --- |

IMTConAutomation::ActionNext
Get an automation task [action](https://support.metaquotes.net/en/docs/mt5/platform/administration/automation/automation_action) by index.
C++
MTAPIRES IMTConAutomation::ActionNext( const UINT pos, // Action position IMTConAutoAction* action // Action object ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutomation.ActionNext( uint pos, // Action position CIMTConAutoAction action // Action object )  
---  
Python
MTConAutomation.ActionNext( pos # Action position )  
---  
MTConAutomation.ActionGet()  
---  
Parameters
pos
[in] Action position in the list starting at 0.
action
[out] [IMTConAutoAction](imtconautoaction.md "IMTConAutoAction") action object. The 'action' object must be previously created using the [IMTServerAPI::AutomationActionCreate](imtserverapi_automationactioncreate.md "AutomationActionCreate") or [IMTAdminAPI::AutomationActionCreate](imtadminapi_automationactioncreate.md "AutomationActionCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.