# ValueTime (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoCondition ](imtconautocondition.md "IMTConAutoCondition")/ ValueTime | [](imtconautocondition_valuebool.md "ValueBool") [](imtconautocondition_valuedate.md "ValueDate") |
| --- | --- | --- |
| --- | --- |

IMTConAutoCondition::ValueTime
Get a condition value expressing the time.
C++
UINT IMTConAutoCondition::ValueTime() const  
---  
.NET (Gateway/Manager API)
uint CIMTConAutoCondition.ValueTime()  
---  
Python
MTConAutoCondition.ValueTime  
---  
Return Value
Time in minutes elapsed since 00:00.
IMTConAutoCondition::ValueTime
Set a condition value expressing the time.
C++
MTAPIRES IMTConAutoCondition::ValueTime( const UINT value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoCondition.ValueTime( uint value // Value )  
---  
Python
MTConAutoCondition.ValueTime  
---  
Parameters
value
[in] A value in minutes elapsed since 00:00.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.