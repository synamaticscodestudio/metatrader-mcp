# ConditionUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConRoute ](imtconroute.md "IMTConRoute")/ ConditionUpdate | [](imtconroute_conditionadd.md "ConditionAdd") [](imtconroute_conditiondelete.md "ConditionDelete") |
| --- | --- | --- |
| --- | --- |

IMTConRoute::ConditionUpdate
Change an additional condition to apply a rule at the specified position.
C++
MTAPIRES IMTConRoute::ConditionUpdate( const UINT pos, // Position of a condition const IMTConCondition* condition // An object of the additional condition )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConRoute.ConditionUpdate( uint pos, // Position of a condition CIMTConCondition condition // An object of the additional condition )  
---  
Python (Manager API)
MTConRoute.ConditionUpdate( pos, # Position of a condition condition # An object of the additional condition )  
---  
MTConRoute.ConditionSet( condition_list # A list of additional conditions )  
---  
Parameters
pos
[in] Position of an additional condition in the list, starting with 0.
condition
[in] An object of the additional condition.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.