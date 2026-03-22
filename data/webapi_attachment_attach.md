# Bind/Unbind Attachment (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Clients ](webapi_client.md "Clients")/ Bind/Unbind Attachment | [](webapi_attachment_get.md "Get Attachment") [](webapi_mail.md "Mail") |
| --- | --- | --- |
| --- | --- |

Bind/Unbind Attachment
The request allows attaching a file or removing an attached files from a comment or a document.
Request Format
GET /api/attachment/attach?id=attachments&entity=destination&entity_id=identifier&action=action POST /api/attachment/attach?id=attachments&entity=destination&entity_id=identifier&action=action  
---  
Response Format
{ "retcode" : "code description", }  
---  
Example
//--- request to the server GET /api/attachment/attach?id=731&entity=document&entity_id=41084&action=attach //--- server response { "retcode" : "0 Done", }  
---  
Request Parameters
  * id — attachment identifier. Can be received using [/api/attachment/add](webapi_attachment_add.md "Add Attachment") and [/api/attachment/get](webapi_attachment_get.md "Get Attachment") requests.
  * entity — the entity to which the file is attached (or from which the attachment is removed): document or comment.
  * entity_id — document or comment identifier.
  * action — the action to be performed: attach or detach.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
