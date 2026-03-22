# OnDocumentDelete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTDocumentSink ](imtdocumentsink.md "IMTDocumentSink")/ OnDocumentDelete | [](imtdocumentsink_ondocumentupdate.md "OnDocumentUpdate") [](imtattachment.md "IMTAttachment") |
| --- | --- | --- |
| --- | --- |

IMTDocumentSink::OnDocumentDelete
Document deletion event handler.
C++
virtual void IMTDocumentSink::OnDocumentDelete( const IMTDocument* document // A pointer to the document object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTDocumentSink.OnDocumentDelete( CIMTDocument  document // Document object )  
---  
Parameters
document
[in] A pointer to the deleted document object.
Note
This method is called by the API to notify of a document deletion.