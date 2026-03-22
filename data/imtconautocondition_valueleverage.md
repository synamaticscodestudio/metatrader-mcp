# ValueLeverage (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoCondition ](imtconautocondition.md "IMTConAutoCondition")/ ValueLeverage | [](imtconautocondition_valuedatetime.md "ValueDatetime") [](imtconautocondition_valuebool.md "ValueBool") |
| --- | --- | --- |
| --- | --- |

IMTConAutoCondition::ValueLeverage
Get a condition value expressing the leverage.
C++
INT64 IMTConAutoCondition::ValueLeverage() const  
---  
.NET (Gateway/Manager API)
long CIMTConAutoCondition.ValueLeverage()  
---  
Python
MTConAutoCondition.ValueLeverage  
---  
Return Value
Value of the leverage from 1 to 500.
IMTConAutoCondition::ValueLeverage
Set a condition value expressing the leverage.
C++
MTAPIRES IMTConAutoCondition::ValueLeverage( const INT64 value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoCondition.ValueLeverage( long value // Value )  
---  
Python
MTConAutoCondition.ValueLeverage  
---  
Parameters
value
[in] Value of the leverage from 1 to 500.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.