# Rule (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConCondition ](imtconcondition.md "IMTConCondition")/ Rule | [](imtconcondition_condition.md "Condition") [](imtconcondition_valuetype.md "ValueType") |
| --- | --- | --- |
| --- | --- |

IMTConCondition::Rule
Get a method for comparing a condition with the specified value.
C++
UINT IMTConCondition::Rule() const  
---  
.NET (Gateway/Manager API)
EnConditionRule CIMTConCondition.Rule()  
---  
Python (Manager API)
MTConCondition.Rule  
---  
Return Value
A value of the [IMTConCondition::EnConditionRule](imtconcondition_enum.htm#enconditionrule) enumeration.
IMTConCondition::Rule
Set a method for comparing a condition with the specified value.
C++
MTAPIRES IMTConCondition::Rule( const UINT rule // A method for comparison )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCondition.Rule( EnConditionRule rule // A method for comparison )  
---  
Python (Manager API)
MTConCondition.Rule  
---  
Parameters
rule
[in] A method for comparing a condition with the specified value. To pass the method, the [IMTConCondition::EnConditionRule](imtconcondition_enum.htm#enconditionrule) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.