# ContainsSet (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Data Cache Interfaces ](reportapi_cache.md "Data Cache Interfaces") / [ IMTReportCacheKeySet ](imtreportcachekeyset.md "IMTReportCacheKeySet")/ ContainsSet | [](imtreportcachekeyset_search.md "Search") [](imtreportcachekeyset_reserve.md "Reserve") |
| --- | --- | --- |
| --- | --- |

IMTReportCacheKeySet::ContainsSet
Check if the key set contains all the keys from the passed set.
MTAPIRES IMTReportCacheKeySet::ContainsSet( const IMTReportCacheKeySet *keyset // Set of keys )  
---  
Parameters
keyset
[in] The [IMTReportCacheKeySet](imtreportcachekeyset.md "IMTReportCacheKeySet") objects: the presence of its keys will be checked in the current object.
Return Value
[MT_RET_OK](retcodes_successful.md "Successful completion"), if the passed set of keys exists in the current object.