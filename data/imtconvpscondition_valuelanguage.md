# ValueLanguage (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPSCondition ](imtconvpscondition.md "IMTConVPSCondition")/ ValueLanguage | [](imtconvpscondition_valuepercent.md "ValuePercent") [](imtconvpsgroup.md "IMTConVPSGroup") |
| --- | --- | --- |
| --- | --- |

IMTConVPSCondition::ValueLanguage
Get a condition value expressing the language.
C++
UINT IMTConVPSCondition::ValueLanguage() const  
---  
.NET (Gateway/Manager API)
uint CIMTConVPSCondition.ValueLanguage()  
---  
Python
MTConVPSCondition.ValueLanguage  
---  
Return Value
The language in the LANGID format used in [MS Windows](https://msdn.microsoft.com/en-us/library/windows/desktop/dd318693) systems (a value from Prim.lang.identifier).
IMTConVPSCondition::ValueLanguage
Set a condition value expressing the language.
C++
MTAPIRES IMTConVPSCondition::ValueLanguage( const UINT value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPSCondition.ValueLanguage( uint value // Value )  
---  
Python
MTConVPSCondition.ValueLanguage  
---  
Parameters
value
[in] The language in the LANGID format used in [MS Windows](https://msdn.microsoft.com/en-us/library/windows/desktop/dd318693) systems (a value from Prim.lang.identifier).
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.