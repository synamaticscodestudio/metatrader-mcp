# Clients (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface")/ Clients | [](imtserverapi_leverageget.md "LeverageGet") [](imtserverapi_clientcreate.md "ClientCreate") |
| --- | --- | --- |
| --- | --- |

Clients
The MetaTrader 5 Server API allows managing a client database on a trade server. Using the server API, you can add or remove records, edit data and handle database change events. Use the API to expand the standard functionality of client management system in the platform, or to integrate it with external CRM systems.
A detailed description of operations with clients is provided in the [MetaTrader 5 Administrator documentation](https://support.metaquotes.net/en/docs/mt5/platform/administration/clients).
The client database is maintained separately for each trading server in the cluster. The plugin can only manage those clients that belong to [the server, on which the plugin is running](serverapi_configure_plugin.md "Configuration of Plugins").  
---  
The following client operation functions are available:
| Functions | Purpose |
| --- | --- |
| --- | --- |
| [ClientCreate](imtserverapi_clientcreate.md "ClientCreate") | Create a client object. |
| [ClientCreateArray](imtserverapi_clientcreatearray.md "ClientCreateArray") | Create an object of the client array. |
| [ClientSubscribe](imtserverapi_clientsubscribe.md "ClientSubscribe") | Subscribe to events and hooks associated with changes in the client base. |
| [ClientUnsubscribe](imtserverapi_clientunsubscribe.md "ClientUnsubscribe") | Unsubscribe from the events and hooks associated with changes in the client base. |
| [ClientAdd](imtserverapi_clientadd.md "ClientAdd") | Add a client to the server database. |
| [ClientUpdate](imtserverapi_clientupdate.md "ClientUpdate") | Update a client in the server database. |
| [ClientDelete](imtserverapi_clientdelete.md "ClientDelete") | Delete a client from the server database. |
| [ClientGet](imtserverapi_clientget.md "ClientGet") | Get a client by identifier. |
| [ClientGetHistory](imtserverapi_clientgethistory.md "ClientGetHistory") | Get the history of client changes. |
| [ClientIdsAll](imtserverapi_clientidsall.md "ClientIdsAll") | Get the list of identifiers of all clients in the server database. |
| [ClientIdsByGroup](imtserverapi_clientidsbygroup.md "ClientIdsByGroup") | Get the list of identifiers of all clients in the server database filtered by the list of groups. |
| [ClientIdsByManager](imtserverapi_clientidsbymanager.md "ClientIdsByManager") | Get the list client identifiers available to the manager. |
| [ClientUserAdd](imtserverapi_clientuseradd.md "ClientUserAdd") | Bind a trading account to a client. |
| [ClientUserDelete](imtserverapi_clientuserdelete.md "ClientUserDelete") | Unbind a trading account from a client. |
| [ClientUserLogins](imtserverapi_clientuserlogins.md "ClientUserLogins") | Get the list of client's trading accounts. |
| [DocumentCreate](imtserverapi_documentcreate.md "DocumentCreate") | Create a document object. |
| [DocumentCreateArray](imtserverapi_documentcreatearray.md "DocumentCreateArray") | Create an object of the array of documents. |
| [DocumentSubscribe](imtserverapi_documentsubscribe.md "DocumentSubscribe") | Subscribe to events and hooks associated with changes in the document database. |
| [DocumentUnsubscribe](imtserverapi_documentunsubscribe.md "DocumentUnsubscribe") | Unsubscribe from the events and hooks associated with changes in the document database. |
| [DocumentAdd](imtserverapi_documentadd.md "DocumentAdd") | Add a document to a client record. |
| [DocumentUpdate](imtserverapi_documentupdate.md "DocumentUpdate") | Change a document in the client record. |
| [DocumentDelete](imtserverapi_documentdelete.md "DocumentDelete") | Delete a document from a client record. |
| [DocumentGet](imtserverapi_documentget.md "DocumentGet") | Get a document by identifier. |
| [DocumentGetByClient](imtserverapi_documentgetbyclient.md "DocumentGetByClient") | Get client documents by position. |
| [DocumentGetHistory](imtserverapi_documentgethistory.md "DocumentGetHistory") | Get the history of client document changes. |
| [CommentCreate](imtserverapi_commentcreate.md "CommentCreate") | Create a comment object. |
| [CommentCreateArray](imtserverapi_commentcreatearray.md "CommentCreateArray") | Create an object of the array of comments. |
| [CommentSubscribe](imtserverapi_commentsubscribe.md "CommentSubscribe") | Subscribe to events and hooks associated with changes in the comment database. |
| [CommentUnsubscribe](imtserverapi_commentunsubscribe.md "CommentUnsubscribe") | Unsubscribe from the events and hooks associated with changes in the comment database. |
| [CommentAdd](imtserverapi_commentadd.md "CommentAdd") | Add a comment to a document or client. |
| [CommentUpdate](imtserverapi_commentupdate.md "CommentUpdate") | Change a comment to a document or client. |
| [CommentDelete](imtserverapi_commentdelete.md "CommentDelete") | Delete a comment from a document or client. |
| [CommentGet](imtserverapi_commentget.md "CommentGet") | Get a comment by identifier. |
| [CommentGetByClient](imtserverapi_commentgetbyclient.md "CommentGetByClient") | Get comments on a client by position. |
| [CommentGetByDocument](imtserverapi_commentgetbydocument.md "CommentGetByDocument") | Get comments on client documents by position. |
| [AttachmentCreate](imtserverapi_attachmentcreate.md "AttachmentCreate") | Create an attachment object. |
| [AttachmentAdd](imtserverapi_attachmentadd.md "AttachmentAdd") | Create an attachment file for a document or a comment. |
| [AttachmentGet](imtserverapi_attachmentget.md "AttachmentGet") | Get an attachment by identifier. |