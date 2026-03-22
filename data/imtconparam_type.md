# Type (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Additional Parameters ](config_param.md "Additional Parameters") / [ IMTConParam ](imtconparam.md "IMTConParam")/ Type | [](imtconparam_name.md "Name") [](imtconparam_value.md "Value") |
| --- | --- | --- |
| --- | --- |

IMTConParam::Type
Get the type of a parameter.
C++
UINT IMTConParam::Type() const  
---  
.NET (Gateway/Manager API)
ParamType CIMTConParam.Type()  
---  
Python
MTConParam.Type  
---  
Return Value
A value from [IMTConParam::ParamType](imtconparam_enum.htm#paramtype).
IMTConParam::Type
Set the parameter type.
C++
MTAPIRES IMTConParam::Type( const UINT type // Parameter type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConParam.Type( ParamType type // Parameter type )  
---  
Python
MTConParam.Type  
---  
Parameters
type
[in] The parameter type is set using the [IMTConParam::ParamType](imtconparam_enum.htm#paramtype) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.