# Rule (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPSCondition ](imtconvpscondition.md "IMTConVPSCondition")/ Rule | [](imtconvpscondition_condition.md "Condition") [](imtconvpscondition_valuetype.md "ValueType") |
| --- | --- | --- |
| --- | --- |

IMTConVPSCondition::Rule
Get a method for comparing a condition with the specified value.
C++
UINT IMTConVPSCondition::Rule() const  
---  
.NET (Gateway/Manager API)
EnConditionRule CIMTConVPSCondition.Rule()  
---  
Python
MTConVPSCondition.Rule  
---  
Return Value
[IMTConVPSCondition::EnConditionRule](imtconvpscondition_enum.htm#enconditionrule) enumeration value.
IMTConVPSCondition::Rule
Set a method for comparing a condition with the specified value.
C++
MTAPIRES IMTConVPSCondition::Rule( const UINT rule // Comparison method )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPSCondition.Rule( EnConditionRule rule // Comparison method )  
---  
Python
MTConVPSCondition.Rule  
---  
Parameters
rule
[in] A method for comparing a condition with the specified value. The method is passed using the [IMTConVPSCondition::EnConditionRule](imtconvpscondition_enum.htm#enconditionrule) enumeration.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.