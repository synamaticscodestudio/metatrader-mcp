# ValueBool (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConCondition ](imtconcondition.md "IMTConCondition")/ ValueBool | [](imtconcondition_valueleverage.md "ValueLeverage") [](imtconcondition_valuetime.md "ValueTime") |
| --- | --- | --- |
| --- | --- |

IMTConCondition::ValueBool
Get the value of a condition of the bool type.
C++
bool IMTConCondition::ValueBool() const  
---  
.NET (Gateway/Manager API)
bool CIMTConCondition.ValueBool()  
---  
Python (Manager API)
MTConCondition.ValueBool  
---  
Return Value
Can be true or false.
IMTConCondition::ValueBool
Set the value of a condition of the bool type.
C++
MTAPIRES IMTConCondition::ValueBool( const bool value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCondition.ValueBool( bool value // Value )  
---  
Python (Manager API)
MTConCondition.ValueBool  
---  
Parameters
value
[in] True or false.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.