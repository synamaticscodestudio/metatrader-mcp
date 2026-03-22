# OnVPSSync (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPSSink ](imtconvpssink.md "IMTConVPSSink")/ OnVPSSync | [](imtconvpssink_onvpsupdate.md "OnVPSUpdate") [](config_kyc.md "KYC") |
| --- | --- | --- |
| --- | --- |

IMTConVPSSink::OnVPSSync
VPS configuration synchronization event handler.
C++
virtual void IMTConVPSSink::OnVPSSync()  
---  
.NET (Gateway/Manager API)
virtual void CIMTConVPSSink.OnVPSSync()  
---  
Note
The API calls this method to notify of synchronization of a VPS configuration.
Synchronization of configurations is carried out on access and history servers, trade and backup servers when connecting to the main server.