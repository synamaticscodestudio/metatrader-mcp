# RuleClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPS ](imtconvps.md "IMTConVPS")/ RuleClear | [](imtconvps_ruledelete.md "RuleDelete") [](imtconvps_ruleshift.md "RuleShift") |
| --- | --- | --- |
| --- | --- |

IMTConVPS::RuleClear
Clear the list of VPS allocation rules.
C++
MTAPIRES IMTConVPS::RuleClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPS.RuleClear()  
---  
Python
MTConVPS.RuleClear()  
---  
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method deletes all rules from the VPS allocation settings.