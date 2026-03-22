# ValueLeverage (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConCondition ](imtconcondition.md "IMTConCondition")/ ValueLeverage | [](imtconcondition_valuedatetime.md "ValueDatetime") [](imtconcondition_valuebool.md "ValueBool") |
| --- | --- | --- |
| --- | --- |

IMTConCondition::ValueLeverage
Get the value of a condition that expresses the leverage.
C++
INT64 IMTConCondition::ValueLeverage() const  
---  
.NET (Gateway/Manager API)
long CIMTConCondition.ValueLeverage()  
---  
Python (Manager API)
MTConCondition.ValueLeverage  
---  
Return Value
Value of the leverage from 1 to 500.
IMTConCondition::ValueLeverage
Set the value of a condition that expresses the leverage.
C++
MTAPIRES IMTConCondition::ValueLeverage( const INT64 value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCondition.ValueLeverage( long value // Value )  
---  
Python (Manager API)
MTConCondition.ValueLeverage(  
---  
Parameters
value
[in] Value of the leverage from 1 to 500.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.