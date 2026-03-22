# ValueString (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoParam ](imtconautoparam.md "IMTConAutoParam")/ ValueString | [](imtconautoparam_valuedouble.md "ValueDouble") [](imtconautoparam_valuecolor.md "ValueColor") |
| --- | --- | --- |
| --- | --- |

IMTConAutoParam::ValueString
Get a parameter value of the string type.
C++
LPCWSTR IMTConAutoParam::ValueString() const  
---  
.NET (Gateway/Manager API)
string CIMTConAutoParam.ValueString()  
---  
Python
MTConAutoParam.ValueString  
---  
Return Value
If successful, the method returns a pointer to the string with the value. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for [IMTConAutoParam](imtconautoparam.md "IMTConAutoParam") object lifetime.
To use the string after the object removal (after a call of the [IMTConAutoParam::Release](imtconautoparam_release.md "Release") of this object), you should create the string copy.
IMTConAutoParam::ValueString
Set a parameter value of the string type.
C++
MTAPIRES IMTConAutoParam::ValueString( LPCWSTR value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoParam.ValueString( string value // Value )  
---  
Python
MTConAutoParam.ValueString  
---  
Parameters
value
[in] A value of the string type.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The value length is limited to 128 characters (including the end-of-line character). If a string of a greater length is assigned, it will be truncated to this length.