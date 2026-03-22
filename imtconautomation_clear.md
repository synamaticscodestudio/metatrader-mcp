# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutomation ](imtconautomation.md "IMTConAutomation")/ Clear | [](imtconautomation_assign.md "Assign") [](imtconautomation_id.md "ID") |
| --- | --- | --- |
| --- | --- |

IMTConAutomation::Clear
Clear an object.
C++
MTAPIRES IMTConAutomation::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutomation.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.