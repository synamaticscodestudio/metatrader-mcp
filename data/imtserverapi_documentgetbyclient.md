# DocumentGetByClient (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ DocumentGetByClient | [](imtserverapi_documentget.md "DocumentGet") [](imtserverapi_documentgethistory.md "DocumentGetHistory") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DocumentGetByClient
Get client documents by position.
MTAPIRES IMTServerAPI::DocumentGetByClient( const UINT64 client_id, // Client ID const UINT position, // Start position const UINT total, // Number IMTDocumnentArray* documents // Array of documents )  
---  
Parameters
client_id
[in] Client identifier ([IMTClient::RecordID](imtclient_recordid.md "RecordID")).
position
[in] Position in the list of documents, starting with 0. The method returns documents starting with this position.
total
[in] The number of documents which should be received.
documents
[out] An object of an array of documents. The 'documents' object must be previously created using the [IMTServerAPI::DocumentCreateArray](imtserverapi_documentcreatearray.md "DocumentCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.