# RuleShift (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverage ](imtconleverage.md "IMTConLeverage")/ RuleShift | [](imtconleverage_ruleclear.md "RuleClear") [](imtconleverage_ruletotal.md "RuleTotal") |
| --- | --- | --- |
| --- | --- |

IMTConLeverage::RuleShift
Move a rule in a floating margin configuration.
C++
MTAPIRES IMTConLeverage::RuleShift( const UINT pos, // Position of the rule const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConLeverage.RuleShift( uint pos, // Position of the rule int  shift // Shift )  
---  
Python (Manager API)
MTConLeverage.RuleShift( pos, # Position of the rule shift # Shift )  
---  
Parameters
pos
[in] Position of the rule in the list, starting from 0.
shift
[in] Shift of a rule relative to its current position. A negative value means shift towards the top of the list, while a positive value shifts the item towards the end.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.