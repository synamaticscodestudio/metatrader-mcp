# Next (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Data Cache Interfaces ](reportapi_cache.md "Data Cache Interfaces") / [ IMTReportCacheKeySet ](imtreportcachekeyset.md "IMTReportCacheKeySet")/ Next | [](imtreportcachekeyset_array.md "Array") [](imtreportcachekeyset_search.md "Search") |
| --- | --- | --- |
| --- | --- |

IMTReportCacheKeySet::Next
Get the next key from a sorted key array.
const UINT64* IMTReportCacheKeySet::Next( const UINT64* key // Key )  
---  
Parameters
key
[in] A pointer to a key in the sorted array of keys. To get the pointer to the first key from the set, use the [IMTReportCacheKeySet::Array](imtreportcachekeyset_array.md "Array") method.
Return Value
A pointer to the next key or NULL if the array end is reached.