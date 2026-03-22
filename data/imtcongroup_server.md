# Server (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ Server | [](imtcongroup_group.md "Group") [](imtcongroup_permissionsflags.md "PermissionsFlags") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::Server
Get the ID of the trade server, to which the group is linked.
C++
UINT64 IMTConGroup::Server() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConGroup.Server()  
---  
Python (Manager API)
MTConGroup.Server  
---  
Return Value
The ID of the trade server, to which the group is linked.
IMTConGroup::Server
Set the ID of the trade server, to which the group is linked.
C++
MTAPIRES IMTConGroup::Server( const UINT64 server // Server ID )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.Server( ulong server // Server ID )  
---  
Python (Manager API)
MTConGroup.Server  
---  
Parameters
server
[in] The ID of the server, to which the group is linked.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.