# WriteValue (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Data Cache Interfaces ](reportapi_cache.md "Data Cache Interfaces") / [ IMTReportCache ](imtreportcache.md "IMTReportCache")/ WriteValue | [](imtreportcache_writeparamkeyset.md "WriteParamKeySet") [](imtreportcache_writemissingkeys.md "WriteMissingKeys") |
| --- | --- | --- |
| --- | --- |

IMTReportCache::WriteValue
Write the value for a key in the cache.
MTAPIRES IMTReportCache::WriteValue( const UINT64 key, // Key const void* value, // Value const UINT size // Size )  
---  
Parameters
key
[in] The key to write data for. If there is no such key, it will be added.
value
[in] The key value.
size
[in] Value size in bytes.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.