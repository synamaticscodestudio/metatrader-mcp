# AccessMask (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAccess ](imtconserveraccess.md "IMTConServerAccess")/ AccessMask | [](imtconserveraccess_accessflags.md "AccessFlags") [](imtconserveraccess_newsmax.md "NewsMax") |
| --- | --- | --- |
| --- | --- |

IMTConServerAccess::AccessMask
Get the allowed types of connection to the Access Server.
C++
UINT IMTConServerAccess::AccessMask() const  
---  
.NET (Gateway/Manager API)
EnAccessMask CIMTConServerAccess.AccessMask()  
---  
Python (Manager API)
MTConServerAccess.AccessMask  
---  
Return Value
A value from the [IMTConServerAccess::EnAccessMask](imtconserveraccess_enum.htm#enaccessmask) enumeration.
IMTConServerAccess::AccessMask
Set the allowed types of connection to the Access Server.
C++
MTAPIRES IMTConServerAccess::AccessMask( const UINT flags // Types of allowed connections )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAccess.AccessMask( EnAccessMask flags // Types of allowed connections )  
---  
Python (Manager API)
MTConServerAccess.AccessMask  
---  
Parameters
flags
[in] The allowed types of connection are passed using the [IMTConServerAccess::EnAccessMask](imtconserveraccess_enum.htm#enaccessmask) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.