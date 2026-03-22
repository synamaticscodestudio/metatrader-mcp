# ValueInt (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConCondition ](imtconcondition.md "IMTConCondition")/ ValueInt | [](imtconcondition_valuetype.md "ValueType") [](imtconcondition_valueuint.md "ValueUInt") |
| --- | --- | --- |
| --- | --- |

IMTConCondition::ValueInt
Get the value of a condition of the INT type.
C++
INT64 IMTConCondition::ValueInt() const  
---  
.NET (Gateway/Manager API)
long CIMTConCondition.ValueInt()  
---  
Python (Manager API)
MTConCondition.ValueInt  
---  
Return Value
The condition value of the INT type.
IMTConCondition::ValueInt
Set the value of a condition of the INT type.
C++
MTAPIRES IMTConCondition::ValueInt( const INT64 value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCondition.ValueInt( long value // Value )  
---  
Python (Manager API)
MTConCondition.ValueInt  
---  
Parameters
value
[in] A value of INT type.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.