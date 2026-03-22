# ConditionDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutomation ](imtconautomation.md "IMTConAutomation")/ ConditionDelete | [](imtconautomation_conditionupdate.md "ConditionUpdate") [](imtconautomation_conditionclear.md "ConditionClear") |
| --- | --- | --- |
| --- | --- |

IMTConAutomation::ConditionDelete
Delete an automation task triggering [condition](https://support.metaquotes.net/en/docs/mt5/platform/administration/automation/automation_condition) at the specified position.
C++
MTAPIRES IMTConAutomation::ConditionDelete( const UINT pos // Condition position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutomation.ConditionDelete( uint pos // Condition position )  
---  
Python
MTConAutomation.ConditionDelete( pos # Condition position )  
---  
Parameters
pos
[in] Position of a condition in the list, starting at 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.