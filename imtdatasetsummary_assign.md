# Assign (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetSummary ](imtdatasetsummary.md "IMTDatasetSummary")/ Assign | [](imtdatasetsummary_release.md "Release") [](imtdatasetsummary_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTDatasetSummary::Assign
Assign a passed object to the current one.
MTAPIRES IMTDatasetSummary::Assign( const IMTDatasetSummary* summary // Source object )  
---  
Parameters
summary
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.