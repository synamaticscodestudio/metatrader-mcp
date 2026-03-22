# RemoveArray (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Data Cache Interfaces ](reportapi_cache.md "Data Cache Interfaces") / [ IMTReportCacheKeySet ](imtreportcachekeyset.md "IMTReportCacheKeySet")/ RemoveArray | [](imtreportcachekeyset_remove.md "Remove") [](imtreportcachekeyset_removeset.md "RemoveSet") |
| --- | --- | --- |
| --- | --- |

IMTReportCacheKeySet::RemoveArray
Delete an array of keys from the current set.
MTAPIRES IMTReportCacheKeySet::RemoveArray( const UINT64* keys, // Array of keys const UINT total // Number of keys )  
---  
Parameters
keys
[in] The array of keys you want to delete.
total
[in] The number of keys in the array.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.