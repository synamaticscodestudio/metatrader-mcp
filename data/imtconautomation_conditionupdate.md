# ConditionUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutomation ](imtconautomation.md "IMTConAutomation")/ ConditionUpdate | [](imtconautomation_conditionadd.md "ConditionAdd") [](imtconautomation_conditiondelete.md "ConditionDelete") |
| --- | --- | --- |
| --- | --- |

IMTConAutomation::ConditionUpdate
Edit an automation task triggering [condition](https://support.metaquotes.net/en/docs/mt5/platform/administration/automation/automation_condition) at the specified position.
C++
MTAPIRES IMTConAutomation::ConditionUpdate( const UINT pos, // Condition position const IMTConAutoCondition* condition // Condition object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutomation.ConditionUpdate( uint pos, // Condition position CIMTConAutoCondition condition // Condition object )  
---  
Python
MTConAutomation.ConditionUpdate( pos, # Condition position condition # Condition object )  
---  
MTConAutomation.ConditionSet( condition_list # List of conditions )  
---  
Parameters
pos
[in] Position of a condition in the list, starting at 0.
condition
[in] [IMTConAutoCondition](imtconautocondition.md "IMTConAutoCondition") condition object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.