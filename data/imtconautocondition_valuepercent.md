# ValuePercent (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoCondition ](imtconautocondition.md "IMTConAutoCondition")/ ValuePercent | [](imtconautocondition_valuedate.md "ValueDate") [](imtconautocondition_valuelanguage.md "ValueLanguage") |
| --- | --- | --- |
| --- | --- |

IMTConAutoCondition::ValuePercent
Get a condition value expressing a percentage.
C++
UINT IMTConAutoCondition::ValuePercent() const  
---  
.NET (Gateway/Manager API)
uint CIMTConAutoCondition.ValuePercent()  
---  
Python
MTConAutoCondition.ValuePercent  
---  
Return Value
Percentage value.
IMTConAutoCondition::ValuePercent
Set a condition value expressing a percentage.
C++
MTAPIRES IMTConAutoCondition::ValuePercent( const UINT value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoCondition.ValuePercent( uint value // Value )  
---  
Python
MTConAutoCondition.ValuePercent  
---  
Parameters
value
[in] Percentage value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.