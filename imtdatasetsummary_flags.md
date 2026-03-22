# Flags (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetSummary ](imtdatasetsummary.md "IMTDatasetSummary")/ Flags | [](imtdatasetsummary_color.md "Color") [](imtdatasetsummary_type.md "Type") |
| --- | --- | --- |
| --- | --- |

IMTDatasetSummary::Flags
Get summary cell flags.
UINT64 IMTDatasetSummary::Flags() const  
---  
Return Value
A value of the [IMTDatasetSummary::EnFlags](imtdatasetsummary_enum.htm#enflags) enumeration.
Note
This method is reserved for future use.
IMTDatasetSummary::Flags
Set summary cell flags.
MTAPIRES IMTDatasetSummary::Flags( const UINT64 flags // flags )  
---  
Parameters
flags
[in] Summary cell flags. To pass the options, the [IMTDatasetSummary::EnFlags](imtdatasetsummary_enum.htm#enflags) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
This method is reserved for future use.