# ConditionShift (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutomation ](imtconautomation.md "IMTConAutomation")/ ConditionShift | [](imtconautomation_conditionclear.md "ConditionClear") [](imtconautomation_conditiontotal.md "ConditionTotal") |
| --- | --- | --- |
| --- | --- |

IMTConAutomation::ConditionShift
Move an automation task triggering [condition](https://support.metaquotes.net/en/docs/mt5/platform/administration/automation/automation_condition) in the list.
C++
MTAPIRES IMTConAutomation::ConditionShift( const UINT pos, // Condition position const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutomation.ConditionShift( uint pos, // Condition position int  shift // Shift )  
---  
Python
MTConAutomation.ConditionShift( pos, # Condition position shift # Shift )  
---  
Parameters
pos
[in] Position of a condition in the list, starting at 0.
shift
[in] Condition shift relative to its current position. A negative value means shift to the top of the list, a positive value - to its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.