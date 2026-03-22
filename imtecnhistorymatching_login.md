# Login (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryMatching ](imtecnhistorymatching.md "IMTECNMatching")/ Login | [](imtecnhistorymatching_order.md "Order") [](imtecnhistorymatching_server.md "Server") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryMatching::Login
Get the login of the client, to whom the matching order belongs.
C++
UINT64 IMTECNHistoryMatching::Login() const  
---  
.NET (Gateway/Manager API)
ulong CIIMTECNHistoryMatching.Login()  
---  
Return Value
The login of the client, to whom the matching order belongs.
IMTECNHistoryMatching::Login
Set the login of the client, to whom the matching order belongs.
C++
MTAPIRES IMTECNHistoryMatching::Login( const UINT64 login // login )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryMatching.Login( ulong login // login )  
---  
Parameters
order
[in] The login of the client, to whom the matching order belongs.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.