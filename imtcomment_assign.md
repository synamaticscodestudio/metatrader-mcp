# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTComment ](imtcomment.md "IMTComment")/ Assign | [](imtcomment_release.md "Release") [](imtcomment_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTComment::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTComment::Assign( const IMTComment* comment // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode IMTComment.Assign( CIMTComment comment // Source object )  
---  
Parameters
comment
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.