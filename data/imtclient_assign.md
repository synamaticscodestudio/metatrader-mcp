# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ Assign | [](imtclient_release.md "Release") [](imtclient_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTClient::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTClient::Assign( const IMTClient* deal // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.Assign( CIMTClient deal // Source object )  
---  
Parameters
client
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.