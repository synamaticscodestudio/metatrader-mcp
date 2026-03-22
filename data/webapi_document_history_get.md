# Get Document History (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Clients ](webapi_client.md "Clients")/ Get Document History | [](webapi_document_get.md "Get Document") [](webapi_comment_add.md "Add Comment") |
| --- | --- | --- |
| --- | --- |

Get the History of Document Changes
The request allows receiving the change history of as document bound to a client record.
Request Format
GET /api/document/history/get?id=identifier&from=date&to=date&author=login POST /api/document/history/get?id=identifier&from=date&to=date&author=login  
---  
Response Format
{ "retcode" : "code description", "answer" : [ { document state description }, { document state description }, ... ] }  
---  
Example
//--- request to the server GET /api/document/history/get?id=41084&from=1552395829&to=1584104703 //--- server response { "retcode" : "0 Done", "answer" : [ { "RecordID" : "41084", "RelatedClient" : "1032", "DateIssue" : "0", "DocumentType" : "1", "DocumentSubtype" : "2", "DocumentName" : "Passport", ... }, { "RecordID" : "41084", "RelatedClient" : "1032", "DateIssue" : "1584025410", "DocumentType" : "1", "DocumentSubtype" : "2", "DocumentName" : "Passport", }, ... ] }  
---  
Request Parameters
  * id — the ID of the document for which you wish to obtain the history of changes.
  * from — the beginning of the period for which you wish to get the history of document changes. The date is specified in seconds since 01.01.1970.
  * to — the end of the period for which you wish to get the history of document changes. The date is specified in seconds since 01.01.1970.
  * author — the login of the manager account by whom the document was changed. It is used as a filter. An optional parameter. If the author is not specified or is equal to zero, changes made by any manager will be returned.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — an array of document states in JSON format. The complete description of passed parameters is available under the ["Data structure"](webapi_client_data_structure.htm#document) section.

Note
The request returns an array of document descriptions: all the client states after changes by the specified author in the specified time period.