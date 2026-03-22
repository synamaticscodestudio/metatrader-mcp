# Size (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetField ](imtdatasetfield.md "IMTDatasetField")/ Size | [](imtdatasetfield_offset.md "Offset") [](imtdatasetfield_flags.md "Flags") |
| --- | --- | --- |
| --- | --- |

IMTDatasetField::Size
Get the size of the field data in bytes.
UINT IMTDatasetField::Size() const  
---  
Return Value
The size of the field data in bytes.
Note
In all cases except strings data size is specified by its type ([IMTDatasetField::EnFieldType](imtdatasetfield_enum.htm#enfieldtype)).
IMTDatasetField::Size
Set the size of the field data in bytes.
MTAPIRES IMTDatasetField::Size( const UINT size // Size )  
---  
Parameters
size
[in] Size in bytes.
Note
This method can be used only for strings. In all other cases the size is specified by data type ([IMTDatasetField::EnFieldType](imtdatasetfield_enum.htm#enfieldtype)).
While specifying string size, remember that strings are in the Unicode format. E.g., 32-byte size should be specified for a 16 symbols string.