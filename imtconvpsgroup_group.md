# Group (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPSGroup ](imtconvpsgroup.md "IMTConVPSGroup")/ Group | [](imtconvpsgroup_clear.md "Clear") [](imtconvpsgroup_minbalance.md "MinBalance") |
| --- | --- | --- |
| --- | --- |

IMTConVPSGroup::Group
Get a group of accounts the VPS sponsorship is allowed for.
C++
LPCWSTR IMTConVPSGroup::Group() const  
---  
.NET (Gateway/Manager API)
string CIMTConVPSGroup.Group()  
---  
Python
MTConVPSGroup.Group  
---  
Return Value
If successful, it returns a pointer to a string with the group. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConVPSGroup](imtconvpsgroup.md "IMTConVPSGroup") object.
To use the string after the object removal (call of the [IMTConVPSGroup::Release](imtconvpsgroup_release.md "Release") method of this object), a copy of it should be created.
IMTConVPSGroup::Group
Set a group of accounts the VPS sponsorship is allowed for.
C++
MTAPIRES IMTConVPSGroup::Group( LPCWSTR group // group )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPSGroup.Group( srting group // group )  
---  
Python
MTConVPSGroup.Group  
---  
Parameters
group
[in] Full path to the group or group mask. The mask is specified using characters "*" (any value) and "!" (exception). For example: "demo*,!demoforex" - all groups with the names beginning with 'demo', except for the group demoforex.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.