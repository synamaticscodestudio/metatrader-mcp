# FieldTotal (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetRequest ](imtdatasetrequest.md "IMTDatasetRequest")/ FieldTotal | [](imtdatasetrequest_fieldshift.md "FieldShift") [](imtdatasetrequest_fieldnext.md "FieldNext") |
| --- | --- | --- |
| --- | --- |

IMTDatasetRequest::FieldTotal
Get the total number of fields in a request.
UINT IMTDatasetRequest::FieldTotal()  
---  
Return Value
The number of rows in a table.
Note
A database query is performed as a collection of fields and selection conditions. Use this method to get the total number of fields in a request (optionally with conditions).