# IMTConHistorySync (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ History Synchronization ](config_historysync.md "History Synchronization")/ IMTConHistorySync | [](config_historysync.md "History Synchronization") [](imtconhistorysync_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTConHistorySync
The IMTConHistorySync class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtconhistorysync_release.md "Release") | Delete the current object. |
| [Assign](imtconhistorysync_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtconhistorysync_clear.md "Clear") | Clear an object. |
| [Server](imtconhistorysync_server.md "Server") | Get and set the IP address or the domain name of the server, with which history data are synchronized. |
| [ServerType](imtconhistorysync_servertype.md "ServerType") | Get and set the type of the server with which history data are synchronized. |
| [Login](imtconhistorysync_login.md "Login") | Get and set the trading account login used to connect to the server the data is synchronized with. |
| [Password](imtconhistorysync_password.md "Password") | Get and set the trading account password used to connect to the server the data is synchronized with. |
| [Mode](imtconhistorysync_mode.md "Mode") | Get and set the state of the configuration of data synchronization. |
| [ModeSync](imtconhistorysync_modesync.md "ModeSync") | Get and set the mode of history data synchronization. |
| [HistoryData](imtconhistorysync_historydata.md "HistoryData") | Get and set the type of data to synchronize. |
| [TimeCorrection](imtconhistorysync_timecorrection.md "TimeCorrection") | Get and set the correction of the time zone of the synchronization server relative to the time zone of the platform. |
| [From](imtconhistorysync_from.md "From") | Get and set the beginning date of the period for which history data are synchronized. |
| [To](imtconhistorysync_to.md "To") | Get and set the end date of the period for which history data are synchronized. |
| [SymbolAdd](imtconhistorysync_symboladd.md "SymbolAdd") | Add a symbol for which history data will be synchronized. |
| [SymbolUpdate](imtconhistorysync_symbolupdate.md "SymbolUpdate") | Modify the symbol for which history data are synchronized, based on the position in the list. |
| [SymbolShift](imtconhistorysync_symbolshift.md "SymbolShift") | Change the position of a symbol for which history data are synchronized. |
| [SymbolDelete](imtconhistorysync_symboldelete.md "SymbolDelete") | Delete a symbol for which history data are synchronized, based on the position in the list. |
| [SymbolTotal](imtconhistorysync_symboltotal.md "SymbolTotal") | Get the entries in the list of symbols, for which history data are synchronized. |
| [SymbolNext](imtconhistorysync_symbolnext.md "SymbolNext") | Get a symbol for which history data are synchronized, based on the position in the list. |
| [Flags](imtconhistorysync_flags.md "Flags") | Get and set data synchronization flags. |

The IMTConHistorySync contains the following enumerations:
| Enumeration | Purpose |
| --- | --- |
| --- | --- |
| [EnHistoryMode](imtconhistorysync_enum.htm#enhistorymode) | The state of the configuration of history data synchronization. |
| [EnHistorySyncMode](imtconhistorysync_enum.htm#enhistorysyncmode) | History data synchronization mode. |
| [EnHistorySyncServer](imtconhistorysync_enum.htm#enhistorysyncserver) | Type of the server for synchronization. |
| [EnHistorySyncFlags](imtconhistorysync_enum.htm#enhistorysyncflags) | History data synchronization flags. |