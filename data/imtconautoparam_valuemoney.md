# ValueMoney (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoParam ](imtconautoparam.md "IMTConAutoParam")/ ValueMoney | [](imtconautoparam_valuecolor.md "ValueColor") [](imtconautoparam_valuevolume.md "ValueVolume") |
| --- | --- | --- |
| --- | --- |

IMTConAutoParam::ValueMoney
Get the value of the parameter that expresses the amount of money.
C++
double IMTConAutoParam::ValueMoney() const  
---  
.NET (Gateway/Manager API)
double CIMTConAutoParam.ValueMoney()  
---  
Python
MTConAutoParam.ValueMoney  
---  
Return Value
A value of the double type.
IMTConAutoParam::ValueMoney
Set the value of the parameter that expresses the amount of money.
C++
MTAPIRES IMTConAutoParam::ValueMoney( const double value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoParam.ValueMoney( double value // Value )  
---  
Python
MTConAutoParam.ValueMoney  
---  
Parameters
value
[in] A value of the double type.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.