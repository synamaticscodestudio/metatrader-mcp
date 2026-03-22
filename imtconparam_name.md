# Name (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Additional Parameters ](config_param.md "Additional Parameters") / [ IMTConParam ](imtconparam.md "IMTConParam")/ Name | [](imtconparam_clear.md "Clear") [](imtconparam_type.md "Type") |
| --- | --- | --- |
| --- | --- |

IMTConParam::Name
Get the name of a parameter.
C++
LPCWSTR IMTConParam::Name() const  
---  
.NET (Gateway/Manager API)
string CIMTConParam.Name()  
---  
Python
MTConParam.Name  
---  
Return Value
If successful, it returns a pointer to the string with the parameter name. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConParam](imtconparam.md "IMTConParam") object.
To use the string after the object removal (call of the [IMTConParam::Release](imtconparam_release.md "Release") method of this object), a copy of it should be created.
IMTConParam::Name
Set the parameter name.
C++
MTAPIRES IMTConParam::Name( LPCWSTR name // Parameter name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConParam.Name( string name // Parameter name )  
---  
Python
MTConParam.Name  
---  
Parameters
name
[in] Parameter Name.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum name length is 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.