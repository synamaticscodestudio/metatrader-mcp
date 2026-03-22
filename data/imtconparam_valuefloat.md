# ValueFloat (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Additional Parameters ](config_param.md "Additional Parameters") / [ IMTConParam ](imtconparam.md "IMTConParam")/ ValueFloat | [](imtconparam_valueint.md "ValueInt") [](imtconparam_valuetime.md "ValueTime") |
| --- | --- | --- |
| --- | --- |

IMTConParam::ValueFloat
Gets a previously specified parameter value of the float type.
C++
double IMTConParam::ValueFloat() const  
---  
.NET (Gateway/Manager API)
double CIMTConParam.ValueFloat()  
---  
Python
MTConParam.ValueFloat  
---  
Return Value
A previously specified parameter value of the float type.
Note
The type of the received parameter must be [IMTConParam::TYPE_FLOAT](imtconparam_enum.htm#paramtype). Otherwise, the method returns 0.
IMTConParam::ValueFloat
Sets a parameter value of the float type.
C++
MTAPIRES IMTConParam::ValueFloat( const double value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConParam.ValueFloat( double value // Value )  
---  
Python
MTConParam.ValueFloat  
---  
Parameters
value
[in] Parameter value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
After the method call, the parameter type is changed to [IMTConParam::TYPE_FLOAT](imtconparam_enum.htm#paramtype).