# RuleAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverage ](imtconleverage.md "IMTConLeverage")/ RuleAdd | [](imtconleverage_name.md "Name") [](imtconleverage_ruleupdate.md "RuleUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConLeverage::RuleAdd
Add a rule to a floating margin configuration.
C++
MTAPIRES IMTConLeverage::RuleAdd( IMTConLeverageRule* cfg // Rule object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConLeverage.RuleAdd( CIMTConLeverageRule cfg // Rule object )  
---  
Python (Manager API)
MTConLeverage.RuleAdd( cfg # Rule object )  
---  
Parameters
cfg
[in] [IMTConLeverageRule](imtconleveragerule.md "IMTConLeverageRule") rule object.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.