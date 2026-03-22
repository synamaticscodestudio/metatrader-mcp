# Type (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetSummary ](imtdatasetsummary.md "IMTDatasetSummary")/ Type | [](imtdatasetsummary_flags.md "Flags") [](imtdatasetsummary_digits.md "Digits") |
| --- | --- | --- |
| --- | --- |

IMTDatasetSummary::Type
Get a data type in a summary cell.
UINT IMTDatasetSummary::Type() const  
---  
Return Value
A value of the [IMTDatasetSummary::EnType](imtdatasetsummary_enum.htm#entype) enumeration.
Note
A cell type is determined when its value is specified.
A type of a cell data is not connected with a [type of the column](imtdatasetcolumn_type.md "Type"), for which a summary is specified (summary types are located independently).