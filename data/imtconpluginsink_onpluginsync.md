# OnPluginSync (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Plugins ](config_plugins.md "Plugins") / [ IMTConPluginSink ](imtconpluginsink.md "IMTConPluginSink")/ OnPluginSync | [](imtconpluginsink_onplugindelete.md "OnPluginDelete") [](config_datafeeds.md "Data Feeds") |
| --- | --- | --- |
| --- | --- |

IMTConPluginSink::OnPluginSync
A handler of the event of synchronization of plugin configuration.
C++
virtual void IMTConPluginSink::OnPluginSync()  
---  
.NET (Gateway/Manager API)
virtual void CIMTConPluginSink.OnPluginSync()  
---  
Note
This method is called by the API to notify of synchronization of plugin configurations.
Plugin configuration synchronization is performed on Access, History, Trade and Backup servers during connection to the main server.