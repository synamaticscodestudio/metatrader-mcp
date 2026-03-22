# Update Comment (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Clients ](webapi_client.md "Clients")/ Update Comment | [](webapi_comment_add.md "Add Comment") [](webapi_comment_delete.md "Delete Comment") |
| --- | --- | --- |
| --- | --- |

Update a Document or Client Comment
The request allows changing a comment to a client record or to a document.
Request Format
POST /api/comment/update [ One or more comment descriptions in JSON format ]  
---  
Response Format
[ { "id" : "identifier", "retcode" : "code description", }, { "id" : "identifier", "retcode" : "code description", }, ... ]  
---  
Example
//--- request to the server POST /api/comment/update [ { "RecordID" : "1278", "RelatedClient" : "1032",  "Flags" : "0", "Text" : "<font face=\"Tahoma\">Called client, no answer<\/font>", "CommentType" : "2" }, { "RecordID" : "1279", "RelatedClient" : "1032",  "Flags" : "0", "Text" : "<font face=\"Tahoma\">Called client, ready to proceed with registration<\/font>", "CommentType" : "2" } ] //--- server response [ { "id" : "1278", "retcode" : "0 Done", }, { "id" : "1279", "retcode" : "0 Done", }, ... ]  
---  
Request Parameters
The request has no parameters. The description of comment changes is passed in the JSON body of the request.
The RecordID field is mandatory. The comment to be edited is determined by this field. The complete description of the possible user parameters is provided in the ["Data structure"](webapi_client_data_structure.htm#comment) section.
The JSON description of the document passed when updating is the same as the description returned by the server. For example;
{ "RelatedClient" : "1032",  "Flags" : "0", "Text" : "<font face=\"Tahoma\">Called client, no answer<\/font>", "CommentType" : "2" ... }  
---  
Response Parameters
  * id — identifier of the updated comment.
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
A comment can only be updated from the applications connected to the trade server, on which the comment was created. For all other applications, the response code [12001](retcodes_api.md "API") is returned. If the client is not found, the response code [13](retcodes_common.md "Common errors") is returned.