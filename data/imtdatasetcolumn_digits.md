# Digits (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetColumn ](imtdatasetcolumn.md "IMTDatasetColumn")/ Digits | [](imtdatasetcolumn_widthmax.md "WidthMax") [](imtdatasetcolumn_digitscolumn.md "DigitsColumn") |
| --- | --- | --- |
| --- | --- |

IMTDatasetColumn::Digits
Get the number of decimal places by default for values in a column.
UINT IMTDatasetColumn::Digits() const  
---  
Return Value
The number of decimal places by default for values in a column.
Note
Used for formatting the figures with a floating point ([IMTDatasetColumn::TYPE_DOUBLE,TYPE_MONEY,TYPE_PRICE*](imtdatasetcolumn_enum.htm#entype)).
IMTDatasetColumn::Digits
Set the number of decimal places by default for values in a column.
MTAPIRES IMTDatasetColumn::Digits( const UINT digits // Number of decimal places )  
---  
Parameters
digits
[in] The number of decimal places by default for values in a column.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
Used for formatting the figures with a floating point ([IMTDatasetColumn::TYPE_DOUBLE, TYPE_MONEY, TYPE_PRICE*](imtdatasetcolumn_enum.htm#entype)).