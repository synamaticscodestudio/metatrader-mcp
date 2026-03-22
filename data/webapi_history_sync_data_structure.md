# Data Structure (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ History Synchronization ](webapi_history_sync.md "History Synchronization")/ Data Structure | [](webapi_history_sync.md "History Synchronization") [](webapi_history_sync_start.md "Start") |
| --- | --- | --- |
| --- | --- |

Data Structure
A configuration is passed in JSON format in response to the [/api/history_sync/add](webapi_history_sync_add.md "Add") and [/api/history_sync/next](webapi_history_sync_next.md "Get by Index") requests.
| Method | Type | Purpose |
| --- | --- | --- |
| --- | --- | --- |
| Enable | Integer | Synchronization mode: 0 — disabled, 1 — enabled. |
| Server | String | The IP address or the domain name of the server, which which historical data is synchronized. |
| ServerType | Integer | The type of the server with which historical data is synchronized. Passed as a value of the [EnHistorySyncServer](imtconhistorysync_enum.htm#enhistorysyncserver) enumeration. |
| Mode | Integer | Historical data synchronization mode. Passed as a value of the [EnHistorySyncMode](imtconhistorysync_enum.htm#enhistorysyncmode) enumeration. |
| From | Integer | The beginning date of the period for which historical data is synchronized. The date is specified in seconds elapsed since 01.01.1970. |
| To | Integer | The ending date of the period for which historical data is synchronized. The date is specified in seconds elapsed since 01.01.1970. |
| TimeCorrect | Integer | Time zone correction for the synchronization server relative to the time zone of the platform. Indicated in minutes. Positive and negative values can be used to specify the correction. 0 means the mode of automatic correction of the time zone. |
| Flags | Integer | Data synchronization flags. Passed as a value of the [EnHistorySyncFlags](imtconhistorysync_enum.htm#enhistorysyncflags) enumeration. |
| Data | Integer | Data types for synchronization. Passed as a value of the [EnHistoryData](imtconhistorysync_enum.htm#enhistorydata) enumeration. |
| Symbols | Array | [Array of symbols](webapi_history_sync_data_structure.htm#symbols), for which historical data is synchronized. |

Symbols
| Parameter | Type | Purpose |
| --- | --- | --- |
| --- | --- | --- |
| Path | String | Path to the symbol. |