# AntifloodErrors (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAccess ](imtconserveraccess.md "IMTConServerAccess")/ AntifloodErrors | [](imtconserveraccess_antifloodconnects.md "AntifloodConnects") [](imtconserveraccess_pointsadd.md "PointsAdd") |
| --- | --- | --- |
| --- | --- |

IMTConServerAccess::AntifloodErrors
Get the maximum number of incorrect connections, after which the IP address is temporarily blocked.
C++
UINT IMTConServerAccess::AntifloodErrors() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServerAccess.AntifloodErrors()  
---  
Python (Manager API)
MTConServerAccess.AntifloodErrors  
---  
Return Value
The maximum number of incorrect connections.
IMTConServerAccess::AntifloodErrors
Set the maximum number of incorrect connections, after which the IP address is temporarily blocked.
C++
MTAPIRES IMTConServerAccess::AntifloodErrors( const UINT errors // The number of incorrect connections )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAccess.AntifloodErrors( uint errors // The number of incorrect connections )  
---  
Python (Manager API)
MTConServerAccess.AntifloodErrors  
---  
Parameters
errors
[in] The maximum number of incorrect connections.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.