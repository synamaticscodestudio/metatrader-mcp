# ValueColor (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoCondition ](imtconautocondition.md "IMTConAutoCondition")/ ValueColor | [](imtconautocondition_valuestring.md "ValueString") [](imtconautocondition_valuemoney.md "ValueMoney") |
| --- | --- | --- |
| --- | --- |

IMTConAutoCondition::ValueColor
Get a condition value of the colorref type.
C++
COLORREF IMTConAutoCondition::ValueColor() const  
---  
.NET (Gateway/Manager API)
uint CIMTConAutoCondition.ValueColor()  
---  
Python
MTConAutoCondition.ValueColor  
---  
Return Value
The condition value of a colorref type.
IMTConAutoCondition::ValueColor
Set a condition value of the colorref type.
C++
MTAPIRES IMTConAutoCondition::ValueColor( const COLORREF value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoCondition.ValueColor( uint value // Value )  
---  
Python
MTConAutoCondition.ValueColor  
---  
Parameters
value
[in] A value of colorref type.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.