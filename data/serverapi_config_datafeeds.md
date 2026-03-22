# Data Feeds (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases")/ Data Feeds | [](imtserverapi_pluginmoduleget.md "PluginModuleGet") [](imtserverapi_feedercreate.md "FeederCreate") |
| --- | --- | --- |
| --- | --- |

Data Feed Configuration
To receive quotes and news in the online trading platform, data feeds are used. Data feeds transmit information to the history server, from which they are translated to access points (data centers) and terminals.
Functions described in this section allow managing the data feed configurations, as well subscribe and unsubscribe from events associated with their change.
| Function | Purpose |
| --- | --- |
| --- | --- |
| [FeederCreate](imtserverapi_feedercreate.md "FeederCreate") | Create an object of the data feed configuration. |
| [FeederModuleCreate](imtserverapi_feedermodulecreate.md "FeederModuleCreate") | Create an object of configuration of the data feed module. |
| [FeederParamCreate](imtserverapi_feederparamcreate.md "FeederParamCreate") | Create an object of the parameter of the data feeds. |
| [FeederTranslateCreate](imtserverapi_feedertranslatecreate.md "FeederTranslateCreate") | Create an object of setup of converting the information transmitted from a data feed. |
| [FeederSubscribe](imtserverapi_feedersubscribe.md "FeederSubscribe") | Subscribe to events and hooks associated with the configuration of data feeds. |
| [FeederUnsubscribe](imtserverapi_feederunsubscribe.md "FeederUnsubscribe") | Unsubscribe from events and hooks associated with the configuration of data feeds. |
| [FeederAdd](imtserverapi_feederadd.md "FeederAdd") | Adds or updates a data feed configuration. |
| [FeederDelete](imtserverapi_feederdelete.md "FeederDelete") | Delete a data feed configuration by name and by index |
| [FeederShift](imtserverapi_feedershift.md "FeederShift") | Change the position of the data feed configuration in the list. |
| [FeederTotal](imtserverapi_feedertotal.md "FeederTotal") | The total number of data feed configurations available in the platform. |
| [FeederNext](imtserverapi_feedernext.md "FeederNext") | Gets a data feed configuration based on its index. |
| [FeederGet](imtserverapi_feederget.md "FeederGet") | Gets the data feed configuration based on its name. |
| [FeederModuleTotal](imtserverapi_feedermoduletotal.md "FeederModuleTotal") | The total number of configurations of data feed modules (EXE files) available in the platform. |
| [FeederModuleNext](imtserverapi_feedermodulenext.md "FeederModuleNext") | Get the configuration of the data feed module by the index. |
| [FeederModuleGet](imtserverapi_feedermoduleget.md "FeederModuleGet") | Get the configuration of the data feed module by the name. |
| [FeederRestart](imtserverapi_feederrestart.md "FeederRestart") | Restart data feeds. |