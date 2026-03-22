# ValueInt (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPSCondition ](imtconvpscondition.md "IMTConVPSCondition")/ ValueInt | [](imtconvpscondition_valuetype.md "ValueType") [](imtconvpscondition_valueuint.md "ValueUInt") |
| --- | --- | --- |
| --- | --- |

IMTConVPSCondition::ValueInt
Get a condition value of the INT type.
C++
INT64 IMTConVPSCondition::ValueInt() const  
---  
.NET (Gateway/Manager API)
long CIMTConVPSCondition.ValueInt()  
---  
Python
MTConVPSCondition.ValueInt  
---  
Return Value
The condition value of the INT type.
IMTConAutoCondition::ValueInt
Set the value of a condition of the INT type.
C++
MTAPIRES IMTConVPSCondition::ValueInt( const INT64 value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPSCondition.ValueInt( long value // Value )  
---  
Python
MTConVPSCondition.ValueInt  
---  
Parameters
value
[in] A value of INT type.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.