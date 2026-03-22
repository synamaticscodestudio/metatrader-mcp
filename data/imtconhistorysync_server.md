# Server (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ History Synchronization ](config_historysync.md "History Synchronization") / [ IMTConHistorySync ](imtconhistorysync.md "IMTConHistorySync")/ Server | [](imtconhistorysync_clear.md "Clear") [](imtconhistorysync_servertype.md "ServerType") |
| --- | --- | --- |
| --- | --- |

IMTConHistorySync::Server
Get the IP address or the domain name of the server, with which history data are synchronized.
C++
LPCWSTR IMTConHistorySync::Server() const  
---  
.NET (Gateway/Manager API)
string CIMTConHistorySync.Server()  
---  
Python (Manager API)
MTConHistorySync.Server  
---  
Return Value
If successful, it returns a pointer to the string with the IP address or the domain name of the synchronization server. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConHistorySync](imtconhistorysync.md "IMTConHistorySync") object.
To use the string after the object removal (call of the [IMTConHistorySync::Release](imtconhistorysync_release.md "Release") method of this object), a copy of it should be created.
IMTConHistorySync::Server
Set the IP address or the domain name of the server, with which history data are synchronized.
C++
MTAPIRES IMTConHistorySync::Server( LPCWSTR server // Synchronization server )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConHistorySync.Server( string server // Synchronization server )  
---  
Python (Manager API)
MTConHistorySync.Server  
---  
Parameters
server
[in] The IP address or the domain name of the history data synchronization server.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
For the synchronization server, a port can be additionally specified, separated by a colon from the address of the server.
The maximum length of the server address is 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.