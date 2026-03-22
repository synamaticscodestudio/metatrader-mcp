# ValueTime (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConCondition ](imtconcondition.md "IMTConCondition")/ ValueTime | [](imtconcondition_valuebool.md "ValueBool") [](imtconcondition_valueweekday.md "ValueWeekDay") |
| --- | --- | --- |
| --- | --- |

IMTConCondition::ValueTime
Get the value of a condition that expresses the time.
C++
UINT IMTConCondition::ValueTime() const  
---  
.NET (Gateway/Manager API)
uint CIMTConCondition.ValueTime()  
---  
Python (Manager API)
MTConCondition.ValueTime  
---  
Return Value
Time in minutes elapsed since 00:00.
IMTConCondition::ValueTime
Set the value of a condition that expresses the time.
C++
MTAPIRES IMTConCondition::ValueTime( const UINT value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCondition.ValueTime( uint value // Value )  
---  
Python (Manager API)
MTConCondition.ValueTime  
---  
Parameters
value
[in] A value in minutes elapsed since 00:00.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.