# Size (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetColumn ](imtdatasetcolumn.md "IMTDatasetColumn")/ Size | [](imtdatasetcolumn_offset.md "Offset") [](imtdatasetsummary.md "IMTDatasetSummary") |
| --- | --- | --- |
| --- | --- |

IMTDatasetColumn::Size
Get the size of the column data in bytes.
UINT IMTDatasetColumn::Size() const  
---  
Return Value
Size of the column data in bytes.
Note
In all cases except strings data size is specified by its type ([IMTDatasetColumn::EnType](imtdatasetcolumn_enum.htm#entype)).
IMTDatasetColumn::Size
Set the size of the column data in bytes.
MTAPIRES IMTDatasetColumn::Size( const UINT size // Size )  
---  
Parameters
size
[in] Size in bytes.
Note
This method can be used only for strings. In all other cases the size is specified by data type ([IMTDatasetColumn::EnType](imtdatasetcolumn_enum.htm#entype)).
While specifying a size of strings, remember that they are in Unicode. E.g., 32 bytes size should be specified for a 16 symbols string.