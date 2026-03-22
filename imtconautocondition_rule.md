# Rule (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoCondition ](imtconautocondition.md "IMTConAutoCondition")/ Rule | [](imtconautocondition_condition.md "Condition") [](imtconautocondition_orid.md "OrId") |
| --- | --- | --- |
| --- | --- |

IMTConAutoCondition::Rule
Get a method for comparing a condition with the specified value.
C++
UINT IMTConAutoCondition::Rule() const  
---  
.NET (Gateway/Manager API)
EnConditionRule CIMTConAutoCondition.Rule()  
---  
Python
MTConAutoCondition.Rule  
---  
Return Value
[IMTConAutoCondition::EnConditionRule](imtconautocondition_enum.htm#enconditionrule) enumeration value.
IMTConAutoCondition::Rule
Set a method for comparing a condition with the specified value.
C++
MTAPIRES IMTConAutoCondition::Rule( const UINT rule // Comparison method )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoCondition.Rule( EnConditionRule rule // Comparison method )  
---  
Python
MTConAutoCondition.Rule  
---  
Parameters
rule
[in] A method for comparing a condition with the specified value. The value is passed using the [IMTConAutoCondition::EnConditionRule](imtconautocondition_enum.htm#enconditionrule) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.