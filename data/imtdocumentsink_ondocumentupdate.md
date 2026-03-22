# OnDocumentUpdate (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTDocumentSink ](imtdocumentsink.md "IMTDocumentSink")/ OnDocumentUpdate | [](imtdocumentsink_ondocumentadd.md "OnDocumentAdd") [](imtdocumentsink_ondocumentdelete.md "OnDocumentDelete") |
| --- | --- | --- |
| --- | --- |

IMTDocumentSink::OnDocumentUpdate
Document update event handler.
C++
virtual void IMTDocumentSink::OnDocumentUpdate( const IMTDocument* document // A pointer to the document )  
---  
.NET (Gateway/Manager API)
virtual void CIMTDocumentSink.OnDocumentUpdate( CIMTDocument document // Document object )  
---  
Parameters
document
[in] A pointer to the document object.
Note
This method is called by the API to notify of a document update.