# Clients (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)")/ Clients | [](webapi_notifications_send.md "Send Push Notifications") [](webapi_client_data_structure.md "Data Structure") |
| --- | --- | --- |
| --- | --- |

Clients
The following commands are available for working with clients (trading accounts) on the server:
| Request | Description |
| --- | --- |
| --- | --- |
| [/api/client/add](webapi_client_add.md "Add") | Create a client on the server. |
| [/api/client/update](webapi_client_update.md "Update") | Update client data on the server. |
| [/api/client/delete](webapi_client_delete.md "Delete") | Delete a client from the server. |
| [/api/client/get](webapi_client_get.md "Get") | Get client information by the client ID. |
| [/api/client/history/get](webapi_client_history_get.md "Get Change History") | Get the history of client record changes in the specified period of time. |
| [/api/client/get_ids](webapi_client_ids.md "Get Identifiers") | Get the list of identifiers of all clients available to the manager. |
| [/api/client/user/add](webapi_client_user_add.md "Bind Account") | Bind a trading account to a client. |
| [/api/client/user/delete](webapi_client_user_delete.md "Unbind Account") | Unbind a trading account from a client. |
| [/api/client/user/get_logins](webapi_client_user_logins.md "Get Accounts") | Get the list of clients bound to a client record. |
| [/api/document/add](webapi_document_add.md "Add Document") | Add a document to a client record. |
| [/api/document/update](webapi_document_update.md "Update Document") | Change a document bound to a client record. |
| [/api/document/delete](webapi_document_delete.md "Delete Document") | Delete a document from a client record. |
| [/api/document/get](webapi_document_get.md "Get Document") | Get a document from a client record. |
| [/api/document/history/get](webapi_document_history_get.md "Get Document History") | Get the history of changes in the document bound to a client record. |
| [/api/comment/add](webapi_comment_add.md "Add Comment") | Add a comment to a client record or to a document. |
| [/api/comment/update](webapi_comment_update.md "Update Comment") | Edit a comment to a client record or to a document. |
| [/api/comment/delete](webapi_comment_delete.md "Delete Comment") | Delete a comment from a client record or from a document. |
| [/api/comment/get](webapi_comment_get.md "Get Comment") | Get a comment added to a document or a client record. |
| [/api/attachment/add](webapi_attachment_add.md "Add Attachment") | Add an attachment file to a file database. |
| [/api/attachment/get](webapi_attachment_get.md "Get Attachment") | Get an attachment from the database by its identifier. |
| [/api/attachment/attach](webapi_attachment_attach.md "Bind/Unbind Attachment") | Attach or detach a file from a comment or document. |

The client data format is described in the "[Data Structure](webapi_client_data_structure.md "Data Structure")" section.