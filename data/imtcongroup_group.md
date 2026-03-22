# Group (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ Group | [](imtcongroup_clear.md "Clear") [](imtcongroup_server.md "Server") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::Group
Get the name of a group, including a path to it in accordance with the hierarchy.
C++
LPCWSTR IMTConGroup::Group() const  
---  
.NET (Gateway/Manager API)
string CIMTConGroup.Group()  
---  
Python (Manager API)
MTConGroup.Group  
---  
Return Value
If successful, it returns a pointer to a string with the name of the group. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConGroup](imtcongroup.md "IMTConGroup") object.
To use the string after the object removal (call of the [IMTConGroup::Release](imtcongroup_release.md "Release") method of this object), a copy of it should be created.
IMTConGroup::Group
Set the name of a group, including a path to it in accordance with the hierarchy.
C++
MTAPIRES IMTConGroup::Group( LPCWSTR group // Group name )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.Group( string group // Group name )  
---  
Python (Manager API)
MTConGroup.Group  
---  
Parameters
group
[in] The name of a group, including a path to it in accordance with the hierarchy.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum length of the group name is 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.