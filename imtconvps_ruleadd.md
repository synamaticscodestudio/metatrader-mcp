# RuleAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPS ](imtconvps.md "IMTConVPS")/ RuleAdd | [](imtconvps_mql5password.md "MessageTemplate") [](imtconvps_ruleupdate.md "RuleUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConVPS::RuleAdd
Add a VPS allocation rule.
C++
MTAPIRES IMTConVPS::RuleAdd( IMTConVPSRule* rule // Rule object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPS.RuleAdd( CIMTConVPSRule rule // Rule object )  
---  
Python
MTConVPS.RuleAdd( rule # Rule object )  
---  
Parameters
rule
[in] [IMTConVPSRule](imtconvpsrule.md "IMTConVPSRule") rule object.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.