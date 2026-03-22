# ServerRestartRemote (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Server Services ](serverapi_server_services.md "Server Services")/ ServerRestartRemote | [](imtserverapi_serverrestart.md "ServerRestart") [](imtserverapi_serversubscribe.md "ServerSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ServerRestartRemote
Restart the server with the specified identifier.
MTAPIRES IMTServerAPI::ServerRestartRemote( const UINT64 id, // Server ID reason reason // Reason for restart )  
---  
Parameters
id
[in] The identifier of the server to be restarted ([IMTConServer::Id](imtconserver_id.md "Id"))
reason
[in] Description of the reason for restarting the server. This reason will be printed to the server log.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
When the main trade server is restarted from the API, other servers of the cluster are not restarted.