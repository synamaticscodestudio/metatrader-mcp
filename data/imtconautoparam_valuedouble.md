# ValueDouble (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoParam ](imtconautoparam.md "IMTConAutoParam")/ ValueDouble | [](imtconautoparam_valueuint.md "ValueUInt") [](imtconautoparam_valuestring.md "ValueString") |
| --- | --- | --- |
| --- | --- |

IMTConAutoParam::ValueDouble
Get a parameter value of double type.
C++
double IMTConAutoParam::ValueDouble() const  
---  
.NET (Gateway/Manager API)
double CIMTConAutoParam.ValueDouble()  
---  
Python
MTConAutoParam.ValueDouble  
---  
Return Value
The parameter value of a double type.
IMTConAutoParam::ValueDouble
Set a parameter value of double type.
C++
MTAPIRES IMTConAutoParam::ValueDouble( const double value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoParam.ValueDouble( double value // Value )  
---  
Python
MTConAutoParam.ValueDouble  
---  
Parameters
value
[in] A value of the double type.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.