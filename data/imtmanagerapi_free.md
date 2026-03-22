# Free (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Common Functions ](imtmanagerapi_common.md "Common Functions")/ Free | [](imtmanagerapi_allocate.md "Allocate") [](imtmanagerapi_loggerout.md "LoggerOut") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::Free
Free memory allocated earlier by [IMTManagerAPI::Allocate](imtadminapi_allocate.md "Allocate"). It is used to free memory allocated by the functions and interfaces of the MetaTrader 5 Manager API.
void IMTManagerAPI::Free( void* ptr // Pointer to a memory block )  
---  
Parameters
ptr
[in] A pointer to the released memory block allocated earlier by [IMTManagerAPI::Allocate](imtadminapi_allocate.md "Allocate").