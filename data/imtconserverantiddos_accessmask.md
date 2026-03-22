# AccessMask (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAntiDDoS ](imtconserverantiddos.md "IMTConServerAntiDDoS")/ AccessMask | [](imtconserverantiddos_priority.md "Priority") [](imtconserverantiddos_pointsadd.md "PointsAdd") |
| --- | --- | --- |
| --- | --- |

IMTConServerAntiDDoS::AccessMask
Get the allowed types of connection to the Anti-DDoS Server.
C++
UINT IMTConServerAntiDDoS::AccessMask() const  
---  
.NET (Gateway/Manager API)
EnAccessMask CIMTConServerAntiDDoS.AccessMask()  
---  
Python (Manager API)
MTConServerAntiDDoS.AccessMask  
---  
Return Value
A value of the [IMTConServerAntiDDoS::EnAccessMask](imtconserverantiddos_enum.htm#enaccessmask) enumeration.
IMTConServerAntiDDoS::AccessMask
Set the allowed types of connection to the Anti-DDoS Server.
C++
MTAPIRES IMTConServerAntiDDoS::AccessMask( const UINT flags // Types of allowed connections )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAntiDDoS.AccessMask( EnAccessMask flags // Types of allowed connections )  
---  
Python (Manager API)
MTConServerAntiDDoS.AccessMask  
---  
Parameters
flags
[in] To pass the types of allowed connections the [IMTConServerAntiDDoS::EnAccessMask](imtconserverantiddos_enum.htm#enaccessmask) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.