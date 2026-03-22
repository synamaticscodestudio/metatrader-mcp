# Add Document (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Clients ](webapi_client.md "Clients")/ Add Document | [](webapi_client_user_logins.md "Get Accounts") [](webapi_document_update.md "Update Document") |
| --- | --- | --- |
| --- | --- |

Add a Document to a Client
The request allows adding a document to a client record.
Request Format
POST /api/document/add [ One or more document descriptions in JSON format ]  
---  
Response Format
[ { "id" : "identifier", "retcode" : "code description", }, { "id" : "identifier", "retcode" : "code description", }, ... ]  
---  
Example
//--- request to the server POST /api/document/add [ { "RelatedClient" : "1032", "DocumentType" : "1", "DocumentSubtype" : "2", "DocumentName" : "Passport" }, { "RelatedClient" : "1032", "DocumentType" : "2", "DocumentSubtype" : "5", "DocumentName" : "Utility bill" } ] //--- server response [ { "id" : "1278", "retcode" : "0 Done", }, { "id" : "1279", "retcode" : "0 Done", }, ... ]  
---  
Request Parameters
The request has no parameters. The description of the document to be created is passed in the JSON body of the request.
The mandatory field is "RelatedClient", based on which the document is bound to a client record. The complete description of the possible user parameters is provided in the ["Data structure"](webapi_client_data_structure.htm#document) section.
The JSON description of the document passed when creating is the same as the description returned by the server. For example;
{ "RelatedClient" : "1032", "DocumentType" : "2", "DocumentSubtype" : "5", "DocumentName" : "Utility bill", ... }  
---  
Response Parameters
  * id — created document identifier.
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
  * A document can only be added from the applications connected to the trading server on which the client was created. For all other applications, the response code [12001](retcodes_api.md "API") is returned. If the client is not found, the response code [13](retcodes_common.md "Common errors") is returned.
  * If a document is added with the zero identifier ([RecordID](webapi_client_data_structure.htm#document)), the ID will be automatically assigned by the server.
