# LoggerServerRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Common Functions ](imtmanagerapi_common.md "Common Functions")/ LoggerServerRequest | [](imtmanagerapi_loggerflush.md "LoggerFlush") [](imtmanagerapi_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::LoggerServerRequest
Request the journal of a trade server to which an application is connected.
C++
MTAPIRES IMTManagerAPI::LoggerServerRequest( const UINT mode, // Request mode const UINT type, // Event type const INT64 from, // Start date const INT64 to, // End date LPCWSTR filter, // Keyword MTLogRecord*& records, // Array of entries UINT& records_total // The number of received entries )  
---  
.NET
MTLogRecord[] CIMTManagerAPI.LoggerServerRequest( EnMTLogRequestMode mode, // Request mode EnMTLogType type, // Event type long from, // Start date long to, // End date string filter, // Keyword out MTRetCode  res // Response code )  
---  
Python
ManagerAPI.LoggerServerRequest( mode, # Request mode type, # Event type from, # Start date to, # End date filter # Keyword )  
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
After using, the records array must be released using the [IMTManagerAPI::Free](imtmanagerapi_free.md "Free") method.
This method cannot be called from event handlers (any methods of IMT*Sink classes).