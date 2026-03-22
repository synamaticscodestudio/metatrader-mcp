# ValueUInt (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConCondition ](imtconcondition.md "IMTConCondition")/ ValueUInt | [](imtconcondition_valueint.md "ValueInt") [](imtconcondition_valuedouble.md "ValueDouble") |
| --- | --- | --- |
| --- | --- |

IMTConCondition::ValueUInt
Get the value of a condition of the UINT type.
C++
UINT64 IMTConCondition::ValueUInt() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConCondition.ValueUInt()  
---  
Python (Manager API)
MTConCondition.ValueUInt  
---  
Return Value
The condition value of the UINT type.
IMTConCondition::ValueUInt
Set the value of a condition of the UINT type.
C++
MTAPIRES IMTConCondition::ValueUInt( const UINT64 value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCondition.ValueUInt( ulong value // Value )  
---  
Python (Manager API)
MTConCondition.ValueUInt  
---  
Parameters
value
[in] A value of the UINT type.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.