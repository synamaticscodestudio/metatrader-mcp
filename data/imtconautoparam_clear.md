# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoParam ](imtconautoparam.md "IMTConAutoParam")/ Clear | [](imtconautoparam_assign.md "Assign") [](imtconautoparam_condition.md "Condition") |
| --- | --- | --- |
| --- | --- |

IMTConAutoParam::Clear
Clear an object.
C++
MTAPIRES IMTConAutoParam::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoParam.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.