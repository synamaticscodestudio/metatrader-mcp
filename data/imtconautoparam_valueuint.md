# ValueUInt (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoParam ](imtconautoparam.md "IMTConAutoParam")/ ValueUInt | [](imtconautoparam_valueint.md "ValueInt") [](imtconautoparam_valuedouble.md "ValueDouble") |
| --- | --- | --- |
| --- | --- |

IMTConAutoParam::ValueUInt
Get a parameter value of UINT type.
C++
UINT64 IMTConAutoParam::ValueUInt() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConAutoParam.ValueUInt()  
---  
Python
MTConAutoParam.ValueUInt  
---  
Return Value
A parameter value of the UINT type.
IMTConAutoParam
Set a parameter value of UINT type.
C++
MTAPIRES IMTConAutoCondition::ValueUInt( const UINT64 value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoParam.ValueUInt( ulong value // Value )  
---  
Python
MTConAutoParam.ValueUInt  
---  
Parameters
value
[in] A value of the UINT type.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.