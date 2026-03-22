# Condition (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConCondition ](imtconcondition.md "IMTConCondition")/ Condition | [](imtconcondition_clear.md "Clear") [](imtconcondition_rule.md "Rule") |
| --- | --- | --- |
| --- | --- |

IMTConCondition::Condition
Get the type of an additional condition for a rule.
C++
UINT IMTConCondition::Condition() const  
---  
.NET (Gateway/Manager API)
EnRouteCondition CIMTConCondition.Condition()  
---  
Python (Manager API)
MTConCondition.Condition  
---  
Return Value
A value of the [IMTConCondition::EnRouteCondition](imtconcondition_enum.htm#enroutecondition) enumeration.
IMTConCondition::Condition
Set the type of an additional condition for a rule.
C++
MTAPIRES IMTConCondition::Condition( const UINT condition // Condition type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCondition.Condition( EnRouteCondition  condition // Condition type )  
---  
Python (Manager API)
MTConCondition.Condition  
---  
Parameters
condition
[in] Type of an additional condition for a rule. To pass the type, the [IMTConCondition::EnRouteCondition](imtconcondition_enum.htm#enroutecondition) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.