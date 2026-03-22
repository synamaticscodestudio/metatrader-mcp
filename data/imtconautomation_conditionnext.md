# ConditionNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutomation ](imtconautomation.md "IMTConAutomation")/ ConditionNext | [](imtconautomation_conditiontotal.md "ConditionTotal") [](imtconautomation_actionadd.md "ActionAdd") |
| --- | --- | --- |
| --- | --- |

IMTConAutomation::ConditionNext
Get an automation task triggering [condition](https://support.metaquotes.net/en/docs/mt5/platform/administration/automation/automation_condition) by index.
C++
MTAPIRES IMTConAutomation::ConditionNext( const UINT pos, // Condition position IMTConAutoCondition* condition // Condition object ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutomation.ConditionNext( uint pos, // Condition position CIMTConCondition condition // Condition object )  
---  
Python
MTConAutomation.ConditionNext( pos # Condition position )  
---  
MTConAutomation.ConditionGet()  
---  
Parameters
pos
[in] Position of a condition in the list, starting at 0.
condition
[out] The [IMTConAutoCondition](imtconautocondition.md "IMTConAutoCondition") condition object. The 'condition' object must be previously created using the [IMTServerAPI::AutomationConditionCreate](imtserverapi_automationconditioncreate.md "AutomationConditionCreate") or [IMTAdminAPI::AutomationConditionCreate](imtadminapi_automationconditioncreate.md "AutomationConditionCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.