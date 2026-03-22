# LoggerRequest (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Common Functions ](serverapi_common.md "Common Functions")/ LoggerRequest | [](imtserverapi_loggeroutstring.md "LoggerOutString") [](imtserverapi_loggerflush.md "LoggerFlush") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::LoggerRequest
Request the server logs.
virtual MTAPIRES IMTServerAPI::LoggerRequest( const UINT mode, // Request mode const UINT type, // Event type const INT64 from, // Start date const INT64 to, // End date LPCWSTR filter, // Keyword MTLogRecord*& records, // Array of entries UINT& records_total // The number of received entries )  
---  
Parameters
mode
[in] The mode of journal requesting. To pass the mode, the [EnMTLogRequestMode](journal.htm#enmtlogrequestmode) enumeration is used.
type
[in] Type of events that should be requested from the server journal. To pass the type of events, the [EnMTLogType](journal.htm#enmtlogtype) enumeration is used.
from
[in] The start date for requesting logs. The date is specified in seconds that have elapsed since 01.01.1970. Only the date is taken into account, while the exact time is ignored.
to
[in] The end date for requesting logs. The date is specified in seconds that have elapsed since 01.01.1970. Only the date is taken into account, while the exact time is ignored.
filter
[in] A [key word](https://support.metaquotes.net/en/docs/mt5/platform/administration/admin_network/network_journal#keywords) for searching logs.
records
[out] A pointer to the array of structures that describe logs ([MTLogRecord](mtlogrecord.md "MTLogRecord")).
records_total
[out] The total number of received journal entries.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a corresponding error code will be returned.
Note
After using, the records array must be released using the [Free](imtserverapi_free.md "Free") method.