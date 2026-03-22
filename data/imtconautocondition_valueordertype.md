# ValueOrderType (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoCondition ](imtconautocondition.md "IMTConAutoCondition")/ ValueOrderType | [](imtconautocondition_valuedealentry.md "ValueDealEntry") [](imtconautocondition_valueorderstate.md "ValueOrderState") |
| --- | --- | --- |
| --- | --- |

IMTConAutoCondition::ValueOrderType
Get a condition value expressing order type.
C++
UINT IMTConAutoCondition::ValueOrderType() const  
---  
.NET (Gateway/Manager API)
uint CIMTConAutoCondition.ValueOrderType()  
---  
Python
MTConAutoCondition.ValueOrderType  
---  
Return Value
[Type of the order](imtorder_type.md "Type").
Note
The order type is set by the [IMTConAutoCondition::CONDITION_ORDER_TYPE](imtconautocondition_enum.htm#enconditions) condition.
IMTConAutoCondition::ValueDealType
Set a condition value expressing order type.
C++
MTAPIRES IMTConAutoCondition::ValueOrderType( const UINT value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoCondition.ValueOrderType( uint value // Value )  
---  
Python
MTConAutoCondition.ValueOrderType  
---  
Parameters
value
[in] [Order type](imtorder_type.md "Type").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The order type is set by the [IMTConAutoCondition::CONDITION_ORDER_TYPE](imtconautocondition_enum.htm#enconditions) condition.