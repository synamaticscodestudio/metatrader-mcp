# OnLeverageDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageSink ](imtconleveragesink.md "IMTConLeverageSink")/ OnLeverageDelete | [](imtconleveragesink_onleverageupdate.md "OnLeverageUpdate") [](imtconleveragesink_onleveragesync.md "OnLeverageSync") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageSink:OnLeverageDelete
Handler for the event of deleting a floating margin configuration.
C++
virtual void IMTConLeverageSink::OnLeverageDelete( const IMTConSubscription* config // Pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConLeverageSink.OnLeverageDelete( CIMTConSubscription config // Configuration object )  
---  
Parameters
config
Pointer to the object of the deleted configuration [IMTConLeverage](imtconleverage.md "IMTConLeverage").
Note
The API calls this method to notify that a floating margin configuration has been deleted.