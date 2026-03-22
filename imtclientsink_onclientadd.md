# OnClientAdd (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClientSink ](imtclientsink.md "IMTClientSink")/ OnClientAdd | [](imtclientsink.md "IMTClientSink") [](imtclientsink_onclientupdate.md "OnClientUpdate") |
| --- | --- | --- |
| --- | --- |

IMTClientSink::OnClientAdd
New client adding event handler.
C++
virtual void IMTClientSink::OnClientAdd( const IMTClient* client // A pointer to the client object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTClientSink.OnClientAdd( CIMTClient client // Client object )  
---  
Parameters
client
[in] A pointer to the client object.
Note
This method is called by the API to notify that a new client has been added.