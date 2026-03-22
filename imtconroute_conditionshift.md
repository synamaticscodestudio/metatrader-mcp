# ConditionShift (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConRoute ](imtconroute.md "IMTConRoute")/ ConditionShift | [](imtconroute_conditionclear.md "ConditionClear") [](imtconroute_conditiontotal.md "ConditionTotal") |
| --- | --- | --- |
| --- | --- |

IMTConRoute::ConditionShift
Move an additional condition of rule application in the list.
C++
MTAPIRES IMTConRoute::ConditionShift( const UINT pos, // Position of a condition const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConRoute.ConditionShift( uint pos, // Position of a condition int  shift // Shift )  
---  
Python (Manager API)
MTConRoute.ConditionShift( pos, # Position of a condition shift # Shift )  
---  
Parameters
pos
[in] Position of an additional condition in the list, starting with 0.
shift
[in] Shift of a rule relative to its current position. A negative value means the shift to the top of the list, a positive value - to its end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.