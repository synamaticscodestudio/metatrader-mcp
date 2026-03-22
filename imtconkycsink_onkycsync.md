# OnKYCSync (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ KYC ](config_kyc.md "KYC") / [ IMTConKYCSink ](imtconkycsink.md "IMTConKYCSink")/ OnKYCSync | [](imtconkycsink_onkycdelete.md "OnKYCDelete") [](config_subscription.md "Subscriptions") |
| --- | --- | --- |
| --- | --- |

IMTConKYCSink::OnKYCSync
The event handler for synchronizing KYC provider configurations.
C++
virtual void IMTConKYCSink::OnKYCSync()  
---  
.NET (Gateway/Manager API)
virtual void CIMTConKYCSink.OnKYCSync()  
---  
Note
This method is called by the API to notify that KYC provider configurations have been synchronized.
KYC provider configurations are synchronized on access, history, trade and backup servers, when they are connected to the main server.