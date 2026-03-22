# WriteEnd (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Data Cache Interfaces ](reportapi_cache.md "Data Cache Interfaces") / [ IMTReportCache ](imtreportcache.md "IMTReportCache")/ WriteEnd | [](imtreportcache_writebegin.md "WriteBegin") [](imtreportcache_writeparamfrom.md "WriteParamFrom") |
| --- | --- | --- |
| --- | --- |

IMTReportCache::WriteEnd
Finish writing data to the cache.
MTAPIRES IMTReportCache::WriteEnd( bool apply // Flag for saving changes )  
---  
Parameters
apply
[in] The flag for saving changes in the cache. If true, all changes made to the cache between the last [IMTReportCache::WriteBegin](imtreportcache_writebegin.md "WriteBegin") call and this method call will be saved. If false, no changes will be saved.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Only one report instance can be writing data to cache at a time.
After this method call, no other methods for writing data to the cache can be called, except [IMTReportCache::WriteBegin](imtreportcache_writebegin.md "WriteBegin").