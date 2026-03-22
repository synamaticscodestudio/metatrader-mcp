# RemoveSet (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Data Cache Interfaces ](reportapi_cache.md "Data Cache Interfaces") / [ IMTReportCacheKeySet ](imtreportcachekeyset.md "IMTReportCacheKeySet")/ RemoveSet | [](imtreportcachekeyset_removearray.md "RemoveArray") [](webapi.md "Web API") |
| --- | --- | --- |
| --- | --- |

IMTReportCacheKeySet::RemoveSet
Delete a set of keys from the current set.
MTAPIRES IMTReportCacheKeySet::RemoveSet( const IMTReportCacheKeySet* keyset // Set of keys )  
---  
Parameters
keyset
[in] The [IMTReportCacheKeySet](imtreportcachekeyset.md "IMTReportCacheKeySet") object, which describes the set of keys to delete.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.