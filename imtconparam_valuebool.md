# ValueBool (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Additional Parameters ](config_param.md "Additional Parameters") / [ IMTConParam ](imtconparam.md "IMTConParam")/ ValueBool | [](imtconparam_valuesymbols.md "ValueSymbols") [](imtconparam_valuecolor.md "ValueColor") |
| --- | --- | --- |
| --- | --- |

IMTConParam::ValueBool
Get a previously set bool parameter value.
C++
bool IMTConParam::ValueBool() const  
---  
.NET (Gateway/Manager API)
bool CIMTConParam.ValueBool()  
---  
Python
MTConParam.ValueBool  
---  
Return Value
Previously set bool parameter value.
Note
The requested parameter type must be [IMTConParam::TYPE_BOOL](imtconparam_enum.htm#paramtype). Otherwise, the method returns 0.
IMTConParam::ValueBool
Set the bool parameter value.
C++
MTAPIRES IMTConParam::ValueBool( const bool value // value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConParam.ValueBool( bool value // value )  
---  
Python
MTConParam.ValueBool  
---  
Parameters
value
[in] Parameter value: TRUE or FALSE.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The parameter type is changed to [IMTConParam::TYPE_BOOL](imtconparam_enum.htm#paramtype) after the method call.