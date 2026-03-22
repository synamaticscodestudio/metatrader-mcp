# BetweenDouble (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetField ](imtdatasetfield.md "IMTDatasetField")/ BetweenDouble | [](imtdatasetfield_betweenuint.md "BetweenUInt") [](imtdatasetrequest.md "IMTDatasetRequest") |
| --- | --- | --- |
| --- | --- |

IMTDatasetField::BetweenDouble
Add a selection condition as a range of values for fields of the [double type](imtdatasetfield_enum.htm#enfieldtype).
MTAPIRES IMTDatasetField::BetweenDouble( const double from, // Range beginning const double to // Range end )  
---  
Parameters
from
The value of the double field used as the range beginning.
to
The value of the double field used as the range end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
For example, for the [IMTDatasetField::FIELD_USER_BALANCE](imtdatasetfield_enum.htm#enfieldid) field you can specify the range "100.00-5000.00" to select data on accounts with the appropriate balances.