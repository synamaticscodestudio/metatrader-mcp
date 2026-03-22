# ValueMoney (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPSCondition ](imtconvpscondition.md "IMTConVPSCondition")/ ValueMoney | [](imtconvpscondition_valuecolor.md "ValueColor") [](imtconvpscondition_valuedatetime.md "ValueDatetime") |
| --- | --- | --- |
| --- | --- |

IMTConVPSCondition::ValueMoney
Get the value of a condition that expresses the amount of money.
C++
double IMTConVPSCondition::ValueMoney() const  
---  
.NET (Gateway/Manager API)
double CIMTConVPSCondition.ValueMoney()  
---  
Python
MTConVPSCondition.ValueMoney  
---  
Return Value
A value of the double type.
IMTConVPSCondition::ValueMoney
Set the value of a condition that expresses the amount of money.
C++
MTAPIRES IMTConVPSCondition::ValueMoney( const double value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPSCondition.ValueMoney( double value // Value )  
---  
Python
MTConVPSCondition.ValueMoney  
---  
Parameters
value
[in] A value of the double type.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.