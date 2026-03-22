# OnCommentUpdate (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTCommentSink ](imtcommentsink.md "IMTCommentSink")/ OnCommentUpdate | [](imtcommentsink_oncommentadd.md "OnCommentAdd") [](imtcommentsink_oncommentdelete.md "OnCommentDelete") |
| --- | --- | --- |
| --- | --- |

IMTCommentSink::OnOrderUpdate
Comment update event handler.
C++
virtual void IMTCommentSink::OnOrderUpdate( const IMTComment* comment // A pointer to a comment )  
---  
.NET (Gateway/Manager API)
virtual void CIMTCommentSink.OnOrderUpdate( CIMTComment comment // Comment object )  
---  
Parameters
comment
[in] A pointer to the comment object.
Note
This method is called by the API to notify of a comment update.