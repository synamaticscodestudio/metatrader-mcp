# ValueLanguage (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoParam ](imtconautoparam.md "IMTConAutoParam")/ ValueLanguage | [](imtconautoparam_valuepercent.md "ValuePercent") [](imtconautoparam_valueserver.md "ValueServer") |
| --- | --- | --- |
| --- | --- |

IMTConAutoParam::ValueLanguage
Get the value of the parameter that expresses the language.
C++
UINT IMTConAutoParam::ValueLanguage() const  
---  
.NET (Gateway/Manager API)
uint CIMTConAutoParam.ValueLanguage()  
---  
Python
MTConAutoParam.ValueLanguage  
---  
Return Value
The language in the LANGID format used in [MS Windows](https://msdn.microsoft.com/en-us/library/windows/desktop/dd318693) systems (a value from Prim.lang.identifier).
IMTConAutoParam::ValueLanguage
Set the value of the parameter that expresses the language.
C++
MTAPIRES IMTConAutoParam::ValueLanguage( const UINT value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoParam.ValueLanguage( uint value // Value )  
---  
Python
MTConAutoParam.ValueLanguage  
---  
Parameters
value
[in] The language in the LANGID format used in [MS Windows](https://msdn.microsoft.com/en-us/library/windows/desktop/dd318693) systems (a value from Prim.lang.identifier).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.