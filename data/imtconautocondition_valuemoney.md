# ValueMoney (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoCondition ](imtconautocondition.md "IMTConAutoCondition")/ ValueMoney | [](imtconautocondition_valuecolor.md "ValueColor") [](imtconautocondition_valuevolume.md "ValueVolume") |
| --- | --- | --- |
| --- | --- |

IMTConAutoCondition::ValueMoney
Get a condition value that expresses the amount of money.
C++
double IMTConAutoCondition::ValueMoney() const  
---  
.NET (Gateway/Manager API)
double CIMTConAutoCondition.ValueMoney()  
---  
Python
MTConAutoCondition.ValueMoney  
---  
Return Value
A value of the double type.
IMTConAutoCondition::ValueMoney
Set a condition value that expresses the amount of money.
C++
MTAPIRES IMTConAutoCondition::ValueMoney( const double value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoCondition.ValueMoney( double value // Value )  
---  
Python
MTConAutoCondition.ValueMoney  
---  
Parameters
value
[in] A value of the double type.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.