# Type (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetColumn ](imtdatasetcolumn.md "IMTDatasetColumn")/ Type | [](imtdatasetcolumn_columnid.md "ColumnID") [](imtdatasetcolumn_width.md "Width") |
| --- | --- | --- |
| --- | --- |

IMTDatasetColumn::Type
Get a column type.
UINT IMTDatasetColumn::Type() const  
---  
Return Value
A value of the [IMTDatasetColumn::EnType](imtdatasetcolumn_enum.htm#entype) enumeration.
Note
The type specifies the size and the format of displaying an appropriate field in an entry's structure.
IMTDatasetColumn::Type
Set a column type.
MTAPIRES IMTDatasetColumn::Type( const UINT type // Type of a column )  
---  
Parameters
type
[in] Type of a column. To pass the options, the [IMTDatasetColumn::EnType](imtdatasetcolumn_enum.htm#entype) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The type specifies the size and the format of displaying an appropriate field in an entry's structure.