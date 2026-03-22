# Name (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoAction ](imtconautoaction.md "IMTConAutoAction")/ Name | [](imtconautoaction_action.md "Action") [](imtconautoaction_paramadd.md "ParamAdd") |
| --- | --- | --- |
| --- | --- |

IMTConAutoAction::Name
Get the name of the action in the routing task.
C++
LPCWSTR IMTConAutoAction::Name() const  
---  
.NET (Gateway/Manager API)
string CIMTConAutoAction.Name()  
---  
Python
MTConAutoAction.Name  
---  
Return Value
If successful, the method returns a pointer to a string with the action name. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConAutoAction](imtconautoaction.md "IMTConAutoAction") object.
To use the string after the object removal (after a call of the [IMTConAutoAction::Release](imtconautoaction_release.md "Release") method of this object), a copy of it should be created.
IMTConAutoAction::Name
Set the name of the action in the routing task.
C++
MTAPIRES IMTConAutoAction::Name( LPCWSTR name // Action name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoAction.Name( string name // Action name )  
---  
Python
MTConAutoAction.Name  
---  
Parameters
name
[in] The name of the action in the routing task.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The name length is limited to 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be truncated to this length.