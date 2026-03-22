# Name (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetColumn ](imtdatasetcolumn.md "IMTDatasetColumn")/ Name | [](imtdatasetcolumn_clear.md "Clear") [](imtdatasetcolumn_columnid.md "ColumnID") |
| --- | --- | --- |
| --- | --- |

IMTDatasetColumn::Name
Get a column name shown in the manager terminal.
LPCWSTR IMTDatasetColumn::Name() const  
---  
Return Value
If successful, it returns a pointer to the string with the column name. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTDatasetColumn](imtdatasetcolumn.md "IMTDatasetColumn") object.
To use the line after the object removal (call of the [IMTDatasetColumn::Release](imtdatasetcolumn_release.md "Release") method of this object), a copy of it should be created.
IMTDatasetColumn::Name
Set a column name shown in the manager terminal.
MTAPIRES IMTDatasetColumn::Name( LPCWSTR name // Column name )  
---  
Parameters
name
[in] Column name.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The maximum name length is 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.