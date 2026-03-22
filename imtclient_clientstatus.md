# ClientStatus (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ ClientStatus | [](imtclient_clienttype.md "ClientType") [](imtclient_kycstatus.md "KYCStatus") |
| --- | --- | --- |
| --- | --- |

IMTClient::ClientStatus
Get a client's status.
C++
UINT IMTClient::ClientStatus() const  
---  
.NET (Gateway/Manager API)
uint CIMTClient.ClientStatus()  
---  
Return Value
A value of the [IMTClient::EnClientStatus](imtclient_enum.htm#enclientstatus) enumeration.
IMTClient::ClientType
Set the client type.
C++
MTAPIRES IMTClient::ClientStatus( const UINT status // Client status )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.ClientStatus( uint status // Client status )  
---  
Parameters
status
[in] Client status. The status is passed using the [IMTClient::EnClientStatus](imtclient_enum.htm#enclientstatus) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.