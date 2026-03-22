# ValueLanguage (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoCondition ](imtconautocondition.md "IMTConAutoCondition")/ ValueLanguage | [](imtconautocondition_valuepercent.md "ValuePercent") [](imtconautocondition_valueserver.md "ValueServer") |
| --- | --- | --- |
| --- | --- |

IMTConAutoCondition::ValueLanguage
Get a condition value expressing the language.
C++
UINT IMTConAutoCondition::ValueLanguage() const  
---  
.NET (Gateway/Manager API)
uint CIMTConAutoCondition.ValueLanguage()  
---  
Python
MTConAutoCondition.ValueLanguage  
---  
Return Value
The language in the LANGID format used in [MS Windows](https://msdn.microsoft.com/en-us/library/windows/desktop/dd318693) systems (a value from Prim.lang.identifier).
IMTConAutoCondition::ValueLanguage
Set a condition value expressing the language.
C++
MTAPIRES IMTConAutoCondition::ValueLanguage( const UINT value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoCondition.ValueLanguage( uint value // Value )  
---  
Python
MTConAutoCondition.ValueLanguage  
---  
Parameters
value
[in] The language in the LANGID format used in [MS Windows](https://msdn.microsoft.com/en-us/library/windows/desktop/dd318693) systems (a value from Prim.lang.identifier).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.