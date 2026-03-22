# Get Attachment (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Clients ](webapi_client.md "Clients")/ Get Attachment | [](webapi_attachment_add.md "Add Attachment") [](webapi_attachment_attach.md "Bind/Unbind Attachment") |
| --- | --- | --- |
| --- | --- |

Get Attachment
This request allows receiving attachments from the database by a list of identifiers.
Request Format
GET /api/attachment/get?id=list of identifiers POST /api/attachment/get?id=list of IDs  
---  
Response Format
{ "retcode" : "code description", "answer" : [ { attachment description }, { attachment description }, ... ] }  
---  
Example
//--- request to the server GET /atachment_get?id=1278,1279 //--- server response { "retcode" : "0 Done", "answer" : [ { "RecordID" : "1278", "RelatedClient" : "1032", "FileType" : "4", "FileName" : "image 2020-03-12 09-53.jpg", ... }, { "RecordID" : "1279", "RelatedClient" : "1032", "FileType" : "2", "FileName" : "image 2020-03-12 09-54.jpg ... } ] }  
---  
Request Parameters
  * id — IDs of attachments, data on which you wish to obtain. Specified as a comma separated list.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — array of attachment descriptions in JSON format. The complete description of passed parameters is available under the ["Data structure"](webapi_client_data_structure.htm#attachment) section.
