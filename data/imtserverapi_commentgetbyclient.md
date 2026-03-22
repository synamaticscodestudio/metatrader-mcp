# CommentGetByClient (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ CommentGetByClient | [](imtserverapi_commentget.md "CommentGet") [](imtserverapi_commentgetbydocument.md "CommentGetByDocument") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::CommentGetByClient
Get comments on a client by position.
MTAPIRES IMTServerAPI::CommentGetByClient( const UINT64 client_id, // Client ID const UINT position, // Start position const UINT total, // Number IMTCommentArray* comments // Array of comments )  
---  
Parameters
client_id
[in] Client identifier ([IMTClient::RecordID](imtclient_recordid.md "RecordID")).
position
[in] Position in the list of comments, starting with 0. The method returns comments starting with this position.
total
[in] The number of comments which should be received.
comments
[out] An object of an array of comments. The 'comments' object must be previously created using the [IMTServerAPI::CommentCreateArray](imtserverapi_commentcreatearray.md "CommentCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.