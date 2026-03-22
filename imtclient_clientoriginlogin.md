# ClientOriginLogin (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ ClientOriginLogin | [](imtclient_clientorigin.md "ClientOrigin") [](imtclient_clientexternalid.md "ClientExternalID") |
| --- | --- | --- |
| --- | --- |

IMTClient::ClientOriginLogin
Get the trading account number, based on which the client was created.
C++
UINT64 IMTClient::RecordID() const  
---  
.NET (Gateway/Manager API)
ulong CIMTClient.RecordID()  
---  
Return Value
Trading account number.
IMTClient::RecordID
Set the trading account number, based on which the client was created.
C++
MTAPIRES IMTClient::Login( const UINT64 login // Account number )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.Login( ulong login // Account number )  
---  
Parameters
login
[in] Trading account number. The account number is equal to [IMTUser::Login](imtuser_login.md "Login").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.