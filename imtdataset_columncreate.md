# ColumnCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDataset ](imtdataset.md "IMTDataset")/ ColumnCreate | [](imtdataset_flags.md "Flags") [](imtdataset_columnclear.md "ColumnClear") |
| --- | --- | --- |
| --- | --- |

IMTDataset::ColumnCreate
Create a column object.
IMTDatasetColumn* IMTDataset::ColumnCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTDatasetColumn](imtdatasetcolumn.md "IMTDatasetColumn") interface. In case of a failure, it returns NULL.
Note
The created object should be destroyed by calling the [IMTDatasetColumn::Release](imtdatasetcolumn_release.md "Release") method of this object.