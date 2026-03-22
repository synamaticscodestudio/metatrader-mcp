# PermissionsFlags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ PermissionsFlags | [](imtcongroup_server.md "Server") [](imtcongroup_authmode.md "AuthMode") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::PermissionsFlags
Get permission flags for the group.
C++
UINT64 IMTConGroup::PermissionsFlags() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConGroup.PermissionsFlags()  
---  
Python (Manager API)
MTConGroup.PermissionsFlags  
---  
Return Value
A value from the [IMTConGroup::EnPermissionsFlags](imtcongroup_enum.htm#enpermissionsflags) enumeration.
IMTConGroup::PermissionsFlags
Set permission flags for the group.
C++
MTAPIRES IMTConGroup::PermissionsFlags( const UINT64 flags // Permission flags )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.PermissionsFlags( ulong flags // Permission flags )  
---  
Python (Manager API)
MTConGroup.PermissionsFlags  
---  
Parameters
flags
[in] The [IMTConGroup:EnPermissionsFlags](imtcongroup_enum.htm#enpermissionsflags) enumeration is used for passing permission flags..
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.