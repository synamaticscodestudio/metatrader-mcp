# Group (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessengerTemplate ](imtconmessengertemplate.md "IMTConMessengerTemplate")/ Id | [](imtconmessengertemplate_type.md "Type") [](imtconmessengersink.md "IMTConMessengerSink") |
| --- | --- | --- |
| --- | --- |

IMTConMessengerTemplate::Id
Get the message template identifier on the provider side.
C++
LPCWSTR IMTConMessengerTemplate::Id() const  
---  
.NET (Gateway/Manager API)
string CIMTConMessengerTemplate.Id()  
---  
Python
MTConMessengerTemplate.Id  
---  
Return Value
If successful, the method returns a pointer to the string with the identifier. Otherwise, NULL is returned.
Note
The pointer to the resulting string remains valid for the lifetime of the [IMTConMessengerTemplate](imtconmessengertemplate.md "IMTConMessengerTemplate") object.
To use the string after the object is deleted (by calling its [IMTConMessengerTemplate::Release](imtconmessengertemplate_release.md "Release") method), you should create a copy of it.
IMTConMessengerTemplate::Id
Set the message template identifier on the provider side.
C++
MTAPIRES IMTConMessengerTemplate::Id( LPCWSTR id // template identifier )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessengerTemplate.Id( srting id // template identifier )  
---  
Python
MTConMessengerTemplate.Id  
---  
Parameters
id
[in] Template identifier on the provider sied.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code is returned.