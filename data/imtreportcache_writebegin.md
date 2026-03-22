# WriteBegin (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Data Cache Interfaces ](reportapi_cache.md "Data Cache Interfaces") / [ IMTReportCache ](imtreportcache.md "IMTReportCache")/ WriteBegin | [](imtreportcache_readdictionarystring.md "ReadDictionaryString") [](imtreportcache_writeend.md "WriteEnd") |
| --- | --- | --- |
| --- | --- |

IMTReportCache::WriteBegin
Start writing data to the cache.
MTAPIRES IMTReportCache::WriteBegin()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Only one report instance can be reading/writing data to cache at a time. If an attempt is made to access the cache from which the data is currently being read or written, the method waits for 20 seconds. If reading/writing is not finished by that time, the method returns an error.
All method which write data to the cache can only be called after this method.