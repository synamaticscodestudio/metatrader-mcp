# Server (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryDeal ](imtecnhistorydeal.md "IMTECNFilling")/ Server | [](imtecnhistorydeal_login.md "Login") [](imtecnhistorydeal_externalid.md "ExternalID") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryDeal::Server
Get the identifier of the trade server on which the original order was placed.
C++
UINT64 IMTECNHistoryDeal::Server() const  
---  
.NET (Gateway/Manager API)
ulong CIMTECNHistoryDeal.Server()  
---  
Return Value
The identifier of the trade server on which the original order was placed.
IMTECNHistoryDeal::Server
Set the identifier of the trade server on which the original order was placed.
C++
MTAPIRES IMTECNHistoryDeal::Server( const UINT64 server // identifier )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryDeal.Server( ulong server // identifier )  
---  
Parameters
server
[in] The identifier of the trade server on which the original order was placed.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.