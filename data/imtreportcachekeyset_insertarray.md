# InsertArray (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Data Cache Interfaces ](reportapi_cache.md "Data Cache Interfaces") / [ IMTReportCacheKeySet ](imtreportcachekeyset.md "IMTReportCacheKeySet")/ InsertArray | [](imtreportcachekeyset_insert.md "Insert") [](imtreportcachekeyset_insertset.md "InsertSet") |
| --- | --- | --- |
| --- | --- |

IMTReportCacheKeySet::InsertArray
Add an array of keys to the current set.
MTAPIRES IMTReportCacheKeySet::InsertArray( const UINT64* keys, // Array of keys const UINT total // Number of keys )  
---  
Parameters
keys
[in] The array of keys you want to add.
total
[in] The number of keys in the array.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.