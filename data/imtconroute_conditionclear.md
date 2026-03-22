# ConditionClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConRoute ](imtconroute.md "IMTConRoute")/ ConditionClear | [](imtconroute_conditiondelete.md "ConditionDelete") [](imtconroute_conditionshift.md "ConditionShift") |
| --- | --- | --- |
| --- | --- |

IMTConRoute::ConditionClear
Clear the list of all additional conditions to apply a rule.
C++
MTAPIRES IMTConRoute::ConditionClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConRoute.ConditionClear()  
---  
Python (Manager API)
MTConRoute.ConditionClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method removes all an additional conditions to apply a rule.