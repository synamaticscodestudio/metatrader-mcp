# ConditionDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPSRule ](imtconvpsrule.md "IMTConVPSRule")/ ConditionDelete | [](imtconvpsrule_conditionupdate.md "ConditionUpdate") [](imtconvpsrule_conditionclear.md "ConditionClear") |
| --- | --- | --- |
| --- | --- |

IMTConVPSRule::ConditionDelete
Delete a condition from the VPS allocation rule.
C++
MTAPIRES IMTConVPSRule::ConditionDelete( const UINT pos // Condition position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPSRule.ConditionDelete( uint pos // Condition position )  
---  
Python
MTConVPSRule.ConditionDelete( pos # Condition position )  
---  
Parameters
pos
[in] Position of a condition in the list, starting at 0.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.