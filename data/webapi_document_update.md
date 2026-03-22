# Update Document (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Clients ](webapi_client.md "Clients")/ Update Document | [](webapi_document_add.md "Add Document") [](webapi_document_delete.md "Delete Document") |
| --- | --- | --- |
| --- | --- |

Update Client Documents
The request allows changing a document bound to a client record.
Request Format
POST /api/document/update [ One or more document descriptions in JSON format ]  
---  
Response Format
[ { "id" : "identifier", "retcode" : "code description", }, { "id" : "identifier", "retcode" : "code description", }, ... ]  
---  
Example
//--- request to the server POST /api/document/update [ { "RecordID" : "1278", "RelatedClient" : "1032", "DocumentType" : "1", "DocumentSubtype" : "2", "DocumentName" : "Passport" }, { "RecordID" : "1279", "RelatedClient" : "1032", "DocumentType" : "2", "DocumentSubtype" : "5", "DocumentName" : "Utility bill" } ] //--- server response [ { "id" : "1278", "retcode" : "0 Done", }, { "id" : "1279", "retcode" : "0 Done", }, ... ]  
---  
Request Parameters
The request has no parameters. The description of the document to be created is passed in the JSON body of the request.
The RecordID and RelatedClient fields are mandatory. The document is identified by these fields. The complete description of the possible user parameters is provided in the ["Data structure"](webapi_client_data_structure.htm#document) section.
The JSON description of the document passed when updating is the same as the description returned by the server. For example;
{ "RelatedClient" : "1032", "DocumentType" : "2", "DocumentSubtype" : "5", "DocumentName" : "Utility bill", ... }  
---  
Response Parameters
  * id — created document identifier.
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
A document can only be updated from the applications connected to the trade server, on which the document was created. For all other applications, the response code [12001](retcodes_api.md "API") is returned. If the client is not found, the response code [13](retcodes_common.md "Common errors") is returned.