# ValueString (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConCondition ](imtconcondition.md "IMTConCondition")/ ValueString | [](imtconcondition_valuedouble.md "ValueDouble") [](imtconcondition_valuecolor.md "ValueColor") |
| --- | --- | --- |
| --- | --- |

IMTConCondition::ValueString
Get the value of a condition of the string type.
C++
LPCWSTR IMTConCondition::ValueString() const  
---  
.NET (Gateway/Manager API)
string CIMTConCondition.ValueString()  
---  
Python (Manager API)
MTConCondition.ValueString  
---  
Return Value
If successful, it returns a pointer to the string with the value. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConCondition](imtconcondition.md "IMTConCondition") object.
To use the line after the object removal (call of the [IMTConCondition::Release](imtconcondition_release.md "Release") method of this object), a copy of it should be created.
IMTConCondition::ValueString
Set the value of a condition of the string type.
C++
MTAPIRES IMTConCondition::ValueString( LPCWSTR value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCondition.ValueString( string value // Value )  
---  
Python (Manager API)
MTConCondition.ValueString  
---  
Parameters
value
[in] A value of the string type.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum value length is 128 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.