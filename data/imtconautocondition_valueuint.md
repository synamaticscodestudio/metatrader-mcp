# ValueUInt (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoCondition ](imtconautocondition.md "IMTConAutoCondition")/ ValueUInt | [](imtconautocondition_valueint.md "ValueInt") [](imtconautocondition_valuedouble.md "ValueDouble") |
| --- | --- | --- |
| --- | --- |

IMTConAutoCondition::ValueUInt
Get the value of a condition of the UINT type.
C++
UINT64 IMTConAutoCondition::ValueUInt() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConAutoCondition.ValueUInt()  
---  
Python
MTConAutoCondition.ValueUInt  
---  
Return Value
The condition value of the UINT type.
IMTConAutoCondition::ValueUInt
Set the value of a condition of the UINT type.
C++
MTAPIRES IMTConAutoCondition::ValueUInt( const UINT64 value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoCondition.ValueUInt( ulong value // Value )  
---  
Python
MTConAutoCondition.ValueUInt  
---  
Parameters
value
[in] A value of the UINT type.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.