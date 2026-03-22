# ValueColor (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Additional Parameters ](config_param.md "Additional Parameters") / [ IMTConParam ](imtconparam.md "IMTConParam")/ ValueColor | [](imtconparam_valuebool.md "ValueBool") [](imtconparamarray.md "IMTConParamArray") |
| --- | --- | --- |
| --- | --- |

IMTConParam::ValueColor
Get a previously set colorref parameter value.
C++
COLORREF IMTConParam::ValueColor() const  
---  
.NET (Gateway/Manager API)
uint CIMTConParam.ValueColor()  
---  
Python
MTConParam.ValueColor  
---  
Return Value
The previously set colorref parameter value.
Note
The parameter received must be of type [IMTConParam::TYPE_COLOR](imtconparam_enum.htm#paramtype). Otherwise, the method returns 0.
IMTConParam::ValueColor
Sett a colorref parameter value.
C++
MTAPIRES IMTConParam::ValueColor( const COLORREF value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConParam.ValueColor( uint value // Value )  
---  
Python
MTConParam.ValueColor  
---  
Parameters
value
[in] The colorref type parameter value.
Return Value
An indication of a successful performance is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code occurred.
Note
The parameter type is changed to [IMTConParam::TYPE_COLOR](imtconparam_enum.htm#paramtype) after the method call.