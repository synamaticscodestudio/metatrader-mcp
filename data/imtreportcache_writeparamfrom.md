# WriteParamFrom (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Data Cache Interfaces ](reportapi_cache.md "Data Cache Interfaces") / [ IMTReportCache ](imtreportcache.md "IMTReportCache")/ WriteParamFrom | [](imtreportcache_writeend.md "WriteEnd") [](imtreportcache_writeparamto.md "WriteParamTo") |
| --- | --- | --- |
| --- | --- |

IMTReportCache::WriteParamFrom
Set the value for the ["From" parameter](imtreportapi_cache.htm#data).
MTAPIRES IMTReportCache::WriteParamFrom( const INT64 from // Value )  
---  
Parameters
from
[in] Value for the "From" parameter.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.