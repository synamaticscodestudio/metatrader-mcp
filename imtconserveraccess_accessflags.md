# AccessFlags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAccess ](imtconserveraccess.md "IMTConServerAccess")/ AccessFlags | [](imtconserveraccess_prioritycurrent.md "PriorityCurrent") [](imtconserveraccess_accessmask.md "AccessMask") |
| --- | --- | --- |
| --- | --- |

IMTConServerAccess::AccessFlags
Getting additional parameters of the Access Server.
C++
UINT IMTConServerAccess::AccessFlags() const  
---  
.NET (Gateway/Manager API)
EnAccessFlags CIMTConServerAccess.AccessFlags()  
---  
Python (Manager API)
MTConServerAccess.AccessFlags  
---  
Return Value
A value of the [IMTConServerAccess::EnAccessFlags](imtconserveraccess_enum.htm#enaccessflags) enumeration.
IMTConServerAccess::AccessFlags
Setting additional parameters of the Access Server.
C++
MTAPIRES IMTConServerAccess::AccessFlags( const UINT flags // Flags of parameters )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAccess.AccessFlags( EnAccessFlags flags // Flags of parameters )  
---  
Python (Manager API)
MTConServerAccess.AccessFlags  
---  
Settings
flags
[in] Settings of the access server are passed using flags from the [IMTConServerAccess::EnAccessFlags](imtconserveraccess_enum.htm#enaccessflags) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.