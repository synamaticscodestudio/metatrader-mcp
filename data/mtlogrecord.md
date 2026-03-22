# MTLogRecord (MetaTrader5SDK)

|  | [ Structures ](reference_structures.md "Structures")/ MTLogRecord | [](mtmailrange.md "MTMailRange") [](mtchartbar.md "MTChartBar") |
| --- | --- | --- |
| --- | --- |

MTLogRecord
This structure describes the [Server log](imtadminapi_common.md "Common Functions") entry. The structure is defined with the one-byte alignment.
# pragma pack(push,1) struct MTLogRecord { UINT flags; // Flags EnMTLogFlags UINT code; // Message types EnMTLogCode INT type; // Types of events EnMTLogType INT64 datetime; // Date and time in seconds wchar_t source[64]; // Source wchar_t message[512]; // Message text INT64 datetime_msc; // Date and time in milliseconds int reserved[2]; // A reserved field }; #pragma pack(pop)  
---  
This structure is used in the following methods:
  * [IMTAdminAPI::LoggerServerRequest](imtadminapi_loggerserverrequest.md "LoggerServerRequest")
  * [IMTManagerAPI::LoggerServerRequest](imtmanagerapi_loggerserverrequest.md "LoggerServerRequest")
  * [IMTReportAPI::LoggerRequest](imtreportapi_loggerrequest.md "LoggerRequest")
  * [IMTServerAPI::LoggerRequest](imtserverapi_loggerrequest.md "LoggerRequest")

The structure contains the following parameters:
| Field | Type | Description |
| --- | --- | --- |
| --- | --- | --- |
| flags | UINT | Log [entry flags](journal.htm#enmtlogflags). |
| code | UINT | Log [message type](journal.htm#enmtlogcode). |
| type | INT | [Event type](journal.htm#enmtlogtype). |
| datetime | INT64 | Date and time of a message in seconds that have elapsed since 01.01.1970. |
| source | wchar_t | Source of the message. |
| message | wchar_t | Message text. |
| datetime_msc | INT64 | Date and time of a message in milliseconds that have elapsed since 01.01.1970. |
| reserved | int | A reserved parameter. |