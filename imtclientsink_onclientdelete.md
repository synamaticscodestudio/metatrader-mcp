# OnClientDelete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClientSink ](imtclientsink.md "IMTClientSink")/ OnClientDelete | [](imtclientsink_onclientupdate.md "OnClientUpdate") [](imtcomment.md "IMTComment") |
| --- | --- | --- |
| --- | --- |

IMTClientSink::OnClientDelete
Client deletion event handler.
C++
virtual void IMTClientSink::OnClientDelete( const IMTClient* client // A pointer to the client object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTClientSink.OnClientDelete( CIMTClient  client // Client object )  
---  
Parameters
client
[in] A pointer to the deleted client object.
Note
This method is called by the API to notify of a client deletion.