# Get Document (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Clients ](webapi_client.md "Clients")/ Get Document | [](webapi_document_delete.md "Delete Document") [](webapi_document_history_get.md "Get Document History") |
| --- | --- | --- |
| --- | --- |

Get Client Document
The request allows receiving a document from a client record.
Request Format
GET /api/document/get?id=list of IDs GET /api/document/get?client=list of identifiers&position=position&total=number POST /api/document/get?id=list of IDs POST /api/document/get?client=list of identifiers&position=position&total=number  
---  
Response Format
{ "retcode" : "code description", "answer" : [ { document description }, { document description }, ... ] }  
---  
Example
//--- request to the server GET /api/document/get?client=1032&position=0&total=2 //--- server response { "retcode" : "0 Done", "answer" : [ { "RelatedClient" : "1032", "DocumentType" : "1", "DocumentSubtype" : "2", "DocumentName" : "Passport", ... }, { "RecordID" : "1279", "RelatedClient" : "1032", "DocumentType" : "2", "DocumentSubtype" : "5", "DocumentName" : "Utility bill" ... } ] }  
---  
Request Parameters
  * id — IDs of documents, data on which you wish to obtain. Specified as a comma separated list.
  * client — IDs of clients, whose documents should be received. With this parameter, document can be additionally filtered using parameters "position" and "total".
  * position — position in the list of client documents, starting with which documents should be obtained. An optional parameter which can be used together with the "client"parameter. It is equal to 0 by default (the first position in the list).
  * total — the number of client documents which should be obtained. An optional parameter which can be used together with the "client"parameter. All documents are requested by default.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — an array of document descriptions in JSON format. The complete description of passed parameters is available under the ["Data structure"](webapi_client_data_structure.htm#document) section.
