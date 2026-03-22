# RuleUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPS ](imtconvps.md "IMTConVPS")/ RuleUpdate | [](imtconvps_ruleadd.md "RuleAdd") [](imtconvps_ruledelete.md "RuleDelete") |
| --- | --- | --- |
| --- | --- |

IMTConVPS::RuleUpdate
Edit a VPS allocation rule.
C++
MTAPIRES IMTConVPS::RuleUpdate( const UINT pos, // Rule position const IMTConVPSRule* rule // Rule object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPS.RuleUpdate( uint pos, // Rule position CIMTConVPSRule rule // Rule object )  
---  
Python
MTConVPS.RuleUpdate( pos, # Rule position rule # Rule object )  
---  
MTConVPS.RuleSet( rule_list # List of rules )  
---  
Parameters
pos
[in] Rule position in the list starting from 0.
rule
[in] [IMTConVPSRule](imtconvpsrule.md "IMTConVPSRule") rule object.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.