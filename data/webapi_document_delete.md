# Delete Document (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Clients ](webapi_client.md "Clients")/ Delete Document | [](webapi_document_update.md "Update Document") [](webapi_document_get.md "Get Document") |
| --- | --- | --- |
| --- | --- |

Delete Client Document
The request allows deleting a document from a client record.
Request Format
GET /api/document/delete?id=list of IDs POST /api/document/delete?id=list of IDs  
---  
Response Format
[ { "id" : "identifier", "retcode" : "code description", }, { "id" : "identifier", "retcode" : "code description", }, ... ]  
---  
Example
//--- request to the server GET /api/document/delete?id=1278,1279 //--- server response [ { "id" : "1278", "retcode" : "0 Done", }, { "id" : "1279", "retcode" : "0 Done", }, ... ]  
---  
Request Parameters
  * id — identifiers of documents to be deleted. Specified as a comma separated list.

Response Parameters
  * id — identifier of a deleted document.
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
A document can only be deleted from the applications connected to the trade server, on which the document was created. For all other applications, the response code [12001](retcodes_api.md "API") is returned. If the object is not found, the response code [13](retcodes_common.md "Common errors") is returned.