# OnAutomationAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageSink ](imtconleveragesink.md "IMTConLeverageSink")/ OnLeverageAdd | [](imtconleveragesink.md "IMTConLeverageSink") [](imtconleveragesink_onleverageupdate.md "OnLeverageUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageSink::OnLeverageAdd
Handler for the event of adding a new floating margin configuration.
C++
virtual void IMTConLeverageSink::OnLeverageAdd( const IMTConLeverage* config // Pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConLeverageSink.OnLeverageAdd( CIMTConLeverage config // Configuration object )  
---  
Parameters
config
[in] Pointer to the object of the added configuration [IMTConLeverage](imtconleverage.md "IMTConLeverage").
Note
The API calls this method to notify that a new floating margin configuration has been added.