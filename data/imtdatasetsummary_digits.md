# Digits (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetSummary ](imtdatasetsummary.md "IMTDatasetSummary")/ Digits | [](imtdatasetsummary_type.md "Type") [](imtdatasetsummary_valueint.md "ValueInt") |
| --- | --- | --- |
| --- | --- |

IMTDatasetSummary::Digits
Get the number of decimal places for formatting the values shown in a cell.
UINT IMTDatasetSummary::Digits() const  
---  
Return Value
The number of decimal places for formatting the values shown in a cell.
Note
Used for formatting the figures with a floating point ([IMTDatasetSummary::TYPE_DOUBLE, TYPE_MONEY, TYPE_PRICE*](imtdatasetsummary_enum.htm#entype)).
IMTDatasetSummary::Digits
Set the number of decimal places for formatting the values shown in a cell.
MTAPIRES IMTDatasetSummary::Digits( const UINT digits // Decimal places )  
---  
Parameters
digits
[in] The number of decimal places for formatting the values shown in a cell.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
Used for formatting the figures with a floating point ([IMTDatasetSummary::TYPE_DOUBLE, TYPE_MONEY, TYPE_PRICE*](imtdatasetsummary_enum.htm#entype)).