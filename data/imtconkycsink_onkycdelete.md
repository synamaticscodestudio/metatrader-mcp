# OnKYCDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ KYC ](config_kyc.md "KYC") / [ IMTConKYCSink ](imtconkycsink.md "IMTConKYCSink")/ OnKYCDelete | [](imtconkycsink_onkycupdate.md "OnKYCUpdate") [](imtconkycsink_onkycsync.md "OnKYCSync") |
| --- | --- | --- |
| --- | --- |

IMTConKYCSink:OnKYCDelete
The event handler for deleting a KYC provider configuration.
C++
virtual void IMTConKYCSink::OnKYCDelete( const IMTConKYC* config // A pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConKYCSink.OnKYCDelete( CIMTConKYC config // Configuration object )  
---  
Parameters
config
A pointer to the object of the deleted configuration.
Note
This method is called by the API to notify that a KYC provider configuration has been deleted.