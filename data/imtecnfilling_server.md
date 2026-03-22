# Server (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNFilling ](imtecnfilling.md "IMTECNFilling")/ Server | [](imtecnfilling_order.md "Order") [](imtecnfilling_timesetupmsc.md "TimeSetupMsc") |
| --- | --- | --- |
| --- | --- |

IMTECNFilling::Server
Get the identifier of the trade server on which the filling order was placed.
C++
UINT64 IMTECNFilling::Server() const  
---  
.NET (Gateway/Manager API)
ulong CIMTECNFilling.Server()  
---  
Return Value
The identifier of the trade server on which the filling order was placed.
IMTECNFilling::Server
Set the identifier of the trade server on which the filling order was placed.
C++
MTAPIRES IMTECNFilling::Server( const UINT64 server // identifier )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNFilling.Server( ulong server // identifier )  
---  
Parameters
server
[in] The identifier of the trade server on which the filling order was placed.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.