# OnCommentAdd (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTCommentSink ](imtcommentsink.md "IMTCommentSink")/ OnCommentAdd | [](imtcommentsink.md "IMTCommentSink") [](imtcommentsink_oncommentupdate.md "OnCommentUpdate") |
| --- | --- | --- |
| --- | --- |

IMTCommentSink::OnOrderAdd
New comment adding event handler.
C++
virtual void IMTCommentSink::OnCommentAdd( const IMTComment* comment // A pointer to the comment object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTCommentSink.OnCommentAdd( CIMTComment comment // Comment object )  
---  
Parameters
comment
[in] A pointer to the comment object.
Note
This method is called by the API to notify that a new comment has been added.