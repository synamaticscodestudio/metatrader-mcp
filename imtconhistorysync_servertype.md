# ServerType (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ History Synchronization ](config_historysync.md "History Synchronization") / [ IMTConHistorySync ](imtconhistorysync.md "IMTConHistorySync")/ ServerType | [](imtconhistorysync_server.md "Server") [](imtconhistorysync_login.md "Login") |
| --- | --- | --- |
| --- | --- |

IMTConHistorySync::ServerType
Gets the type of the server with which history data are synchronized.
C++
UINT IMTConHistorySync::ServerType() const  
---  
.NET (Gateway/Manager API)
uint CIMTConHistorySync.ServerType()  
---  
Python (Manager API)
MTConHistorySync.ServerType  
---  
Return Value
A value from the [IMTConHistorySync::EnHistorySyncServer](imtconhistorysync_enum.htm#enhistorysyncserver) enumeration.
IMTConHistorySync::ServerType
Sets the type of the server with which history data are synchronized.
C++
MTAPIRES IMTConHistorySync::ServerType( const UINT type // Server type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConHistorySync.ServerType( uint type // Server type )  
---  
Python (Manager API)
MTConHistorySync.ServerType  
---  
Parameters
type
[in] The type of the server with which history data are synchronized is passed using the [IMTConHistorySync::EnHistorySyncServer](imtconhistorysync_enum.htm#enhistorysyncserver) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.