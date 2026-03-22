# Free (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Common Functions ](imtreportapi_common.md "Common Functions")/ Free | [](imtreportapi_allocate.md "Allocate") [](imtreportapi_loggerrequest.md "LoggerRequest") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::Free
Free memory allocated earlier by [IMTReportAPI::Allocate](imtreportapi_allocate.md "Allocate") method. It is used to free memory allocated by the functions and interfaces of the MetaTrader 5 Report API.
void IMTReportAPI::Free( void* ptr // Pointer to a memory block )  
---  
Parameters
ptr
[in] A pointer to the released memory block allocated earlier by the [IMTReportAPI::Allocate](imtreportapi_allocate.md "Allocate") method.