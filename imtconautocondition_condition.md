# Condition (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoCondition ](imtconautocondition.md "IMTConAutoCondition")/ Condition | [](imtconautocondition_clear.md "Clear") [](imtconautocondition_rule.md "Rule") |
| --- | --- | --- |
| --- | --- |

IMTConAutoCondition::Condition
Get automation task triggering [condition type](https://support.metaquotes.net/en/docs/mt5/platform/administration/automation/automation_condition).
C++
UINT IMTConAutoCondition::Condition() const  
---  
.NET (Gateway/Manager API)
EnConditions CIMTConAutoCondition.Condition()  
---  
Python
MTConAutoCondition.Condition  
---  
Return Value
[IMTConAutoCondition::EnConditions](imtconautocondition_enum.htm#enconditions) enumeration value.
IMTConAutoCondition::Condition
Set automation task triggering [condition type](https://support.metaquotes.net/en/docs/mt5/platform/administration/automation/automation_condition).
C++
MTAPIRES IMTConAutoCondition::Condition( const UINT condition // Condition type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoCondition.Condition( EnConditions  condition // Condition type )  
---  
Python
MTConAutoCondition.Condition  
---  
Parameters
condition
[in] Type of condition for automation task triggering. The value is passed using the [IMTConAutoCondition::EnConditions](imtconautocondition_enum.htm#enconditions) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.