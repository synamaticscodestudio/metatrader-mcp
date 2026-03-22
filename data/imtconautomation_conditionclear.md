# ConditionClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutomation ](imtconautomation.md "IMTConAutomation")/ ConditionClear | [](imtconautomation_conditiondelete.md "ConditionDelete") [](imtconautomation_conditionshift.md "ConditionShift") |
| --- | --- | --- |
| --- | --- |

IMTConAutomation::ConditionClear
Clear the list of all automation task triggering [conditions](https://support.metaquotes.net/en/docs/mt5/platform/administration/automation/automation_condition).
C++
MTAPIRES IMTConAutomation::ConditionClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutomation.ConditionClear()  
---  
Python
MTConAutomation.ConditionClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method deletes all trigger conditions of an automation task.