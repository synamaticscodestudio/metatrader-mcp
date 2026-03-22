# OnManagerDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Managers ](config_manager.md "Managers") / [ IMTConManagerSink ](imtconmanagersink.md "IMTConManagerSink")/ OnManagerDelete | [](imtconmanagersink_onmanagerupdate.md "OnManagerUpdate") [](imtconmanagersink_onmanagersync.md "OnManagerSync") |
| --- | --- | --- |
| --- | --- |

IMTConManagerSink::OnManagerDelete
A handler of the event of removing a manager configuration.
C++
virtual void IMTConManagerSink::OnManagerDelete( const IMTConManager* config // A pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConManagerSink.OnManagerDelete( CIMTConManager config // Configuration object )  
---  
Parameters
config
[in] A pointer to the object of the deleted manager configuration.
Note
This method is called by the API to notify that a manager configuration has been deleted.