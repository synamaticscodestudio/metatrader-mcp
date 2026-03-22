# LoginMatching (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryFilling ](imtecnhistoryfilling.md "IMTECNFilling")/ LoginMatching | [](imtecnhistoryfilling_login.md "Login") [](imtecnhistoryfilling_server.md "Server") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryFilling::LoginMatching
Get the login of the client who has placed the opposite order which is used to match the current order.
C++
UINT64 IMTECNHistoryFilling::LoginMatching() const  
---  
.NET (Gateway/Manager API)
ulong CIMTECNHistoryFilling.LoginMatching()  
---  
Return Value
The login of the client who has placed the opposite order which is used to match the current order.
Note
It is filled in only if the order is matched within the cluster, with the counter order of another client in MetaTrader 5.
IMTECNHistoryFilling::LoginMatching
Set the login of the client who has placed the opposite order which is used to match the current order.
C++
MTAPIRES IMTECNHistoryFilling::LoginMatching( const UINT64 login // login )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryFilling.LoginMatching( ulong login // login )  
---  
Parameters
order
[in] The login of the client who has placed the opposite order which is used to match the current order.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
It is filled in only if the order is matched within the cluster, with the counter order of another client in MetaTrader 5.