# OnLeverageUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageSink ](imtconleveragesink.md "IMTConLeverageSink")/ OnLeverageUpdate | [](imtconleveragesink_onleverageadd.md "OnAutomationAdd") [](imtconleveragesink_onleveragedelete.md "OnLeverageDelete") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageSink::OnLeverageUpdate
Handler for the event of updating a floating margin configuration.
C++
virtual void IMTConLeverageSink::OnLeverageUpdate( const IMTConSubscription* config // Pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConLeverageSink.OnLeverageUpdate( CIMTConSubscription config // Configuration object )  
---  
Parameters
config
[in] Pointer to the updated configuration object [IMTConLeverage](imtconleverage.md "IMTConLeverage").
Note
The API calls this method to notify that a floating margin configuration has been updated.