# IMTConFeederModule (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds")/ IMTConFeederModule | [](imtconfeeder_statetrafficout.md "StateTrafficOut") [](imtconfeedermodule_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTConFeederModule
The IMTConFeederModule interface contains methods for managing parameters of the data feed modules.
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtconfeedermodule_release.md "Release") | Delete the current object. |
| [Assign](imtconfeedermodule_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtconfeedermodule_clear.md "Clear") | Clear an object. |
| [Name](imtconfeedermodule_name.md "Name") | Get the data feed name, which is inserted by default to a configuration when selecting this module. |
| [Vendor](imtconfeedermodule_vendor.md "Vendor") | Get the name of the provider of the data feed module. |
| [Description](imtconfeedermodule_description.md "Description") | Get the description of the data feed module. |
| [Module](imtconfeedermodule_module.md "Module") | Get the name of the file of the data feed module. |
| [FeedServer](imtconfeedermodule_feedserver.md "FeedServer") | Get the default address of the server to which the data feed module will connect. |
| [FeedLogin](imtconfeedermodule_feedlogin.md "FeedLogin") | Get a default login that will be used by a data feed to connect to the server. |
| [FeedPassword](imtconfeedermodule_feedpassword.md "FeedPassword") | Get a default password that will be used by a data feed to connect to the server. |
| [Version](imtconfeedermodule_version.md "Version") | Get the version of the data feed module. |
| [Modes](imtconfeedermodule_modes.md "Modes") | Get the available modes of data feed operation. |
| [Fields](imtconfeedermodule_fields.md "Fields") | Get the editable fields of a data feed. |
| [ParameterTotal](imtconfeedermodule_parametertotal.md "ParameterTotal") | Get the number of parameters of a data feed module. |
| [ParameterNext](imtconfeedermodule_parameternext.md "ParameterNext") | Get parameters of a data feed module by the index. |
| [ParameterGet](imtconfeedermodule_parameterget.md "ParameterGet") | Get the parameter of the data feed module by name. |

The IMTConFeederModule class contains one enumeration:
| Enumeration | Purpose |
| --- | --- |
| --- | --- |
| [EnFeedersFieldFlags](imtconfeedermodule_enum.md "Enumerations") | Flags of editable fields. |