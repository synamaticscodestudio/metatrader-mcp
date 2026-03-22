# ReadBegin (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Data Cache Interfaces ](reportapi_cache.md "Data Cache Interfaces") / [ IMTReportCache ](imtreportcache.md "IMTReportCache")/ ReadBegin | [](imtreportcache_valuecreate.md "ValueCreate") [](imtreportcache_readend.md "ReadEnd") |
| --- | --- | --- |
| --- | --- |

IMTReportCache::ReadBegin
Start data reading from the cache.
MTAPIRES IMTReportCache::ReadBegin()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
During the IMTReportCache::ReadBegin call, a verification is performed that no other report (plugin) is currently writing data to the cache. If data is currently being written by another report (plugin) the method waits for 10 seconds for recording to finish. If writing is finished by that time, the method returns [MT_RET_OK](retcodes_successful.md "Successful completion") and thus you can start reading. Otherwise, the method returns an error.
All method which read data from the cache can only be called after this method.