# ValueTime (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Additional Parameters ](config_param.md "Additional Parameters") / [ IMTConParam ](imtconparam.md "IMTConParam")/ ValueTime | [](imtconparam_valuefloat.md "ValueFloat") [](imtconparam_valuedatetime.md "ValueDateTime") |
| --- | --- | --- |
| --- | --- |

IMTConParam::ValueTime
Gets a previously specified parameter value of the time type.
C++
INT64 IMTConParam::ValueTime() const  
---  
.NET (Gateway/Manager API)
long CIMTConParam.ValueTime()  
---  
Python
MTConParam.ValueTime  
---  
Return Value
A previously specified parameter value of the time type.
Note
The type of the received parameter must be [IMTConParam::TYPE_TIME](imtconparam_enum.htm#paramtype). Otherwise, the method returns 0.
IMTConParam::ValueTime
Sets a parameter value of the time type.
C++
MTAPIRES IMTConParam::ValueTime( const INT64 value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConParam.ValueTime( long value // Value )  
---  
Python
MTConParam.ValueTime  
---  
Parameters
value
[in] Parameter value in the HH:MM:SS format.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
After the call of the method, the parameter type is changed to [IMTConParam::TYPE_TIME](imtconparam_enum.htm#paramtype).