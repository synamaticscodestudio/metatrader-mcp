# Free (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Common Functions ](serverapi_common.md "Common Functions")/ Free | [](imtserverapi_allocate.md "Allocate") [](imtserverapi_loggerout.md "LoggerOut") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::Free
Free memory allocated earlier by [IMTServerAPI::Allocate](imtserverapi_allocate.md "Allocate"). It is used to free memory allocated by the functions and interfaces of the MetaTrader 5 Server API.
void IMTServerAPI::Free( void* ptr // Pointer to a memory block )  
---  
Parameters
ptr
[in] A pointer to the released memory block allocated earlier by [IMTServerAPI::Allocate](imtserverapi_allocate.md "Allocate").