# HookManagerAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Managers ](config_manager.md "Managers") / [ IMTConManagerSink ](imtconmanagersink.md "IMTConManagerSink")/ HookManagerAdd | [](imtconmanagersink_onmanagersync.md "OnManagerSync") [](imtconmanagersink_hookmanagerupdate.md "HookManagerUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConManagerSink::HookManagerAdd
Hook for the addition of a new manager configuration.
C++
virtual MTAPIRES IMTConManagerSink::HookManagerAdd( const UINT64 login, // Manager login IMTConManager* new_cfg // A pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual MTRetCode CIMTConManagerSink.HookManagerAdd( ulong login, // Manager login CIMTConManager  new_cfg // Configuration object )  
---  
Parameters
login
[in] [The login of the manager](imtconmanager_login.md "Login"), who is adding the new configuration. If the new configuration is being added by the plugin, 0 is specified in the parameter.
new_cfg
[in/out] A pointer the [object of the manager to be added](imtconmanager.md "IMTConManager").
Return Value
In case there are no handlers if this event, [MT_RET_OK](retcodes_successful.md "Successful completion") is returned.
If the event handler returns a code different from [MT_RET_OK](retcodes_successful.md "Successful completion"), the manager will not be added and the hook will not be passed to other handlers (including other plugins).
Note
The hook is called right before adding a manager configuration to the client base. The main purpose of this hook is to modify an entry that is added, and, if necessary, to prevent the addition of unwanted records.
This method can only be used in the MetaTrader 5 Server API.