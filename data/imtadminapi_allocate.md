# Allocate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Common Functions ](imtadminapi_common.md "Common Functions")/ Allocate | [](imtadminapi_common.md "Common Functions") [](imtadminapi_free.md "Free") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::Allocate
Memory allocation by an application. This is a pair method to [IMTAdminAPI::Free](imtadminapi_free.md "Free").
void* IMTAdminAPI::Allocate( const UINT bytes // Amount of allocated memory )  
---  
Parameters
bytes
[in] Amount of allocated memory in bytes.
Return Value
If successful, it returns a pointer to the allocated memory block, otherwise it returns NULL.