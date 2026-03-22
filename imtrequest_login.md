# Login (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ Login | [](imtrequest_id.md "ID") [](imtrequest_externalaccount.md "Account") |
| --- | --- | --- |
| --- | --- |

IMTRequest::Login
Get the login of the client who has sent the request.
C++
UINT64 IMTRequest::Login() const  
---  
.NET (Gateway/Manager API)
ulong CIMTRequest.Login()  
---  
Return Value
The login of the client who has sent the request.
IMTRequest::Login
Set the login of the client who is sending the request.
C++
MTAPIRES IMTRequest::Login( const UINT64 login // Login )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.Login( ulong login // Login )  
---  
Parameters
login
[in] Client login in a request.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.