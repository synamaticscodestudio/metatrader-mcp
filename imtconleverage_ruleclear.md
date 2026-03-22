# RuleClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverage ](imtconleverage.md "IMTConLeverage")/ RuleClear | [](imtconleverage_ruledelete.md "RuleDelete") [](imtconleverage_ruleshift.md "RuleShift") |
| --- | --- | --- |
| --- | --- |

IMTConLeverage::RuleClear
Clear the list of rules in a floating margin configuration.
C++
MTAPIRES IMTConLeverage::RuleClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConLeverage.RuleClear()  
---  
Python (Manager API)
MTConLeverage.RuleClear()  
---  
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method removes all rules from a configuration.