# Flags (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDataset ](imtdataset.md "IMTDataset")/ Flags | [](imtdataset_clear.md "Clear") [](imtdataset_columncreate.md "ColumnCreate") |
| --- | --- | --- |
| --- | --- |

IMTDatasetSummary::Flags
Get the flags of a dashboard data set.
UINT64 IMTDatasetSummary::Flags() const  
---  
Return Value
[IMTDataset::EnDataSetFlags](imtdataset_enum.htm#endatasetflags) enumeration value.
Note
The method is reserved for future use.
IMTDatasetSummary::Flags
Set the flags of a dashboard data set.
MTAPIRES IMTDatasetSummary::Flags( const UINT64 flags // flags )  
---  
Parameters
flags
[in] Data set flags. The [IMTDataset::EnDataSetFlags](imtdataset_enum.htm#endatasetflags) enumeration is used to pass them.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method is reserved for future use.