# RuleUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverage ](imtconleverage.md "IMTConLeverage")/ RuleUpdate | [](imtconleverage_ruleadd.md "RuleAdd") [](imtconleverage_ruledelete.md "RuleDelete") |
| --- | --- | --- |
| --- | --- |

IMTConLeverage::RuleUpdate
Update a rule in a floating margin configuration.
C++
MTAPIRES IMTConLeverage::RuleUpdate( const UINT pos, // Rule position IMTConLeverageRule* cfg // Rule object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConLeverage.RuleUpdate( uint pos, // Rule position CIMTConLeverageRule cfg // Rule object )  
---  
Python (Manager API)
MTConLeverage.RuleUpdate( pos, # Rule position cfg  # Rule object )  
---  
Parameters
pos
[in] Position of the rule in the list, starting from 0.
cfg
[in] [IMTConLeverageRule](imtconleveragerule.md "IMTConLeverageRule") rule object.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.