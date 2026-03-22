# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoCondition ](imtconautocondition.md "IMTConAutoCondition")/ Clear | [](imtconautocondition_assign.md "Assign") [](imtconautocondition_condition.md "Condition") |
| --- | --- | --- |
| --- | --- |

IMTConAutoCondition::Clear
Clear an object.
C++
MTAPIRES IMTConAutoCondition::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoCondition.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.