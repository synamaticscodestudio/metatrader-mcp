# Data Feeds (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces")/ Data Feeds | [](imtconpluginsink_onpluginsync.md "OnPluginSync") [](imtconfeeder.md "MTConFeeder") |
| --- | --- | --- |
| --- | --- |

Data Feed Configuration
To receive quotes and news in the online trading platform, data feeds are used. Data feeds transmit information to the history server, from which they are translated to access points (data centers) and terminals.
The following interfaces of data feeds are available:
  * [IMTConFeeder](imtconfeeder.md "MTConFeeder") An interface for configuring data feeds.
  * [IMTConFeederModule](imtconfeedermodule.md "IMTConFeederModule") An interface for managing the parameters of data feed modules.
  * [IMTConFeederTranslate](imtconfeedertranslate.md "IMTConFeederTranslate") An interface for managing conversion of symbols and quotes received from a data feed.
  * [IMTConFeederSink](imtconfeedersink.md "IMTConFeederSink") An interface for handling events of changes in data feed configurations.

The below figure shows different elements of data feed configuration in the MetaTrader 5 Administrator, to help you understand the purpose of the interfaces:
The following elements are shown above:
  1. [The name of the data feed configuration](imtconfeeder_name.md "Name").
  2. [Information supplied by the data feed](imtconfeeder_flags.md "Flags").
  3. [The server from which the data feed transmits information](imtconfeeder_feedserver.md "FeedServer").
  4. Status of the data feed.
  5. [State of the data feed](imtconfeeder_mode.md "Mode").
  6. [The name of the data feed module](imtconfeeder_module.md "Module").
  7. [Server address of the gateway, on which the data feed accepts history server connections](imtconfeeder_gatewayserver.md "GatewayServer").
  8. [The login of the gateway server for history server connection](imtconfeeder_gatewaylogin.md "GatewayLogin").
  9. [The password of the gateway server for history server connection](imtconfeeder_gatewaypassword.md "GatewayPassword").
  10. [Login to connect to the source server](imtconfeeder_feedlogin.md "FeedLogin").
  11. [Password to connect to the source server](imtconfeeder_feedpassword.md "FeedPassword").
  12. [Setup of symbols for transmitting quotes](imtconfeeder_symboladd.md "SymbolAdd").
  13. [Setup of conversion of transmitted quotes](imtconfeeder_translateadd.md "TranslateAdd").
  14. [Setup of the data feed parameters](imtconfeeder_parameteradd.md "ParameterAdd").
  15. [Timeout setup](imtconfeeder_timeout.md "Timeout").
