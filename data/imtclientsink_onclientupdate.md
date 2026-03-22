# OnClientUpdate (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClientSink ](imtclientsink.md "IMTClientSink")/ OnClientUpdate | [](imtclientsink_onclientadd.md "OnClientAdd") [](imtclientsink_onclientdelete.md "OnClientDelete") |
| --- | --- | --- |
| --- | --- |

IMTClientSink::OnClientUpdate
Client update event handler.
C++
virtual void IMTClientSink::OnClientUpdate( const IMTClient* client // A pointer to the client )  
---  
.NET (Gateway/Manager API)
virtual void CIMTClientSink.OnClientUpdate( CIMTClient client // Client object )  
---  
Parameters
client
[in] A pointer to the client object.
Note
This method is called by the API to notify of a client update.