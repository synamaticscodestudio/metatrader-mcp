# ValuePositionType (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoCondition ](imtconautocondition.md "IMTConAutoCondition")/ ValuePositionType | [](imtconautocondition_valueserver.md "ValueServer") [](imtconautocondition_valuereason.md "ValueReason") |
| --- | --- | --- |
| --- | --- |

IMTConAutoCondition::ValuePositionType
Get a condition value expressing position type.
C++
UINT IMTConAutoCondition::ValuePositionType() const  
---  
.NET (Gateway/Manager API)
uint CIMTConAutoCondition.ValuePositionType()  
---  
Python
MTConAutoCondition.ValuePositionType  
---  
Return Value
[Position type](imtposition_action.md "Action").
IMTConAutoCondition::ValuePositionType
Set a condition value expressing position type.
C++
MTAPIRES IMTConAutoCondition::ValuePositionType( const UINT value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoCondition.ValuePositionType( uint value // Value )  
---  
Python
MTConAutoCondition.ValuePositionType  
---  
Parameters
value
[in] [Position type](imtposition_action.md "Action").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.