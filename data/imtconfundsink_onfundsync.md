# OnFundSync (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFundSink ](imtconfundsink.md "IMTConFundSink")/ OnFundSync | [](imtconfundsink_onfunddelete.md "OnFundDelete") [](config_param.md "Additional Parameters") |
| --- | --- | --- |
| --- | --- |

IMTConFundSink::OnFundSync
Event handler for the synchronization of fund configurations.
C++
virtual void IMTConFundSink::OnFundSync()  
---  
.NET (Gateway/Manager API)
virtual void CIMTConFundSink.OnFundSync()  
---  
Note
The API calls this method to notify of synchronization of fund configurations.
Synchronization of configurations is carried out on access and history servers, trade and backup servers when connecting to the main server.