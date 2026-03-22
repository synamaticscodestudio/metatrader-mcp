# Reserve (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Data Cache Interfaces ](reportapi_cache.md "Data Cache Interfaces") / [ IMTReportCacheKeySet ](imtreportcachekeyset.md "IMTReportCacheKeySet")/ Reserve | [](imtreportcachekeyset_containsset.md "ContainsSet") [](imtreportcachekeyset_insert.md "Insert") |
| --- | --- | --- |
| --- | --- |

IMTReportCacheKeySet::Reserve
Reserve memory for keys in a set.
MTAPIRES IMTReportCacheKeySet::Reserve( const UINT total // Number of keys )  
---  
Parameters
total
[in] The number of keys, for which you want to reserve memory.
Return Value
[MT_RET_OK](retcodes_successful.md "Successful completion"), if the passed set of keys exists in the current object.
Note
Use this method before adding a set of keys to a set. By allocating memory in advance, you will save server time on allocating memory for each key separately.