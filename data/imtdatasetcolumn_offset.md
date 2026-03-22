# Offset (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetColumn ](imtdatasetcolumn.md "IMTDatasetColumn")/ Offset | [](imtdatasetcolumn_flags.md "Flags") [](imtdatasetcolumn_size.md "Size") |
| --- | --- | --- |
| --- | --- |

IMTDatasetColumn::Offset
Get the shift inside the one entry specifying the beginning of a column data.
UINT IMTDatasetColumn::Offset() const  
---  
Return Value
Shift inside the one entry specifying the beginning of a column data.
IMTDatasetColumn::Offset
Set the shift inside the one entry specifying the beginning of a column data.
MTAPIRES IMTDatasetColumn::Offset( const UINT offset // Shift )  
---  
Parameters
offset
[in] Shift inside the one entry specifying the beginning of a column data.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.