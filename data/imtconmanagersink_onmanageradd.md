# OnManagerAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Managers ](config_manager.md "Managers") / [ IMTConManagerSink ](imtconmanagersink.md "IMTConManagerSink")/ OnManagerAdd | [](imtconmanagersink.md "IMTConManagerSink") [](imtconmanagersink_onmanagerupdate.md "OnManagerUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConManagerSink::OnManagerAdd
A handler of the event of adding a new manager configuration.
C++
virtual void IMTConManagerSink::OnManagerAdd( const IMTConManager* config // A pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConManagerSink.OnManagerAdd( CIMTConManager  config // Configuration object )  
---  
Parameters
config
[in] A pointer to the object of the added manager configuration.
Note
This method is called by the API to notify that a new manager configuration has been added.