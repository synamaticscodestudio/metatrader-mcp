# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessenger ](imtconmessenger.md "IMTConMessenger")/ Clear | [](imtconmessenger_assign.md "Assign") [](imtconmessenger_name.md "Name") |
| --- | --- | --- |
| --- | --- |

IMTConMessenger::Clear
Clear an object.
C++
MTAPIRES IMTConMessenger::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessenger.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
This method clears all fields ​​and removes nested objects.