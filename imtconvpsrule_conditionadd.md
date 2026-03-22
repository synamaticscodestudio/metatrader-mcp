# ConditionAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPSRule ](imtconvpsrule.md "IMTConVPSRule")/ ConditionAdd | [](imtconvpsrule_name.md "Name") [](imtconvpsrule_conditionupdate.md "ConditionUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConVPSRule::ConditionAdd
Add a condition to the VPS allocation rule.
C++
MTAPIRES IMTConVPSRule::ConditionAdd( IMTConVPSCondition* cfg // Condition object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConRoute.ConditionAdd( CIMTConVPSCondition cfg // Condition object )  
---  
Python
MTConRoute.ConditionAdd( cfg # Condition object )  
---  
Parameters
cfg
[in] [IMTConVPSCondition](imtconvpscondition.md "IMTConVPSCondition") condition object.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.