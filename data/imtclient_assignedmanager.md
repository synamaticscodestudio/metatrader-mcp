# AssignedManager (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTClient ](imtclient.md "IMTClient")/ AssignedManager | [](imtclient_kycstatus.md "KYCStatus") [](imtclient_datecreated.md "DateCreated") |
| --- | --- | --- |
| --- | --- |

IMTClient::AssignedManager
Get the manager responsible for the client.
C++
UINT64 IMTClient::AssignedManager() const  
---  
.NET (Gateway/Manager API)
ulong CIMTClient.AssignedManager()  
---  
Return Value
The manager login.
IMTClient::AssignedManager
Set the manager responsible for the client.
C++
MTAPIRES IMTClient::AssignedManager( const UINT64 manager // Client manager )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTClient.AssignedManager( ulong manager // Client manager )  
---  
Parameters
manager
[in] Client manager login.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
[IMTConManager::Login](imtconmanager_login.md "Login") is used for the login.