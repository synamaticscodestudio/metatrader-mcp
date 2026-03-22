# OnCommentDelete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTCommentSink ](imtcommentsink.md "IMTCommentSink")/ OnCommentDelete | [](imtcommentsink_oncommentupdate.md "OnCommentUpdate") [](imtdocument.md "IMTDocument") |
| --- | --- | --- |
| --- | --- |

IMTCommentSink::OnOrderDelete
Comment deletion event handler.
C++
virtual void IMTCommentSink::OnOrderDelete( const IMTComment* comment // A pointer to the comment object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTCommentSink.OnOrderDelete( CIMTComment  comment // Comment object )  
---  
Parameters
comment
[in] A pointer to the deleted comment object.
Note
This method is called by the API to notify of a comment deletion.