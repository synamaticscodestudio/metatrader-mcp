# TierClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageRule ](imtconleveragerule.md "IMTConLeverageRule")/ TierClear | [](imtconleveragerule_tierdelete.md "TierDelete") [](imtconleveragerule_tiershift.md "TierShift") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageRule::TierClear
Clear the list of levels in a floating margin rule.
C++
MTAPIRES IMTConLeverageRule::TierClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConLeverageRule.TierClear()  
---  
Python (Manager API)
MTConLeverageRule.TierClear()  
---  
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method removes all rules from a rule.