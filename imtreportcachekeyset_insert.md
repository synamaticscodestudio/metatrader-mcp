# Insert (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Data Cache Interfaces ](reportapi_cache.md "Data Cache Interfaces") / [ IMTReportCacheKeySet ](imtreportcachekeyset.md "IMTReportCacheKeySet")/ Insert | [](imtreportcachekeyset_reserve.md "Reserve") [](imtreportcachekeyset_insertarray.md "InsertArray") |
| --- | --- | --- |
| --- | --- |

IMTReportCacheKeySet::Insert
Add a key to the current set.
MTAPIRES IMTReportCacheKeySet::Insert( const UINT64 key // Key )  
---  
Parameters
key
[in] The key to add.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.