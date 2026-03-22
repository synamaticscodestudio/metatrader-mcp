# ValueReason (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoCondition ](imtconautocondition.md "IMTConAutoCondition")/ ValueReason | [](imtconautocondition_valuepositiontype.md "ValuePositionType") [](imtconautocondition_valuedealtype.md "ValueDealType") |
| --- | --- | --- |
| --- | --- |

IMTConAutoCondition::ValueReason
Get a condition value expressing the reason for a trading operation.
C++
UINT IMTConAutoCondition::ValueReason() const  
---  
.NET (Gateway/Manager API)
uint CIMTConAutoCondition.ValueReason()  
---  
Python
MTConAutoCondition.ValueReason  
---  
Return Value
[Reason for position opening](imtposition_reason.md "Reason") or [deal execution](imtdeal_reason.md "Reason").
IMTConAutoCondition::ValueReason
Set a condition value expressing the reason for a trading operation.
C++
MTAPIRES IMTConAutoCondition::ValueReason( const UINT value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoCondition.ValueReason( uint value // Value )  
---  
Python
MTConAutoCondition.ValueReason  
---  
Parameters
value
[in] [Reason for position opening](imtposition_reason.md "Reason") or [deal execution](imtdeal_reason.md "Reason").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.