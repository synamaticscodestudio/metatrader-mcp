# RuleDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverage ](imtconleverage.md "IMTConLeverage")/ RuleDelete | [](imtconleverage_ruleupdate.md "RuleUpdate") [](imtconleverage_ruleclear.md "RuleClear") |
| --- | --- | --- |
| --- | --- |

IMTConLeverage::RuleDelete
Delete a rule from a floating margin configuration.
C++
MTAPIRES IMTConLeverage::RuleDelete( const UINT pos // Rule position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConLeverage.RuleDelete( uint pos // Rule position )  
---  
Python (Manager API).NET (Gateway/Manager API)
MTConLeverage.RuleDelete( pos # Rule position )  
---  
Parameters
pos
[in] Position of the rule in the list, starting from 0.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.