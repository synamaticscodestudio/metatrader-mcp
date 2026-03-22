# WriteMissingKeys (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Data Cache Interfaces ](reportapi_cache.md "Data Cache Interfaces") / [ IMTReportCache ](imtreportcache.md "IMTReportCache")/ WriteMissingKeys | [](imtreportcache_writevalue.md "WriteValue") [](imtreportcache_writedictionarystring.md "WriteDictionaryString") |
| --- | --- | --- |
| --- | --- |

IMTReportCache::WriteMissingKeys
Add missing keys to the cache.
MTAPIRES IMTReportCache::WriteMissingKeys( const IMTReportCacheKeySet* keys // Set of keys )  
---  
Parameters
keys
[in] The [IMTReportCacheKeySet](imtreportcachekeyset.md "IMTReportCacheKeySet") objects which describes the keys to add.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method only adds missing keys from the set. The values of existing keys are not replaced.