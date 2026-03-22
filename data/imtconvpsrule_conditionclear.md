# ConditionClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPSRule ](imtconvpsrule.md "IMTConVPSRule")/ ConditionClear | [](imtconvpsrule_conditiondelete.md "ConditionDelete") [](imtconvpsrule_conditionshift.md "ConditionShift") |
| --- | --- | --- |
| --- | --- |

IMTConVPSRule::ConditionClear
Clear the list of conditions in the VPS allocation rule.
C++
MTAPIRES IMTConVPSRule::ConditionClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPSRule.ConditionClear()  
---  
Python
MTConVPSRule.ConditionClear()  
---  
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method deletes all conditions from the VPS allocation rule.