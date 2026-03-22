# ValueCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Data Cache Interfaces ](reportapi_cache.md "Data Cache Interfaces") / [ IMTReportCache ](imtreportcache.md "IMTReportCache")/ ValueCreate | [](imtreportcache_timelastwrite.md "TimeLastWrite") [](imtreportcache_readbegin.md "ReadBegin") |
| --- | --- | --- |
| --- | --- |

IMTReportCache::ValueCreate
Create a cache value object.
IMTReportCacheValue* IMTReportCache::ValueCreate()  
---  
Return Value
Returns a pointer to the created object which implements the [IMTReportCacheValue](imtreportcachevalue.md "IMTReportCacheValue") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTReportCacheValue::Release](imtreportcachevalue_release.md "Release") method of this object.