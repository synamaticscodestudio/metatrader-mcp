# ValueWeekDay (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConCondition ](imtconcondition.md "IMTConCondition")/ ValueWeekDay | [](imtconcondition_valuetime.md "ValueTime") [](imtconroutedealer.md "IMTConRouteDealer") |
| --- | --- | --- |
| --- | --- |

IMTConCondition::ValueWeekDay
Get the value of a condition that expresses a weekday.
C++
UINT IMTConCondition::ValueWeekDay() const  
---  
.NET (Gateway/Manager API)
uint CIMTConCondition.ValueWeekDay()  
---  
Python (Manager API)
MTConCondition.ValueWeekDay  
---  
Return Value
Weekday index. 0 corresponds to Sunday, 6 - to Saturday.
IMTConCondition::ValueWeekDay
Set the value of a condition that expresses a weekday.
C++
MTAPIRES IMTConCondition::ValueWeekDay( const UINT value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCondition.ValueWeekDay( uint value // Value )  
---  
Python (Manager API)
MTConCondition.ValueWeekDay  
---  
Parameters
value
[in] Weekday index. 0 corresponds to Sunday, 6 - to Saturday.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.