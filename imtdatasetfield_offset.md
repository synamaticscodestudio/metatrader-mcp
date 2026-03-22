# Offset (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetField ](imtdatasetfield.md "IMTDatasetField")/ Offset | [](imtdatasetfield_type.md "Type") [](imtdatasetfield_size.md "Size") |
| --- | --- | --- |
| --- | --- |

IMTDatasetField::Offset
Get the offset within one entry defining the data beginning.
UINT IMTDatasetField::Offset() const  
---  
Return Value
The offset within one entry defining the data beginning.
IMTDatasetField::Offset
Set the offset within one entry defining the data beginning.
MTAPIRES IMTDatasetField::Offset( const UINT offset // Offset )  
---  
Parameters
offset
[in] Offset within one entry defining the data beginning.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method is used for all field types. The offset must be set for fields with [IMTDatasetField::FLAG_SELECT](imtdatasetfield_enum.htm#enfieldflags).