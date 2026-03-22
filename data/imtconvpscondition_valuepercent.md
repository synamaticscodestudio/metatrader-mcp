# ValuePercent (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPSCondition ](imtconvpscondition.md "IMTConVPSCondition")/ ValuePercent | [](imtconvpscondition_valuedate.md "ValueDate") [](imtconvpscondition_valuelanguage.md "ValueLanguage") |
| --- | --- | --- |
| --- | --- |

IMTConVPSCondition::ValuePercent
Get a condition value expressing a percentage.
C++
UINT IMTConVPSCondition::ValuePercent() const  
---  
.NET (Gateway/Manager API)
uint CIMTConVPSCondition.ValuePercent()  
---  
Python
MTConVPSCondition.ValuePercent  
---  
Return Value
Percentage value.
IMTConVPSCondition::ValuePercent
Set a condition value expressing a percentage.
C++
MTAPIRES IMTConVPSCondition::ValuePercent( const UINT value // Value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPSCondition.ValuePercent( uint value // Value )  
---  
Python
MTConVPSCondition.ValuePercent  
---  
Parameters
value
[in] Percentage value.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.