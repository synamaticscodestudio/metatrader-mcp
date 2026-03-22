# ConditionAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConRoute ](imtconroute.md "IMTConRoute")/ ConditionAdd | [](imtconroute_paramtime.md "ParamTime") [](imtconroute_conditionupdate.md "ConditionUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConRoute::ConditionAdd
Add an additional condition to apply a rule.
C++
MTAPIRES IMTConRoute::ConditionAdd( IMTConCondition* condition // An object of the additional condition )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConRoute.ConditionAdd( CIMTConCondition condition // An object of the additional condition )  
---  
Python (Manager API)
MTConRoute.ConditionAdd( condition # An object of the additional condition )  
---  
Parameters
condition
[in] An object of the additional condition.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.