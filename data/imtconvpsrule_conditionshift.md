# ConditionShift (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPSRule ](imtconvpsrule.md "IMTConVPSRule")/ ConditionShift | [](imtconvpsrule_conditionclear.md "ConditionClear") [](imtconvpsrule_conditiontotal.md "ConditionTotal") |
| --- | --- | --- |
| --- | --- |

IMTConVPSRule::ConditionShift
Move a condition in the list in the VPS allocation rule.
C++
MTAPIRES IMTConVPSRule::ConditionShift( const UINT pos, // Condition position const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPSRule.ConditionShift( uint pos, // Condition position int  shift // Shift )  
---  
Python
MTConVPSRule.ConditionShift( pos, # Condition position shift # Shift )  
---  
Parameters
pos
[in] Position of a condition in the list, starting at 0.
shift
[in] Condition shift relative to its current position. A negative value means shift towards the top of the list, and a positive value shifts the item towards the end.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.