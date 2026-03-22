# HookManagerDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Managers ](config_manager.md "Managers") / [ IMTConManagerSink ](imtconmanagersink.md "IMTConManagerSink")/ HookManagerDelete | [](imtconmanagersink_hookmanagerupdate.md "HookManagerUpdate") [](config_historysync.md "History Synchronization") |
| --- | --- | --- |
| --- | --- |

IMTConManagerSink::HookManagerDelete
Hook for the deletion of a manager configuration.
C++
virtual MTAPIRES IMTConManagerSink::HookManagerDelete( const UINT64 login, // Manager login const IMTConManager* cfg // A pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual MTRetCode CIMTConManagerSink.HookManagerDelete( ulong login, // Manager login CIMTConManager  cfg // Configuration object )  
---  
Parameters
login
[in] [The login of the manager](imtconmanager_login.md "Login") who is deleting the configuration. If the configuration is to be deleted by the plugin, 0 is specified in the parameter.
cfg
[in] A pointer to the [manager configuration object](imtconmanager.md "IMTConManager").
Return Value
In case there are no handlers if this event, [MT_RET_OK](retcodes_successful.md "Successful completion") is returned.
If the event handler returns a code different from [MT_RET_OK](retcodes_successful.md "Successful completion"), the manager will not be deleted and the hook will not be passed to other handlers (including other plugins).
Note
The hook is called right before deleting a record from the configuration database. The main purpose of this hook is prevent the unwanted deletion of records.
This method can only be used in the MetaTrader 5 Server API.