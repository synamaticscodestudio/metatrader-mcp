# ConditionDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConRoute ](imtconroute.md "IMTConRoute")/ ConditionDelete | [](imtconroute_conditionupdate.md "ConditionUpdate") [](imtconroute_conditionclear.md "ConditionClear") |
| --- | --- | --- |
| --- | --- |

IMTConRoute::ConditionDelete
Delete an additional condition to apply a rule at the specified position.
C++
MTAPIRES IMTConRoute::ConditionDelete( const UINT pos // Position of a condition )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConRoute.ConditionDelete( uint pos // Position of a condition )  
---  
Python (Manager API)
MTConRoute.ConditionDelete( pos # Position of a condition )  
---  
Parameters
pos
[in] Position of an additional condition in the list, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.