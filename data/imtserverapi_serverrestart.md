# ServerRestart (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Server Services ](serverapi_server_services.md "Server Services")/ ServerRestart | [](serverapi_server_services.md "Server Services") [](imtserverapi_serverrestartremote.md "ServerRestartRemote") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ServerRestart
Restart the server on which the plugin is running.
MTAPIRES IMTServerAPI::ServerRestart()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred which corresponds to the response code.
Note
When the main trade server is restarted from the API, other servers of the cluster are not restarted.