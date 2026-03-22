# ClientGet (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Clients ](imtreportapi_client.md "Clients")/ ClientGet | [](imtreportapi_clientcreatearray.md "ClientCreateArray") [](imtreportapi_clientgethistory.md "ClientGetHistory") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::ClientGet
Get a client by identifier.
MTAPIRES IMTReportAPI::ClientGet( const UINT64 client_id, // ID IMTClient* client // Client object )  
---  
Parameters
client_id
[in] Client identifier ([IMTClient::RecordID](imtclient_recordid.md "RecordID")).
client
[out] Client object. The 'client' object must be previously created using the [IMTReportAPI::ClientCreate](imtreportapi_clientcreate.md "ClientCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The method copies data of a client with the specified ID, to the 'client' object.
The method takes into account whether the clients are available to the specific [manager account, from which the report is requested](reportapi_request.md "Request for Reports").