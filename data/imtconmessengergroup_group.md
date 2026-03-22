# Group (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Messengers ](config_messenger.md "Messengers") / [ IMTConMessengerGroup ](imtconmessengergroup.md "IMTConMessengerGroup")/ Group | [](imtconmessengergroup_clear.md "Clear") [](imtconmessengertemplate.md "IMTConMessengerTemplate") |
| --- | --- | --- |
| --- | --- |

IMTConMessengerGroup::Group
Get the group of accounts for which the messenger is used.
C++
LPCWSTR IMTConMessengerGroup::Group() const  
---  
.NET (Gateway/Manager API)
string CIMTConMessengerGroup.Group()  
---  
Python
MTConMessengerGroup.Group  
---  
Return Value
If successful, the method returns a pointer to a string with the full path to the group. Otherwise, NULL is returned.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConMessengerGroup](imtconmessengergroup.md "IMTConMessengerGroup") object.
To use the string after the object removal (after a call of the [IMTConMessengerGroup::Release](imtconmessengergroup_release.md "Release") method of this object), you should create the string copy.
IMTConMessengerGroup::Group
Set the group of accounts for which the messenger is used.
C++
MTAPIRES IMTConMessengerGroup::Group( LPCWSTR group // Group )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessengerGroup.Group( srting group // Group )  
---  
Python
MTConMessengerGroup.Group  
---  
Parameters
group
[in] Full path to the group or group mask. The mask is specified using "*" (any value) and "!" (exception). For example: "demo*,!demoforex" - all groups with the names beginning with 'demo', except for the group demoforex.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.