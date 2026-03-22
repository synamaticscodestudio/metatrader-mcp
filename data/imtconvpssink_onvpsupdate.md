# OnVPSUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPSSink ](imtconvpssink.md "IMTConVPSSink")/ OnVPSUpdate | [](imtconvpssink.md "IMTConVPSSink") [](imtconvpssink_onvpssync.md "OnVPSSync") |
| --- | --- | --- |
| --- | --- |

IMTConVPSSink::OnVPSUpdate
VPS configuration update event handler.
C++
virtual void IMTConVPSSink::OnVPSUpdate( const IMTConVPS* config // the pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConVPSSink.OnVPSUpdate( CIIMTConVPS config // configuration object )  
---  
Parameters
config
[in] The pointer to the updated configuration object.
Note
The API calls this method to notify of a change in a VPS configuration.