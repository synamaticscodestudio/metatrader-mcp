# ConditionAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutomation ](imtconautomation.md "IMTConAutomation")/ ConditionAdd | [](imtconautomation_eventrepeats.md "EventRepeats") [](imtconautomation_conditionupdate.md "ConditionUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConAutomation::ConditionAdd
Add an automation task triggering [condition](https://support.metaquotes.net/en/docs/mt5/platform/administration/automation/automation_condition).
C++
MTAPIRES IMTConAutomation::ConditionAdd( IMTConAutoCondition* condition // Condition object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutomation.ConditionAdd( CIMTConAutoCondition condition // Condition object )  
---  
Python
MTConAutomation.ConditionAdd( condition # Condition object )  
---  
Parameters
condition
[in] [IMTConAutoCondition](imtconautocondition.md "IMTConAutoCondition") condition object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.