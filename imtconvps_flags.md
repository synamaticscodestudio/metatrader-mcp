# Flags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPS ](imtconvps.md "IMTConVPS")/ Flags | [](imtconvps_clear.md "Clear") [](imtconvps_mql5login.md "MQL5Login") |
| --- | --- | --- |
| --- | --- |

IMTConVPS::Flags
Get additional Sponsored VPS settings.
C++
UINT64 IMTConVPS::Flags() const  
---  
.NET (Gateway/Manager API)
EnFlags CIMTConVPS.Flags()  
---  
Python
MTConVPS.Flags  
---  
Return Value
Additional settings as the values of the [IMTConVPS::EnFlags](imtconvps_enum.htm#enflags) enumeration.
IMTConVPS::Flags
Set additional Sponsored VPS settings.
C++
MTAPIRES IMTConVPS::Flags( const UINT64 flags // Sponsored VPS settings )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPS.Flags( EnFlags flags // Sponsored VPS settings )  
---  
Python
MTConVPS.Flags  
---  
Parameters
flags
[in] Additional settings as the values of the [IMTConVPS::EnFlags](imtconvps_enum.htm#enflags) enumeration.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.