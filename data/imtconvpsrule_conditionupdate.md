# ConditionUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPSRule ](imtconvpsrule.md "IMTConVPSRule")/ ConditionUpdate | [](imtconvpsrule_conditionadd.md "ConditionAdd") [](imtconvpsrule_conditiondelete.md "ConditionDelete") |
| --- | --- | --- |
| --- | --- |

IMTConVPSRule::ConditionUpdate
Edit a condition in the VPS allocation rule.
C++
MTAPIRES IMTConVPSRule::ConditionUpdate( const UINT pos, // Condition position const IMTConVPSRule* condition // Condition object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPSRule.ConditionUpdate( uint pos, // Condition position CIMTConVPSRule condition // Condition object )  
---  
Python
MTConVPSRule.ConditionUpdate( pos, # Condition position condition # Condition object )  
---  
MTConVPSRule.ConditionSet( condition_list # List of conditions )  
---  
Parameters
pos
[in] Position of a condition in the list, starting at 0.
condition
[in] [IMTConVPSCondition](imtconvpscondition.md "IMTConVPSCondition") condition object.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.