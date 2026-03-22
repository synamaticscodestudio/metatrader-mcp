# ValueDealEntry (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoCondition ](imtconautocondition.md "IMTConAutoCondition")/ ValueDealEntry | [](imtconautocondition_valuedealtype.md "ValueDealType") [](imtconautocondition_valueordertype.md "ValueOrderType") |
| --- | --- | --- |
| --- | --- |

IMTConAutoCondition::ValueDealEntry
Get a condition value expressing deal direction.
C++
UINT IMTConAutoCondition::ValueDealEntry() const  
---  
.NET (Gateway/Manager API)
uint CIMTConAutoCondition.ValueDealEntry()  
---  
Python
MTConAutoCondition.ValueDealEntry  
---  
Return Value
[Deal direction](imtdeal_entry.md "Entry").
IMTConAutoCondition::ValueDealType
Set a condition value expressing deal direction.
C++
MTAPIRES IMTConAutoCondition::ValueDealEntry( const UINT value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoCondition.ValueDealEntry( uint value // Value )  
---  
Python
MTConAutoCondition.ValueDealEntry  
---  
Parameters
value
[in] [Deal direction](imtdeal_entry.md "Entry").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.