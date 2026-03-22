# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTComment ](imtcomment.md "IMTComment")/ Clear | [](imtcomment_assign.md "Assign") [](imtcomment_recordid.md "RecordID") |
| --- | --- | --- |
| --- | --- |

IMTComment::Clear
Clear an object.
C++
MTAPIRES IMTComment::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTComment.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
This method clears all fields ​​and removes nested objects.