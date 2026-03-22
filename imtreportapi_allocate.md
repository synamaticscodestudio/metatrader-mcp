# Allocate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Common Functions ](imtreportapi_common.md "Common Functions")/ Allocate | [](imtreportapi_common.md "Common Functions") [](imtreportapi_free.md "Free") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::Allocate
Memory allocation by a server plugin. It is paired to the [IMTReportAPI::Free](imtreportapi_free.md "Free") method.
void* IMTReportAPI::Allocate( const UINT bytes // Amount of allocated memory )  
---  
Parameters
bytes
[in] Amount of allocated memory in bytes.
Return Value
If successful, it returns a pointer to the allocated memory block, otherwise it returns NULL.
Note
Allocation of memory by the Allocate method is controlled by the server and checked for possible leaks.