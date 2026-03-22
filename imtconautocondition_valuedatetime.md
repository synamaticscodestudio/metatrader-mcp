# ValueDatetime (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoCondition ](imtconautocondition.md "IMTConAutoCondition")/ ValueDatetime | [](imtconautocondition_valuevolume.md "ValueVolume") [](imtconautocondition_valueleverage.md "ValueLeverage") |
| --- | --- | --- |
| --- | --- |

IMTConAutoCondition::ValueDatetime
Get a condition value expressing date and time.
C++
INT64 IMTConAutoCondition::ValueDatetime() const  
---  
.NET (Gateway/Manager API)
long CIMTConAutoCondition.ValueDatetime()  
---  
Python
MTConAutoCondition.ValueDatetime  
---  
Return Value
Date and time in seconds elapsed since 01.01.1970.
IMTConAutoCondition::ValueDatetime
Set a condition value that expresses date and time.
C++
MTAPIRES IMTConAutoCondition::ValueDatetime( const INT64 value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoCondition.ValueDatetime( long value // Value )  
---  
Python
MTConAutoCondition.ValueDatetime  
---  
Parameters
value
[in] Date and time in seconds elapsed since 01.01.1970.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.