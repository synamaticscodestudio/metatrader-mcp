# Condition (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPSCondition ](imtconvpscondition.md "IMTConVPSCondition")/ Condition | [](imtconvpscondition_clear.md "Clear") [](imtconvpscondition_rule.md "Rule") |
| --- | --- | --- |
| --- | --- |

IMTConVPSCondition::Condition
Get the condition type in the VPS allocation rule.
C++
UINT IMTConVPSCondition::Condition() const  
---  
.NET (Gateway/Manager API)
EnConditions CIMTConVPSCondition.Condition()  
---  
Python
MTConVPSCondition.Condition  
---  
Return Value
[IMTConVPSCondition::EnCondition](imtconvpscondition_enum.htm#encondition) enumeration value.
IMTConVPSCondition::Condition
Set the condition type in the VPS allocation rule.
C++
MTAPIRES IMTConVPSCondition::Condition( const UINT condition // Condition type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPSCondition.Condition( EnConditions  condition // Condition type )  
---  
Python
MTConVPSCondition.Condition  
---  
Parameters
condition
[in] Condition type in the VPS allocation rule. The type is passed using the [IMTConVPSCondition::EnCondition](imtconvpscondition_enum.htm#encondition) enumeration.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.