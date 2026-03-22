# ValueDouble (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPSCondition ](imtconvpscondition.md "IMTConVPSCondition")/ ValueDouble | [](imtconvpscondition_valueuint.md "ValueUInt") [](imtconvpscondition_valuestring.md "ValueString") |
| --- | --- | --- |
| --- | --- |

IMTConVPSCondition::ValueDouble
Get a condition value of the double type.
C++
double IMTConVPSCondition::ValueDouble() const  
---  
.NET (Gateway/Manager API)
double CIMTConVPSCondition.ValueDouble()  
---  
Python
MTConVPSCondition.ValueDouble  
---  
Return Value
The condition value of the double type.
IMTConVPSCondition::ValueDouble
Set a condition value of the double type.
C++
MTAPIRES IMTConVPSCondition::ValueDouble( const double value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPSCondition.ValueDouble( double value // Value )  
---  
Python
MTConVPSCondition.ValueDouble  
---  
Parameters
value
[in] A value of the double type.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.