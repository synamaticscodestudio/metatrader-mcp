# Login (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNFilling ](imtecnfilling.md "IMTECNFilling")/ Login | [](imtecnfilling_clear.md "Clear") [](imtecnfilling_order.md "Order") |
| --- | --- | --- |
| --- | --- |

IMTECNFilling::Login
Get the login of the client, whom the filling order belongs to.
C++
UINT64 IMTECNFilling::Login() const  
---  
.NET (Gateway/Manager API)
ulong CIMTECNFilling.Login()  
---  
Return Value
The login of the client (on the MetaTrader 5 side), to whom the filling order belongs.
IMTECNFilling::Login
Set the login of the client, whom the filling order belongs to.
C++
MTAPIRES IMTECNFilling::Login( const UINT64 login // login )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNFilling.Login( ulong login // login )  
---  
Parameters
order
[in] The login of the client (on the MetaTrader 5 side), to whom the order belongs.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.