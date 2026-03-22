# OnPluginUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Plugins ](config_plugins.md "Plugins") / [ IMTConPluginSink ](imtconpluginsink.md "IMTConPluginSink")/ OnPluginUpdate | [](imtconpluginsink_onpluginadd.md "OnPluginAdd") [](imtconpluginsink_onplugindelete.md "OnPluginDelete") |
| --- | --- | --- |
| --- | --- |

IMTConPluginSink::OnPluginUpdate
A handler of the event of updating a plugin configuration.
C++
virtual void IMTConPluginSink::OnPluginUpdate( const IMTConPlugin* plugin // A pointer to the configuration module )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConPluginSink.OnPluginUpdate( CIMTConPlugin plugin // Configuration object )  
---  
Parameters
plugin
[in] A pointer to the updated configuration object.
Note
This method is called by the API to notify of the fact that a plugin configuration has been updated.