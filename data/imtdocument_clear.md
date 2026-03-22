# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Clients ](reference_client.md "Clients") / [ IMTDocument ](imtdocument.md "IMTDocument")/ Clear | [](imtdocument_assign.md "Assign") [](imtdocument_recordid.md "RecordID") |
| --- | --- | --- |
| --- | --- |

IMTDocument::Clear
Clear an object.
C++
MTAPIRES IMTDocument::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDocument.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
This method clears all fields ​​and removes nested objects.