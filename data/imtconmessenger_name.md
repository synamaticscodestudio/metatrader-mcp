# Name (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessenger ](imtconmessenger.md "IMTConMessenger")/ Name | [](imtconmessenger_clear.md "Clear") [](imtconmessenger_sender.md "Sender") |
| --- | --- | --- |
| --- | --- |

IMTConMessenger::Name
Get the messenger configuration name.
C++
LPCWSTR IMTConMessenger::Name() const  
---  
.NET (Gateway/Manager API)
string CIMTConMessenger.Name()  
---  
Python
MTConMessenger.Name  
---  
Return Value
If successful, the method returns a pointer to a string with the messenger name. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConMessenger](imtconmessenger.md "IMTConMessenger") object.
You should create a string copy if you want to use it after the object removal (call of the [IMTConMessenger::Release](imtconmessenger_release.md "Release") method of this object).
IMTConMessenger::Name
Set the messenger configuration name.
C++
MTAPIRES IMTConMessenger::Name( LPCWSTR name // Messenger name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessenger.Name( srting name // Messenger name )  
---  
Python
MTConMessenger.Name  
---  
Parameters
name
[in] Messenger name.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The maximum name length is 128 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.