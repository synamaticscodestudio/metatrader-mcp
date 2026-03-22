# RuleDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPS ](imtconvps.md "IMTConVPS")/ RuleDelete | [](imtconvps_ruleupdate.md "RuleUpdate") [](imtconvps_ruleclear.md "RuleClear") |
| --- | --- | --- |
| --- | --- |

IMTConVPS::RuleDelete
Delete a VPS allocation rule.
C++
MTAPIRES IMTConVPS::RuleDelete( const UINT pos // Rule position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPS.RuleDelete( uint pos // Rule position )  
---  
Python
MTConVPS.RuleDelete( uint pos // Rule position )  
---  
Parameters
pos
[in] Rule position in the list starting from 0.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.