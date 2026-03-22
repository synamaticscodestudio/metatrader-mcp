# ValueOrderState (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoCondition ](imtconautocondition.md "IMTConAutoCondition")/ ValueOrderState | [](imtconautocondition_valueordertype.md "ValueOrderType") [](imtconautoaction.md "IMTConAutoAction") |
| --- | --- | --- |
| --- | --- |

IMTConAutoCondition::ValueOrderState
Get a condition value expressing order state.
C++
UINT IMTConAutoCondition::ValueOrderState() const  
---  
.NET (Gateway/Manager API)
uint CIMTConAutoCondition.ValueOrderState()  
---  
Python
MTConAutoCondition.ValueOrderState  
---  
Return Value
[Order state](imtorder_state.md "State").
Note
The order state is set by the [IMTConAutoCondition::CONDITION_ORDER_STATE](imtconautocondition_enum.htm#enconditions) condition.
IMTConAutoCondition::ValueOrderState
Set a condition value expressing order state.
C++
MTAPIRES IMTConAutoCondition::ValueOrderState( const UINT value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoCondition.ValueOrderState( uint value // Value )  
---  
Python
MTConAutoCondition.ValueOrderState  
---  
Parameters
value
[in] [Order state](imtorder_state.md "State").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The order state is set by the [IMTConAutoCondition::CONDITION_ORDER_STATE](imtconautocondition_enum.htm#enconditions) condition.