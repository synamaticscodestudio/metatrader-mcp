# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessengerGroup ](imtconmessengergroup.md "IMTConMessengerGroup")/ Clear | [](imtconmessengergroup_assign.md "Assign") [](imtconmessengergroup_group.md "Group") |
| --- | --- | --- |
| --- | --- |

IMTConMessengerGroup::Clear
Clear an object.
C++
MTAPIRES IMTConMessengerGroup::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessengerGroup.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
This method clears all fields ​​and removes nested objects.