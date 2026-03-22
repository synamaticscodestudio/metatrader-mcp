# ValueVolumeCurrent (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetSummary ](imtdatasetsummary.md "IMTDatasetSummary")/ ValueVolumeCurrent | [](imtdatasetsummary_valuevolumeinitial.md "ValueVolumeInitial") [](reportapi_cache.md "Data Cache Interfaces") |
| --- | --- | --- |
| --- | --- |

IMTDatasetSummary::ValueVolumeCurrent
Get a previously set current (unexecuted) volume value in a summary cell.
UINT64 IMTDatasetSummary::ValueVolumeCurrent() const  
---  
Return Value
A previously set current (unexecuted) volume value in a summary cell. Volume is specified in the UINT64 format (one unit corresponds to 1/10000 lot, for example, 10500 means 1.05 lots).
Note
A received summary must be of [IMTDatasetSummary::TYPE_VOLUME_ORDER](imtdatasetsummary_enum.htm#entype) type. Otherwise, the method returns 0.