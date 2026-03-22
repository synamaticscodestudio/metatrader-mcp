# LoggerOutString (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Common Functions ](imtreportapi_common.md "Common Functions")/ LoggerOutString | [](imtreportapi_loggerout.md "LoggerOut") [](imtreportapi_isstopped.md "IsStopeed") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::LoggerOutString
Quick output of unformatted stings to the journal.
MTAPIRES IMTReportAPI::LoggerOutString( const UINT code, // log code LPCWSTR string // log string )  
---  
Parameters
code
[in] Log code which is passed using the [EnMTLogCode](journal.htm#enmtlogcode) enumerations.
string
[in] Log string with optional arguments. 
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
Compared to [IMTReportAPI::LoggerOut](imtreportapi_loggerout.md "LoggerOut"), which formats the output, this method uses less resources.
Each string is limited to 16KB, not including the standard string header.
Do not use the newline characters \r and \n, as this will lead to incorrect calculation of the checksum for the log lines.