# ClientType (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ ClientType | [](imtclient_recordid.md "RecordID") [](imtclient_clientstatus.md "ClientStatus") |
| --- | --- | --- |
| --- | --- |

IMTClient::ClientType
Get the client type.
C++
UINT IMTClient::ClientType() const  
---  
.NET (Gateway/Manager API)
uint CIMTClient.ClientType()  
---  
Return Value
A value of the [IMTClient::EnClientType](imtclient_enum.htm#enclienttype) enumeration.
IMTClient::ClientType
Set the client type.
C++
MTAPIRES IMTClient::ClientType( const UINT type // Client type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.ClientType( uint type // Client type )  
---  
Parameters
type
[in] Client type. The client type is passed using the [IMTClient::EnClientType](imtclient_enum.htm#enclienttype) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.