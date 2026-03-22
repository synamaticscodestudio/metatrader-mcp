# Name (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutomation ](imtconautomation.md "IMTConAutomation")/ Name | [](imtconautomation_parentidset.md "ParentIDSet") [](imtconautomation_trigger.md "Trigger") |
| --- | --- | --- |
| --- | --- |

IMTConAutomation::Name
Get the name of the automation task.
C++
LPCWSTR IMTConAutomation::Name() const  
---  
.NET (Gateway/Manager API)
string CIMTConAutomation.Name()  
---  
Python
MTConAutomation.Name  
---  
Return Value
If successful, it returns a pointer to a string with the configuration name. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConAutomation](imtconmessenger.md "IMTConMessenger") object.
To use the string after the object removal (after a call of the [IMTConAutomation::Release](imtconmessenger_release.md "Release") method of this object), you should create the string copy.
IMTConAutomation::Name
Set the name of the automation task.
C++
MTAPIRES IMTConAutomation::Name( LPCWSTR name // Name of the automation task )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutomation.Name( srting name // Name of the automation task )  
---  
Python
MTConAutomation.Name  
---  
Parameters
name
[in] Name of the automation task.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The name length is limited 128 characters (including the end-of-line character). If a string of a greater length is assigned, it will be truncated to this length.