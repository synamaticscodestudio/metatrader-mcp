# Clients (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces")/ Clients | [](imtdailysink_ondailysync.md "OnDailySync") [](imtclient.md "IMTClient") |
| --- | --- | --- |
| --- | --- |

Clients
The MetaTrader 5 Server API allows managing a client database on a trade server. Using the server API, you can add or remove records, edit data and handle database change events. Use the API to expand the standard functionality of client management system in the platform, or to integrate it with external CRM systems.
A detailed description of operations with clients is provided in the [MetaTrader 5 Administrator documentation](https://support.metaquotes.net/en/docs/mt5/platform/administration/clients).
The client database is maintained separately for each trading server in the cluster. This includes the client database and separate auxiliary databases of comments, documents and attachments. The plugin can only manage those clients that belong to [the server, on which the plugin is running](serverapi_configure_plugin.md "Configuration of Plugins").  
---  
Operations with the clients are implemented via several interfaces which provide access to all client data and to additional database access possibilities:
  * [IMTClient](imtclient.md "IMTClient") — full description of a client.
  * [IMTClientArray](imtclientarray.md "IMTClientArray") — methods for efficient operations with client arrays.
  * [IMTClientSink](imtclientsink.md "IMTClientSink") — handlers of client database change events. 
  * [IMTComment](imtcomment.md "IMTComment") — description of comments which can be added to clients and their documents.
  * [IMTCommentArray](imtcommentarray.md "IMTCommentArray") — methods for efficient operations with comment arrays.
  * [IMTCommentSink](imtcommentsink.md "IMTCommentSink") — handlers of comment database change events. 
  * [IMTDocument](imtdocument.md "IMTDocument") — description of client documents.
  * [IMTDocumentArray](imtdocumentarray.md "IMTDocumentArray") — methods for efficient operations with document arrays.
  * [IMTDocumentSink](imtdocumentsink.md "IMTDocumentSink") — handlers of document database changes events. 
  * [IMTAttachment](imtattachment.md "IMTAttachment") — description of attachments used in documents and client comments.
  * [IMTAttachmentArray](imtattachmentarray.md "IMTAttachmentArray") — methods for efficient operations with attachment arrays.
