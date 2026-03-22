# Allocate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Common Functions ](imtmanagerapi_common.md "Common Functions")/ Allocate | [](imtmanagerapi_common.md "Common Functions") [](imtmanagerapi_free.md "Free") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::Allocate
Memory allocation by an application. This is a pair method to [IMTManagerAPI::Free](imtmanagerapi_free.md "Free").
void* IMTManagerAPI::Allocate( const UINT bytes // Amount of allocated memory )  
---  
Parameters
bytes
[in] Amount of allocated memory in bytes.
Return Value
If successful, it returns a pointer to the allocated memory block, otherwise it returns Null.