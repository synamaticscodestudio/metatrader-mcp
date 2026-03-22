# OnCommonSync (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConCommonSink ](imtconcommonsink.md "IMTConCommonSink")/ OnCommonSync | [](imtconcommonsink_oncommonupdate.md "OnCommonUpdate") [](config_network.md "Network") |
| --- | --- | --- |
| --- | --- |

IMTConCommonSink::OnCommonSync
This method is called by the API to notify that a common configuration has been updated.
C++
virtual void IMTConCommonSink::OnCommonSync()  
---  
.NET (Gateway/Manager API)
virtual void CIMTConCommonSink.OnCommonSync()  
---  
Note
This method is called by the API to notify that the common configuration has been synchronized.
Synchronization of the common configuration is performed on access, history, trade and backup servers when connecting to the main server.