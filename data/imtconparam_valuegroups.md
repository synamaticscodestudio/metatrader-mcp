# ValueGroups (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Additional Parameters ](config_param.md "Additional Parameters") / [ IMTConParam ](imtconparam.md "IMTConParam")/ ValueGroups | [](imtconparam_valuedatetime.md "ValueDateTime") [](imtconparam_valuesymbols.md "ValueSymbols") |
| --- | --- | --- |
| --- | --- |

IMTConParam::ValueGroups
Gets the previously set parameter value of the "group of users" type.
C++
LPCWSTR IMTConParam::ValueGroups() const  
---  
.NET (Gateway/Manager API)
string CIMTConParam.ValueGroups()  
---  
Python
MTConParam.ValueGroups  
---  
Return Value
A previously set parameter value of the "group of users" type.
Note
The type of the received parameter must be [IMTConParam:TYPE_GROUPS](imtconparam_enum.htm#paramtype). Otherwise, the method returns 0.
IMTConParam::ValueGroups
Sets a parameter value of the "group of users" type.
C++
MTAPIRES IMTConParam::ValueDateTime( const LPCWSTR value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConParam.ValueDateTime( stirng value // Value )  
---  
Python
MTConParam.ValueGroups  
---  
Parameters
value
[in] Parameter value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
After the call of the method, the parameter type is changed to [IMTConParam:TYPE_GROUPS](imtconparam_enum.htm#paramtype).
The value length is limited 256 characters (with the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.