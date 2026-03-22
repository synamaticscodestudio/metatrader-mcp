# History Synchronization (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces")/ History Synchronization | [](imtconmanagersink_hookmanagerdelete.md "HookManagerDelete") [](imtconhistorysync.md "IMTConHistorySync") |
| --- | --- | --- |
| --- | --- |

Configuration of History Synchronization
Using the functions and interfaces described in this section, you can manage configurations of price data synchronization with other MetaTrader 5 and MetaTrader 4 servers. They also allow to subscribe and unsubscribe from events associated with their change.
The following interfaces of group settings are available:
  * [IMTConHistorySync](imtconhistorysync.md "IMTConHistorySync") An interface that provides access to all the main parameters of history data synchronization.
  * [IMTConHistorySyncSink](imtconmanagersink.md "IMTConManagerSink") An interface for handling events of changes in configurations of history data synchronization.

The below figure shows different elements of configuration of historical data synchronization in the MetaTrader 5 Administrator, to help you understand the purpose of the interfaces:
The following elements are shown above:
  1. [Address of the server fro data synchronization](imtconhistorysync_server.md "Server").
  2. [The beginning of the period for which data are synchronized](imtconhistorysync_from.md "From").
  3. [The end of the period for which data are synchronized](imtconhistorysync_to.md "To").
  4. [Symbols for which data is synchronized](imtconhistorysync_symboladd.md "SymbolAdd").
  5. [State of configuration](imtconhistorysync_mode.md "Mode").
  6. [Type of server with which data are synchronized](imtconhistorysync_servertype.md "ServerType").
  7. [Data synchronization mode](imtconhistorysync_modesync.md "ModeSync").
  8. [Time zone correction](imtconhistorysync_timecorrection.md "TimeCorrection").
  9. [Taking into account quoting sessions during synchronization](imtconhistorysync_flags.md "Flags").
