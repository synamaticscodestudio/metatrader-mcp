# Login (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryFilling ](imtecnhistoryfilling.md "IMTECNFilling")/ Login | [](imtecnhistoryfilling_ordergateway.md "OrderGateway") [](imtecnhistoryfilling_loginmatching.md "LoginMatching") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryFilling::Login
Get the login of the client, whom the filling order belongs to.
C++
UINT64 IMTECNHistoryFilling::Login() const  
---  
.NET (Gateway/Manager API)
ulong CIMTECNHistoryFilling.Login()  
---  
Return Value
The login of the client (on the MetaTrader 5 side), to whom the filling order belongs.
IMTECNHistoryFilling::Login
Set the login of the client, whom the filling order belongs to.
C++
MTAPIRES IMTECNHistoryFilling::Login( const UINT64 login // login )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryFilling.Login( ulong login // login )  
---  
Parameters
order
[in] The login of the client (on the MetaTrader 5 side), to whom the order belongs.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.