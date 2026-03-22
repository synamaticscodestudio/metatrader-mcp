# BetweenInt (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetField ](imtdatasetfield.md "IMTDatasetField")/ BetweenInt | [](imtdatasetfield_whereaddstringarray.md "WhereAddStringArray") [](imtdatasetfield_betweenuint.md "BetweenUInt") |
| --- | --- | --- |
| --- | --- |

IMTDatasetField::BetweenInt
Add a selection condition as a range of values for fields of the [int type](imtdatasetfield_enum.htm#enfieldtype).
MTAPIRES IMTDatasetField::BetweenInt( const INT64 from, // Range beginning const INT64 to // Range end )  
---  
Parameters
from
The value of the int field used as the range beginning.
to
The value of the int field used as the range beginning.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
For example, for the [IMTDatasetField::FIELD_USER_LOGIN](imtdatasetfield_enum.htm#enfieldid) field you can specify the range "1000-1100" to select data on accounts with the appropriate numbers.