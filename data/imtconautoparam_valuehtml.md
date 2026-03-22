# ValueHTML (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoParam ](imtconautoparam.md "IMTConAutoParam")/ ValueHTML | [](imtconautoparam_valueserver.md "ValueServer") [](imtconautomationsink.md "IMTConAutomationSink") |
| --- | --- | --- |
| --- | --- |

IMTConAutoParam::ValueHTML
Get the parameter value of type "HTML content".
C++
LPCWSTR IMTConAutoParam::ValueHTML() const  
---  
.NET (Gateway/Manager API)
string CIMTConAutoParam.ValueHTML()  
---  
Python
MTConAutoParam.ValueHTML  
---  
Return Value
If successful, the method returns a pointer to a string with the HTML contents. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for [IMTConAutoParam](imtconautoparam.md "IMTConAutoParam") object lifetime.
To use the string after the object removal (after a call of the [IMTConAutoParam::Release](imtconautoparam_release.md "Release") of this object), you should create the string copy.
These types of parameters are used for actions that send emails, web requests, etc.
IMTConAutoParam::ValueHTML
Set the parameter value of type "HTML content".
C++
MTAPIRES IMTConAutoParam::ValueHTML( LPCWSTR value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoParam.ValueHTML( string value // Value )  
---  
Python
MTConAutoParam.ValueHTML  
---  
Parameters
value
[in] HTML content.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The value length is limited to 128 characters (including the end-of-line character). If a string of a greater length is assigned, it will be truncated to this length.
These types of parameters are used for actions that send emails, web requests, etc.