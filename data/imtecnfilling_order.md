# Order (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNFilling ](imtecnfilling.md "IMTECNFilling")/ Order | [](imtecnfilling_login.md "Login") [](imtecnfilling_server.md "Server") |
| --- | --- | --- |
| --- | --- |

IMTECNFilling::Order
Get the filling order ticket in the MetaTrader 5 platform.
C++
UINT64 IMTECNFilling::Order() const  
---  
.NET (Gateway/Manager API)
ulong CIMTECNFilling.Order()  
---  
Return Value
The ticket of the filling order in the MetaTrader 5 platform.
IMTECNFilling::Order
Set the filling order ticket in the MetaTrader 5 platform.
C++
MTAPIRES IMTECNFilling::Order( const UINT64 order // order ticket )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNFilling.Order( ulong  order // order ticket )  
---  
Parameters
order
[in] The ticket of the filling order in the MetaTrader 5 platform.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.