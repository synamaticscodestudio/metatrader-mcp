# Assign (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDataset ](imtdataset.md "IMTDataset")/ Assign | [](imtdataset_release.md "Release") [](imtdataset_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTDataset::Assign
Assign a passed object to the current one.
MTAPIRES IMTDataset::Assign( const IMTDataset* data // source object )  
---  
Parameters
data
Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.