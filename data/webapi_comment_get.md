# Get Comment (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Clients ](webapi_client.md "Clients")/ Get Comment | [](webapi_comment_delete.md "Delete Comment") [](webapi_attachment_add.md "Add Attachment") |
| --- | --- | --- |
| --- | --- |

Get a Comment on a Document or Client
The request allows receiving a comment added to a document or to a client record.
Request Format
GET /api/comment/get?id=list of IDs GET /api/comment/get?client=list of identifiers&position=position&total=number GET /api/comment/get?document=list of identifiers&position=position&total=number POST /api/comment/get?id=list of IDs POST /api/comment/get?client=list of identifiers&position=position&total=number POST /api/comment/get?document=list of identifiers&position=position&total=number  
---  
Response Format
{ "retcode" : "code description", "answer" : [ { comment description }, { comment description }, ... ] }  
---  
Example
//--- request to the server GET /api/comment/get?client=1032&position=0&total=2 //--- server response { "retcode" : "0 Done", "answer" : [ { "RecordID" : "1278", "RelatedClient" : "1032",  "Flags" : "0", "Text" : "<font face=\"Tahoma\">Called client, no answer<\/font>", "CommentType" : "2" ... }, { "RecordID" : "1279", "RelatedClient" : "1032",  "Flags" : "0", "Text" : "<font face=\"Tahoma\">Called client, ready to proceed with registration<\/font>", "CommentType" : "2" ... } ] }  
---  
Request Parameters
  * id — IDs of comments, data on which you wish to obtain. Specified as a comma separated list.
  * client — IDs of clients, for whom you wish to obtain comments. With this parameter, comments can be additionally filtered using parameters "position" and "total".
  * document — identifiers of documents for which you wish to receive comments. With this parameter, comments can be additionally filtered using parameters "position" and "total".
  * position — position in the list of client or document comments, starting with which comments should be obtained. An optional parameter which can be used together with the "client" or "document" parameter. It is equal to 0 by default (the first position in the list).
  * total — the number of comments which should be obtained. An optional parameter which can be used together with the "client" or "document" parameter. All comments are requested by default.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — an array of comment descriptions in JSON format. The complete description of passed parameters is available under the ["Data structure"](webapi_client_data_structure.htm#comment) section.
