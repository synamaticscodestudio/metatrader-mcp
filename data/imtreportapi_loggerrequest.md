# LoggerRequest (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Common Functions ](imtreportapi_common.md "Common Functions")/ LoggerRequest | [](imtreportapi_free.md "Free") [](imtreportapi_loggerflush.md "LoggerFlush") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::LoggerRequest
Request the journal of the trade server where the module is running.
virtual MTAPIRES IMTReportAPI::LoggerServerRequest( const UINT mode, // Request mode const UINT type, // Event type const INT64 from, // Start date const INT64 to, // End date LPCWSTR filter, // Keyword MTLogRecord*& records, // Array of entries UINT& records_total // The number of received entries )  
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
[out] A reference to the array of structures that describe logs ([MTLogRecord](mtlogrecord.md "MTLogRecord")).
records_total
[out] The total number of received journal entries.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a corresponding error code will be returned.
Note
After using, the records array must be released using the [IMTReportAPI::Free](imtreportapi_free.md "Free") method.