# RuleShift (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPS ](imtconvps.md "IMTConVPS")/ RuleShift | [](imtconvps_ruleclear.md "RuleClear") [](imtconvps_ruletotal.md "RuleTotal") |
| --- | --- | --- |
| --- | --- |

IMTConVPS::RuleShift
Move the VPS allocation rule in the list.
C++
MTAPIRES IMTConVPS::RuleShift( const UINT pos, // Rule position const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPS.RuleShift( uint pos, // Rule position int  shift // Shift )  
---  
Python
MTConVPS.RuleShift( pos, # Rule position shift # Shift )  
---  
Parameters
pos
[in] Rule position in the list starting from 0.
shift
[in] Shift of a rule relative to its current position. A negative value means shift towards the top of the list, and a positive value shifts the item towards the end.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.