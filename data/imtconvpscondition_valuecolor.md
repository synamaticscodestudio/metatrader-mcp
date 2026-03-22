# ValueColor (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPSCondition ](imtconvpscondition.md "IMTConVPSCondition")/ ValueColor | [](imtconvpscondition_valuestring.md "ValueString") [](imtconvpscondition_valuemoney.md "ValueMoney") |
| --- | --- | --- |
| --- | --- |

IMTConVPSCondition::ValueColor
Get a condition value of the colorref type.
C++
COLORREF IMTConVPSCondition::ValueColor() const  
---  
.NET (Gateway/Manager API)
uint CIMTConVPSCondition.ValueColor()  
---  
Python
MTConVPSCondition.ValueColor  
---  
Return Value
The condition value of a colorref type.
IMTConVPSCondition::ValueColor
Set a condition value of the colorref type.
C++
MTAPIRES IMTConVPSCondition::ValueColor( const COLORREF value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPSCondition.ValueColor( uint value // Value )  
---  
Python
MTConVPSCondition.ValueColor  
---  
Parameters
value
[in] A value of colorref type.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.