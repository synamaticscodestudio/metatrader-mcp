# Free (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Common Functions ](imtadminapi_common.md "Common Functions")/ Free | [](imtadminapi_allocate.md "Allocate") [](imtadminapi_loggerout.md "LoggerOut") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::Free
Free memory allocated earlier by [IMTAdminAPI::Allocate](imtadminapi_allocate.md "Allocate") method. It is used to free memory allocated by the functions and interfaces of the MetaTrader 5 Manager API.
void IMTAdminAPI::Free( void* ptr // Pointer to a memory block )  
---  
Parameters
ptr
[in] A pointer to the released memory block allocated earlier by [IMTAdminAPI::Allocate](imtadminapi_allocate.md "Allocate").