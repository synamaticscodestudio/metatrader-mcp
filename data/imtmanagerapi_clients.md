# Clients (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface")/ Clients | [](imtmanagerapi_selectednext.md "SelectedNext") [](imtmanagerapi_clientcreate.md "ClientCreate") |
| --- | --- | --- |
| --- | --- |

Clients
The MetaTrader 5 Manager API allows managing a database of clients on a trade server. Using the API, you can add or remove records, edit data and handle database change events. Use the API to expand the standard functionality of client management system in the platform, or to integrate it with external CRM systems.
A detailed description of operations with clients is provided in the [MetaTrader 5 Administrator documentation](https://support.metaquotes.net/en/docs/mt5/platform/administration/clients).
The Manager API only allows managing the clients, which are available to the manager account used by the application to [connect to the server](imtadminapi_connect.md "Connect"). A client record is available to the manager if one of the following conditions is met:
  * The client is created by this manager
  * The client is explicitly assigned to the manager ([IMTClient::AssignedManager](imtclient_assignedmanager.md "AssignedManager"))
  * The preferred trading group ([IMTClient::TradingGroup](imtclient_tradinggroup.md "TradingGroup")) set for the client is available to the manager (the manager has [permissions for the group](imtconmanager_groupadd.md "GroupAdd"))
  * Any of the [trading accounts bound to the client](imtadminapi_clientuseradd.md "ClientUserAdd") is available to the manager (the manager has [permissions for the group](imtconmanager_groupadd.md "GroupAdd") in which the account is located)

  
---  
The following client operation functions are available:
| Functions | Purpose |
| --- | --- |
| --- | --- |
| [ClientCreate](imtmanagerapi_clientcreate.md "ClientCreate") | Create a client object. |
| [ClientCreateArray](imtmanagerapi_clientcreatearray.md "ClientCreateArray") | Create an object of the client array. |
| [ClientAdd](imtmanagerapi_clientadd.md "ClientAdd") | Add a client to the server database. |
| [ClientAddBatch](imtmanagerapi_clientaddarray.md "ClientAddBatch") | Add a batch of clients to the server database. |
| [ClientAddBatchArray](imtmanagerapi_clientaddarraybatch.md "ClientAddBatchArray") | Add a batch of clients to the server database. |
| [ClientUpdate](imtmanagerapi_clientupdate.md "ClientUpdate") | Update a client in the server database. |
| [ClientUpdateBatch](imtmanagerapi_clientupdatebatch.md "ClientUpdateBatch") | Update a batch of clients in the server database. |
| [ClientUpdateBatchArray](imtmanagerapi_clientupdatebatcharray.md "ClientUpdateBatchArray") | Update a batch of clients in the server database. |
| [ClientDelete](imtmanagerapi_clientdelete.md "ClientDelete") | Delete a client from the server database. |
| [ClientDeleteBatch](imtmanagerapi_clientdeletebatch.md "ClientDeleteBatch") | Delete a batch of clients from the server database. |
| [ClientRequest](imtmanagerapi_clientrequest.md "ClientRequest") | Get a client by identifier. |
| [ClientRequestByGroup](imtmanagerapi_clientrequestbygroup.md "ClientRequestByGroup") | Get clients by groups. |
| [ClientRequestHistory](imtmanagerapi_clientrequesthistory.md "ClientRequestHistory") | Get the history of client changes. |
| [ClientUserAdd](imtmanagerapi_clientuseradd.md "ClientUserAdd") | Bind a trading account to a client. |
| [ClientUserAddBatch](imtmanagerapi_clientuseraddbatch.md "ClientUserAddBatch") | Bind a batch of trading accounts to a client. |
| [ClientUserDelete](imtmanagerapi_clientuserdelete.md "ClientUserDelete") | Unbind a trading account from a client. |
| [ClientUserDeleteBatch](imtmanagerapi_clientuserdeletebatch.md "ClientUserDeleteBatch") | Unbind a batch of trading accounts from a client. |
| [ClientUserRequest](imtmanagerapi_clientuserrequest.md "ClientUserRequest") | Get the list of client's trading accounts. |
| [DocumentCreate](imtmanagerapi_documentcreate.md "DocumentCreate") | Create a document object. |
| [DocumentCreateArray](imtmanagerapi_documentcreatearray.md "DocumentCreateArray") | Create an object of the array of documents. |
| [DocumentAdd](imtmanagerapi_documentadd.md "DocumentAdd") | Add a document to a client record. |
| [DocumentAddBatch](imtmanagerapi_documentaddbatch.md "DocumentAddBatch") | Add a document to a client record. |
| [DocumentAddBatchArray](imtmanagerapi_documentaddbatcharray.md "DocumentAddBatchArray") | Add a document to a client record. |
| [DocumentUpdate](imtmanagerapi_documentupdate.md "DocumentUpdate") | Change a document in the client record. |
| [DocumentUpdateBatch](imtmanagerapi_documentupdatebatch.md "DocumentUpdateBatch") | Change a document in the client record. |
| [DocumentUpdateBatchArray](imtmanagerapi_documentupdatebatcharray.md "DocumentUpdateBatchArray") | Change a document in the client record. |
| [DocumentDelete](imtmanagerapi_documentdelete.md "DocumentDelete") | Delete a document from a client record. |
| [DocumentDeleteBatch](imtmanagerapi_documentdeletebatch.md "DocumentDeleteBatch") | Delete a document from a client record. |
| [DocumentRequest](imtmanagerapi_documentrequest.md "DocumentRequest") | Get a document by identifier. |
| [DocumentRequestByClient](imtmanagerapi_documentrequestbyclient.md "DocumentRequestByClient") | Get client documents. |
| [DocumentRequestHistory](imtmanagerapi_documentrequesthistory.md "DocumentRequestHistory") | Get the history of client document changes. |
| [CommentCreate](imtmanagerapi_commentcreate.md "CommentCreate") | Create a comment object. |
| [CommentCreateArray](imtmanagerapi_commentcreatearray.md "CommentCreateArray") | Create an object of the array of comments. |
| [CommentAdd](imtmanagerapi_commentadd.md "CommentAdd") | Add a comment to a document or client. |
| [CommentAddBatch](imtmanagerapi_commentaddbatch.md "CommentAddBatch") | Add a batch of comments to a document or client. |
| [CommentAddBatchArray](imtmanagerapi_commentaddbatcharray.md "CommentAddBatchArray") | Add a batch of comments to a document or client. |
| [CommentUpdate](imtmanagerapi_commentupdate.md "CommentUpdate") | Change a comment to a document or client. |
| [CommentUpdateBatch](imtmanagerapi_commentupdatebatch.md "CommentUpdateBatch") | Update a batch of comments to a document or client. |
| [CommentUpdateBatchArray](imtmanagerapi_commentupdatebatcharray.md "CommentUpdateBatchArray") | Update a batch of comments to a document or client. |
| [CommentDelete](imtmanagerapi_commentdelete.md "CommentDelete") | Delete a comment from a document or client. |
| [CommentDeleteBatch](imtmanagerapi_commentdeletebatch.md "CommentDeleteBatch") | Delete a batch of comments from a document or client. |
| [CommentRequest](imtmanagerapi_commentrequest.md "CommentRequest") | Get a comment by identifier. |
| [CommentRequestByClient](imtmanagerapi_commentrequestbyclient.md "CommentRequestByClient") | Get comments on a client by position. |
| [CommentRequestByDocument](imtmanagerapi_commentrequestbydocument.md "CommentRequestByDocument") | Get comments on client documents by position. |
| [AttachmentCreate](imtmanagerapi_attachmentcreate.md "AttachmentCreate") | Create an attachment object. |
| [AttachmentCreateArray](imtmanagerapi_attachmentcreatearray.md "AttachmentCreateArray") | Create an object of the array of attachments. |
| [AttachmentAdd](imtmanagerapi_attachmentadd.md "AttachmentAdd") | Create an attachment file for a document or a comment. |
| [AttachmentAddBatch](imtmanagerapi_attachmentaddbatch.md "AttachmentAddBatch") | Create attachment files for documents or comments in batch. |
| [AttachmentAddBatchArray](imtmanagerapi_attachmentaddbatcharray.md "AttachmentAddBatchArray") | Create attachment files for documents or comments in batch. |
| [AttachmentRequest](imtmanagerapi_attachmentrequest.md "AttachmentRequest") | Get attachments by identifiers. |