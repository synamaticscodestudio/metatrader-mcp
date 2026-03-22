# Login (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNMatching ](imtecnmatching.md "IMTECNMatching")/ Login | [](imtecnmatching_order.md "Order") [](imtecnmatching_server.md "Server") |
| --- | --- | --- |
| --- | --- |

IMTECNMatching::Login
Get the login of the client, to whom the matching order belongs.
C++
UINT64 IMTECNMatching::Login() const  
---  
.NET (Gateway/Manager API)
ulong CIMTECNMatching.Login()  
---  
Return Value
The login of the client, to whom the matching order belongs.
IMTECNMatching::Login
Set the login of the client, to whom the matching order belongs.
C++
MTAPIRES IMTECNMatching::Login( const UINT64 login // login )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNMatching.Login( ulong login // login )  
---  
Parameters
order
[in] The login of the client, to whom the matching order belongs.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.