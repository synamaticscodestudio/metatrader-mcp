# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Mail Servers ](config_email.md "Mail Servers") / [ IMTConEmail ](imtconemail.md "IMTConEmail")/ Clear | [](imtconemail_assign.md "Assign") [](imtconemail_name.md "Name") |
| --- | --- | --- |
| --- | --- |

IMTConEmail::Clear
Clear an object.
C++
MTAPIRES IMTConEmail::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConEmail.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
This method clears all fields ​​and removes nested objects.