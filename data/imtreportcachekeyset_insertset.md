# InsertSet (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Data Cache Interfaces ](reportapi_cache.md "Data Cache Interfaces") / [ IMTReportCacheKeySet ](imtreportcachekeyset.md "IMTReportCacheKeySet")/ InsertSet | [](imtreportcachekeyset_insertarray.md "InsertArray") [](imtreportcachekeyset_remove.md "Remove") |
| --- | --- | --- |
| --- | --- |

IMTReportCacheKeySet::InsertSet
Add a key set to the current set.
MTAPIRES IMTReportCacheKeySet::InsertSet( const IMTReportCacheKeySet* keyset // Set of keys )  
---  
Parameters
keyset
[in] The [IMTReportCacheKeySet](imtreportcachekeyset.md "IMTReportCacheKeySet") object, which describes the set of keys to add.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.