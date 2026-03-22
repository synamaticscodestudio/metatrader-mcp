# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoAction ](imtconautoaction.md "IMTConAutoAction")/ Clear | [](imtconautoaction_assign.md "Assign") [](imtconautoaction_action.md "Action") |
| --- | --- | --- |
| --- | --- |

IMTConAutoAction::Clear
Clear an object.
C++
MTAPIRES IMTConAutoAction::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoAction.Clear()  
---  
Python
MTConAutoAction.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.