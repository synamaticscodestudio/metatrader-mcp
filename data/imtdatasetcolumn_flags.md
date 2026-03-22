# Flags (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetColumn ](imtdatasetcolumn.md "IMTDatasetColumn")/ Flags | [](imtdatasetcolumn_digitscolumn.md "DigitsColumn") [](imtdatasetcolumn_offset.md "Offset") |
| --- | --- | --- |
| --- | --- |

IMTDatasetColumn::Flags
Get column flags.
UINT64 IMTDatasetColumn::Flags() const  
---  
Return Value
A value of the [IMTDatasetColumn::EnFlags](imtdatasetcolumn_enum.htm#enflags) enumeration.
IMTDatasetColumn::Flags
Set column flags.
MTAPIRES IMTDatasetColumn::Flags( const UINT64 flags // Column flags )  
---  
Parameters
flags
[in] Column flags. To pass the options, the [IMTDatasetColumn::EnFlags](imtdatasetcolumn_enum.htm#enflags) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.