# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessengerCountry ](imtconmessengercountry.md "IMTConMessengerCountry")/ Clear | [](imtconmessengercountry_assign.md "Assign") [](imtconmessengercountry_phonecode.md "PhoneCode") |
| --- | --- | --- |
| --- | --- |

IMTConMessengerCountry::Clear
Clear an object.
C++
MTAPIRES IMTConMessengerCountry::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessengerCountry.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
This method clears all fields ​​and removes nested objects.