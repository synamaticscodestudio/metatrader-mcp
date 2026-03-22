# OnLeverageSync (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageSink ](imtconleveragesink.md "IMTConLeverageSink")/ OnLeverageSync | [](imtconleveragesink_onleveragedelete.md "OnLeverageDelete") [](imtconleveragesink_hookleverageadd.md "OnAutomationAdd") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageSink::OnLeverageSync
Handler for the event of synchronizing a floating margin configuration.
C++
virtual void IMTConLeverageSink::OnLeverageSync()  
---  
.NET (Gateway/Manager API)
virtual void CIMTConLeverageSink.OnLeverageSync()  
---  
Note
The API calls this method to notify that a floating margin configuration has been synchronized.
Configurations are synchronized on access, history, trade and backup servers when they connect to the main server.