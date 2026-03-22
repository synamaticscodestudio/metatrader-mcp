# ValueString (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoCondition ](imtconautocondition.md "IMTConAutoCondition")/ ValueString | [](imtconautocondition_valuedouble.md "ValueDouble") [](imtconautocondition_valuecolor.md "ValueColor") |
| --- | --- | --- |
| --- | --- |

IMTConAutoCondition::ValueString
Get a condition value of the string type.
C++
LPCWSTR IMTConAutoCondition::ValueString() const  
---  
.NET (Gateway/Manager API)
string CIMTConAutoCondition.ValueString()  
---  
Python
MTConAutoCondition.ValueString  
---  
Return Value
If successful, the method returns a pointer to the string with the value. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the [IMTConAutoCondition](imtconautocondition.md "IMTConAutoCondition") object lifetime.
To use the string after the object removal (after a call of the [IMTConAutoCondition::Release](imtconautocondition_release.md "Release") method of this object), you should create the string copy.
IMTConAutoCondition::ValueString
Set a condition value of the string type.
C++
MTAPIRES IMTConAutoCondition::ValueString( LPCWSTR value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoCondition.ValueString( string value // Value )  
---  
Python
MTConAutoCondition.ValueString  
---  
Parameters
value
[in] A value of the string type.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The value length is limited to 128 characters (including the end-of-line character). If a string of a greater length is assigned, it will be truncated to this length.