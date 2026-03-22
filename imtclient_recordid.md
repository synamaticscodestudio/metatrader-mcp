# RecordID (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ RecordID | [](imtclient_clear.md "Clear") [](imtclient_clienttype.md "ClientType") |
| --- | --- | --- |
| --- | --- |

IMTClient::RecordID
Get the client ID.
C++
UINT64 IMTClient::RecordID() const  
---  
.NET (Gateway/Manager API)
ulong CIMTClient.RecordID()  
---  
Return Value
Client ID.
IMTClient::RecordID
Set the client ID.
C++
MTAPIRES IMTClient::RecordID( const UINT64 record_id // Identifier )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.RecordID( ulong record_id // Identifier )  
---  
Parameters
record_id
[in] Client ID.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.