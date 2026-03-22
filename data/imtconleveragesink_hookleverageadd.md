# OnAutomationAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageSink ](imtconleveragesink.md "IMTConLeverageSink")/ HookLeverageAdd | [](imtconleveragesink_onleveragesync.md "OnLeverageSync") [](imtconleveragesink_hookleverageupdate.md "HookLeverageUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageSink::HookLeverageAdd
Hook for adding a new floating margin configuration.
virtual MTAPIRES IMTConLeverageSink::HookLeverageAdd( const UINT64 login // Manager login IMTConLeverage* config // Pointer to the configuration object )  
---  
Parameters
login
[in] Login of the manager who adds the configuration. Corresponds to [IMTConManager::Login](imtconmanager_login.md "Login").
config
[in] Pointer to the object of the added configuration [IMTConLeverage](imtconleverage.md "IMTConLeverage").
Return Value
If there are no handlers for this event, [MT_RET_OK](retcodes_successful.md "Successful completion") is returned.
If the event handler returns a response code other than [MT_RET_OK](retcodes_successful.md "Successful completion"), the configuration will not be added, and the hook will not be passed to other handlers (including those in other plugins).
Note
The hook is called just before adding the configuration to the database. The main purpose of this hook is to modify the added record and, if necessary, to prevent the addition of unwanted records.
This method is only used in the MetaTrader 5 Server API.