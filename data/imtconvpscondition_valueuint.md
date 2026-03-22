# ValueUInt (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPSCondition ](imtconvpscondition.md "IMTConVPSCondition")/ ValueUInt | [](imtconvpscondition_valueint.md "ValueInt") [](imtconvpscondition_valuedouble.md "ValueDouble") |
| --- | --- | --- |
| --- | --- |

IMTConVPSCondition::ValueUInt
Get the value of a condition of the UINT type.
C++
UINT64 IMTConVPSCondition::ValueUInt() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConVPSCondition.ValueUInt()  
---  
Python
MTConVPSCondition.ValueUInt  
---  
Return Value
The condition value of the UINT type.
IMTConAutoCondition::ValueUInt
Set the value of a condition of the UINT type.
C++
MTAPIRES IMTConVPSCondition::ValueUInt( const UINT64 value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPSCondition.ValueUInt( ulong value // Value )  
---  
Python
MTConVPSCondition.ValueUInt  
---  
Parameters
value
[in] A value of the UINT type.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.