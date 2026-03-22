# ValueVolumeInitial (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetSummary ](imtdatasetsummary.md "IMTDatasetSummary")/ ValueVolumeInitial | [](imtdatasetsummary_valuevolume.md "ValueVolume") [](imtdatasetsummary_valuevolumecurrent.md "ValueVolumeCurrent") |
| --- | --- | --- |
| --- | --- |

IMTDatasetSummary::ValueVolumeInitial
Get a previously set initial volume value in a summary cell.
UINT64 IMTDatasetSummary::ValueVolumeInitial() const  
---  
Return Value
A previously set initial volume value in a summary cell. Volume is specified in the UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lots).
Note
A received summary must be of [IMTDatasetSummary::TYPE_VOLUME_ORDER](imtdatasetsummary_enum.htm#entype) type. Otherwise, the method returns 0.