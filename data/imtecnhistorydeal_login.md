# Login (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryDeal ](imtecnhistorydeal.md "IMTECNFilling")/ Login | [](imtecnhistorydeal_dealgateway.md "DealGateway") [](imtecnhistorydeal_server.md "Server") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryDeal::Login
Get the login of the client, to whom the original order belongs.
C++
UINT64 IMTECNHistoryDeal::Login() const  
---  
.NET (Gateway/Manager API)
ulong CIMTECNHistoryDeal.Login()  
---  
Return Value
The login of the client (on the MetaTrader 5 side), to whom the original order belongs.
IMTECNHistoryDeal::Login
Set the login of the client, to whom the original order belongs.
C++
MTAPIRES IMTECNHistoryDeal::Login( const UINT64 login // login )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryDeal.Login( ulong login // login )  
---  
Parameters
order
[in] The login of the client (on the MetaTrader 5 side), to whom the original order belongs.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.