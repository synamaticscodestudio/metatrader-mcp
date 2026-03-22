# CommentRequestByClient (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Clients ](imtmanagerapi_clients.md "Clients")/ CommentRequestByClient | [](imtmanagerapi_commentrequest.md "CommentRequest") [](imtmanagerapi_commentrequestbydocument.md "CommentRequestByDocument") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::CommentRequestByClient
Get comments on a client by position.
C++
MTAPIRES IMTManagerAPI::CommentGetByClient( const UINT64 client_id, // client identifier const UINT position, // initial position const UINT total, // number IMTCommentArray* comments // array of comments )  
---  
.NET
MTRetCode CIMTManagerAPI.CommentGetByClient( ulong client_id, // client identifier uint position, // initial position uint total, // number CIMTCommentArray comments // array of comments )  
---  
Parameters
client_id
[in] Client identifier ([IMTClient::RecordID](imtclient_recordid.md "RecordID")).
position
[in] Position in the list of comments, starting with 0. The method returns comments starting with this position.
total
[in] The number of comments which should be received.
comments
[out] An object of an array of comments. The 'comments' object must be previously created using the [IMTManagerAPI::CommentCreateArray](imtmanagerapi_commentcreatearray.md "CommentCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).