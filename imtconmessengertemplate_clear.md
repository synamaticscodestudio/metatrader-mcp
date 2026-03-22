# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessengerTemplate ](imtconmessengertemplate.md "IMTConMessengerTemplate")/ Clear | [](imtconmessengertemplate_assign.md "Assign") [](imtconmessengertemplate_type.md "Type") |
| --- | --- | --- |
| --- | --- |

IMTConMessengerTemplate::Clear
Clear an object.
C++
MTAPIRES IMTConMessengerTemplate::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessengerTemplate.Clear()  
---  
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code is returned.
Note
This method completely clears field values ​and deletes nested objects.