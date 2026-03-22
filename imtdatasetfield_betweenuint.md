# BetweenUInt (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetField ](imtdatasetfield.md "IMTDatasetField")/ BetweenUInt | [](imtdatasetfield_betweenint.md "BetweenInt") [](imtdatasetfield_betweendouble.md "BetweenDouble") |
| --- | --- | --- |
| --- | --- |

IMTDatasetField::BetweenUInt
Add a selection condition as a range of values for fields of the [uint type](imtdatasetfield_enum.htm#enfieldtype).
MTAPIRES IMTDatasetField::BetweenUInt( const UINT64 from, // Range beginning const UINT64 to // Range end )  
---  
Parameters
from
The value of the uint field used as the range beginning.
to
The value of the uint field used as the range end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
For example, for the [IMTDatasetField::FIELD_USER_LEVERAGE](imtdatasetfield_enum.htm#enfieldid) field you can specify the range "10-50" to select data on accounts with the appropriate leverages.