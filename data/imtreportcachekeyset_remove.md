# Remove (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Data Cache Interfaces ](reportapi_cache.md "Data Cache Interfaces") / [ IMTReportCacheKeySet ](imtreportcachekeyset.md "IMTReportCacheKeySet")/ Remove | [](imtreportcachekeyset_insertset.md "InsertSet") [](imtreportcachekeyset_removearray.md "RemoveArray") |
| --- | --- | --- |
| --- | --- |

IMTReportCacheKeySet::Remove
Delete a key from the current set.
MTAPIRES IMTReportCacheKeySet::Remove( const UINT64 key // Key )  
---  
Parameters
key
[in] the key which you want to delete.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.