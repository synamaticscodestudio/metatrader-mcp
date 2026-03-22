# ReadEnd (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Data Cache Interfaces ](reportapi_cache.md "Data Cache Interfaces") / [ IMTReportCache ](imtreportcache.md "IMTReportCache")/ ReadEnd | [](imtreportcache_readbegin.md "ReadBegin") [](imtreportcache_readparamfrom.md "ReadParamFrom") |
| --- | --- | --- |
| --- | --- |

IMTReportCache::ReadEnd
Finish data reading from the cache.
MTAPIRES IMTReportCache::ReadEnd()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
After a successful call of [IMTReportCache::ReadBegin](imtreportcache_readbegin.md "ReadBegin") and before the call of IMTReportCache::ReadEnd, other reports (plugins) cannot write data to this cache.
After this method call, no other methods which read data from the cache can be called, except [IMTReportCache::ReadBegin](imtreportcache_readbegin.md "ReadBegin").