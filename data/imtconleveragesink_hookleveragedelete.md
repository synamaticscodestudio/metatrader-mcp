# HookLeverageDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageSink ](imtconleveragesink.md "IMTConLeverageSink")/ HookLeverageDelete | [](imtconleveragesink_hookleverageupdate.md "HookLeverageUpdate") [](config_manager.md "Managers") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageSink::HookLeverageDelete
Hook for deleting a floating margin configuration.
virtual MTAPIRES IMTConLeverageSink::HookLeverageDelete( const UINT64 login // Manager login IMTConLeverage* config // Pointer to the configuration object )  
---  
Parameters
login
[in] Login of the manager who deletes the configuration. Corresponds to [IMTConManager::Login](imtconmanager_login.md "Login").
config
[in] Pointer to the object of the deleted configuration [IMTConLeverage](imtconleverage.md "IMTConLeverage").
Return Value
If there are no handlers for this event, [MT_RET_OK](retcodes_successful.md "Successful completion") is returned.
If the event handler returns a response code other than [MT_RET_OK](retcodes_successful.md "Successful completion"), the configuration will not be deleted, and the hook will not be passed to other handlers (including those in other plugins).
Note
The hook is called just before making changes to the configuration database. The main purpose of this hook is prevent unwanted deletion of records.
This method is only used in the MetaTrader 5 Server API.