# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConCondition ](imtconcondition.md "IMTConCondition")/ Clear | [](imtconcondition_assign.md "Assign") [](imtconcondition_condition.md "Condition") |
| --- | --- | --- |
| --- | --- |

IMTConCondition::Clear
Clear an object.
C++
MTAPIRES IMTConCondition::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCondition.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.