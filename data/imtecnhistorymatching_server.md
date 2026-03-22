# Server (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryMatching ](imtecnhistorymatching.md "IMTECNMatching")/ Server | [](imtecnhistorymatching_login.md "Login") [](imtecnhistorymatching_state.md "State") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryMatching::Server
Get the identifier of the trade server on which the matching order was placed.
C++
UINT64 IMTECNHistoryMatching::Server() const  
---  
.NET (Gateway/Manager API)
ulong CIMTECNHistoryMatching.Server()  
---  
Return Value
The identifier of the trade server on which the matching order was placed.
IMTECNHistoryMatching::Server
Set the identifier of the trade server on which the matching order was placed.
C++
MTAPIRES IMTECNHistoryMatching::Server( const UINT64 server // identifier )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryMatching.Server( ulong server // identifier )  
---  
Parameters
server
[in] The identifier of the trade server on which the matching order was placed.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.