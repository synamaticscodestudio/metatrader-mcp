# ParamString (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConRoute ](imtconroute.md "IMTConRoute")/ ParamString | [](imtconroute_paramdouble.md "ParamDouble") [](imtconroute_paramcolor.md "ParamColor") |
| --- | --- | --- |
| --- | --- |

IMTConRoute::ParamString
Get the value of an additional parameter of the string type.
C++
LPCWSTR IMTConRoute::ParamString() const  
---  
.NET (Gateway/Manager API)
string CIMTConRoute.ParamString()  
---  
Python (Manager API)
MTConRoute.ParamString  
---  
Return Value
If successful, it returns a pointer to the string with the value. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConRoute](imtconroute.md "IMTConRoute") object.
To use the line after the object removal (call of the [IMTConRoute::Release](imtconroute_release.md "Release") method of this object), a copy of it should be created.
IMTConRoute::ParamString
Set the value of an additional parameter of the string type.
C++
MTAPIRES IMTConRoute::ParamString( LPCWSTR value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConRoute.ParamString( srting value // Value )  
---  
Python (Manager API)
MTConRoute.ParamString  
---  
Parameters
value
[in] Parameter value of the string type.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum value length is 128 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.