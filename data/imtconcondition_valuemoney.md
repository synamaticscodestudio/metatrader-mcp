# ValueMoney (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConCondition ](imtconcondition.md "IMTConCondition")/ ValueMoney | [](imtconcondition_valuecolor.md "ValueColor") [](imtconcondition_valuevolume.md "ValueVolume") |
| --- | --- | --- |
| --- | --- |

IMTConCondition::ValueMoney
Get the value of a condition that expresses the amount of money.
C++
double IMTConCondition::ValueMoney() const  
---  
.NET (Gateway/Manager API)
double CIMTConCondition.ValueMoney()  
---  
Python (Manager API)
MTConCondition.ValueMoney  
---  
Return Value
A value of the double type.
IMTConCondition::ValueMoney
Set the value of a condition that expresses the amount of money.
C++
MTAPIRES IMTConCondition::ValueMoney( const double value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCondition.ValueMoney( double value // Value )  
---  
Python (Manager API)
MTConCondition.ValueMoney  
---  
Parameters
value
[in] A value of the double type.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.