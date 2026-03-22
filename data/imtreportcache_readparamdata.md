# ReadParamData (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Data Cache Interfaces ](reportapi_cache.md "Data Cache Interfaces") / [ IMTReportCache ](imtreportcache.md "IMTReportCache")/ ReadParamData | [](imtreportcache_readparamstring.md "ReadParamString") [](imtreportcache_readparamkeyset.md "ReadParamKeySet") |
| --- | --- | --- |
| --- | --- |

IMTReportCache::ReadParamData
Get the value of the ["Data" parameter](imtreportapi_cache.htm#data).
const void* IMTReportCache::ReadParamData( UINT& size // data size )  
---  
Parameters
size
[out] The size of the received data in bytes.
Return Value
A pointer to the value of the "Data" parameter.