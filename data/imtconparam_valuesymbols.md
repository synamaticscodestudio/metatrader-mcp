# ValueSymbols (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Additional Parameters ](config_param.md "Additional Parameters") / [ IMTConParam ](imtconparam.md "IMTConParam")/ ValueSymbols | [](imtconparam_valuegroups.md "ValueGroups") [](imtconparam_valuebool.md "ValueBool") |
| --- | --- | --- |
| --- | --- |

IMTConParam::ValueSymbols
Gets a previously specified parameter value of the "symbol" type.
C++
LPCWSTR IMTConParam::ValueSymbols() const  
---  
.NET (Gateway/Manager API)
string CIMTConParam.ValueSymbols()  
---  
Python
MTConParam.ValueSymbols  
---  
Return Value
A previously specified parameter value of the "symbol" type.
Note
The type of the received parameter must be [IMTConParam:TYPE_SYMBOLS](imtconparam_enum.htm#paramtype). Otherwise, the method returns 0.
IMTConParam::ValueSymbols
Sets a parameter value of the "symbol" type.
C++
MTAPIRES IMTConParam::ValueSymbols( const LPCWSTR value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConParam.ValueSymbols( string value // Value )  
---  
Python
MTConParam.ValueSymbols  
---  
Parameters
value
[in] Parameter value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
After the call of the method, the parameter type is changed to [IMTConParam:TYPE_SYMBOLS](imtconparam_enum.htm#paramtype).
The value length is limited 256 characters (with the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.