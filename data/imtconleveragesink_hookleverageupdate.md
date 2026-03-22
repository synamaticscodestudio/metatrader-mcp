# HookLeverageUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageSink ](imtconleveragesink.md "IMTConLeverageSink")/ HookLeverageUpdate | [](imtconleveragesink_hookleverageadd.md "OnAutomationAdd") [](imtconleveragesink_hookleveragedelete.md "HookLeverageDelete") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageSink::HookLeverageUpdate
Hook for editing a floating margin configuration.
virtual MTAPIRES IMTConLeverageSink::HookLeverageUpdate( const UINT64 login // Manager login IMTConLeverage* config // Pointer to the configuration object )  
---  
Parameters
login
[in] Login of the manager who modifies the configuration. Corresponds to [IMTConManager::Login](imtconmanager_login.md "Login").
config
[in] Pointer to the object of the configuration being updated [IMTConLeverage](imtconleverage.md "IMTConLeverage").
Return Value
If there are no handlers for this event, [MT_RET_OK](retcodes_successful.md "Successful completion") is returned.
If the event handler returns a response code other than [MT_RET_OK](retcodes_successful.md "Successful completion"), the configuration will not be updated, and the hook will not be passed to other handlers (including those in other plugins).
Note
The hook is called just before making changes to the configuration database. The main purpose of this hook is to modify the record being updated and, if necessary, to prevent unwanted modifications.
This method is only used in the MetaTrader 5 Server API.