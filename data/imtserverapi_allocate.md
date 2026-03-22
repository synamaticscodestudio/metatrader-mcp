# Allocate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Common Functions ](serverapi_common.md "Common Functions")/ Allocate | [](serverapi_common.md "Common Functions") [](imtserverapi_free.md "Free") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::Allocate
Memory allocation by a server plugin. This is a pair method to [IMTServerAPI::Free](imtserverapi_free.md "Free").
void* IMTServerAPI::Allocate( const UINT bytes // Amount of allocated memory )  
---  
Parameters
bytes
[in] Amount of allocated memory in bytes.
Return Value
If successful, it returns a pointer to the allocated memory block, otherwise it returns NULL.
Note
Allocation of memory by the IMTServerAPI::Allocate method is controlled by the server and checked for possible leaks.