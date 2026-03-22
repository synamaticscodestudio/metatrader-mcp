# ValueColor (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConCondition ](imtconcondition.md "IMTConCondition")/ ValueColor | [](imtconcondition_valuestring.md "ValueString") [](imtconcondition_valuemoney.md "ValueMoney") |
| --- | --- | --- |
| --- | --- |

IMTConCondition::ValueColor
Get the value of a condition of the colorref type.
C++
COLORREF IMTConCondition::ValueColor() const  
---  
.NET (Gateway/Manager API)
uint CIMTConCondition.ValueColor()  
---  
Python (Manager API)
MTConCondition.ValueColor  
---  
Return Value
The condition value of a colorref type.
IMTConCondition::ValueColor
Set the value of a condition of the colorref type.
C++
MTAPIRES IMTConCondition::ValueColor( const COLORREF value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCondition.ValueColor( uint value // Value )  
---  
Python (Manager API)
MTConCondition.ValueColor  
---  
Parameters
value
[in] A value of colorref type.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.