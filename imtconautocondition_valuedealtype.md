# ValueDealType (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoCondition ](imtconautocondition.md "IMTConAutoCondition")/ ValueDealType | [](imtconautocondition_valuereason.md "ValueReason") [](imtconautocondition_valuedealentry.md "ValueDealEntry") |
| --- | --- | --- |
| --- | --- |

IMTConAutoCondition::ValueDealType
Get a condition value expressing the deal type.
C++
UINT IMTConAutoCondition::ValueDealType() const  
---  
.NET (Gateway/Manager API)
uint CIMTConAutoCondition.ValueDealType()  
---  
Python
MTConAutoCondition.ValueDealType  
---  
Return Value
[Deal type](imtdeal_action.md "Action").
IMTConAutoCondition::ValueDealType
Set a condition value expressing the deal type.
C++
MTAPIRES IMTConAutoCondition::ValueDealType( const UINT value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoCondition.ValueDealType( uint value // Value )  
---  
Python
MTConAutoCondition.ValueDealType  
---  
Parameters
value
[in] [Deal type](imtdeal_action.md "Action").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.