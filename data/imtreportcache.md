# IMTReportCache (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Data Cache Interfaces ](reportapi_cache.md "Data Cache Interfaces")/ IMTReportCache | [](reportapi_cache.md "Data Cache Interfaces") [](imtreportcache_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTReportCache
IMTReportCache is the [data cache](imtreportapi_cache.md "Data cache") description interface. It enables the receiving and writing of data to cache as the key — value pairs, parameters and dictionaries.
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtreportcache_release.md "Release") | Delete the current object. |
| [Name](imtreportcache_name.md "Name") | Get the name of the data cache. |
| [TimeLastWrite](imtreportcache_timelastwrite.md "TimeLastWrite") | Get the time of the last data cache change. |
| [ValueCreate](imtreportcache_valuecreate.md "ValueCreate") | Create a cache value object. |
| [ReadBegin](imtreportcache_readbegin.md "ReadBegin") | Start data reading from the cache. |
| [ReadEnd](imtreportcache_readend.md "ReadEnd") | Finish data reading from the cache. |
| [ReadParamFrom](imtreportcache_readparamfrom.md "ReadParamFrom") | Get the value of the "From" parameter. |
| [ReadParamTo](imtreportcache_readparamto.md "ReadParamTo") | Get the value of the "To" parameter. |
| [ReadParamString](imtreportcache_readparamstring.md "ReadParamString") | Get the value of the "String" parameter. |
| [ReadParamData](imtreportcache_readparamdata.md "ReadParamData") | Get the value of the "Data" parameter. |
| [ReadParamKeySet](imtreportcache_readparamkeyset.md "ReadParamKeySet") | Get the value of the "KeySet" parameter. |
| [ReadValue](imtreportcache_readvalue.md "ReadValue") | Get the cache value with the specified key. |
| [ReadValues](imtreportcache_readvalues.md "ReadValues") | Get multiple values from cache using a set of keys. |
| [ReadMissingKeys](imtreportcache_readmissingkeys.md "ReadMissingKeys") | Get the list of missing keys in cache. |
| [ReadDictionaryPos](imtreportcache_readdictionarypos.md "ReadDictionaryPos") | Get the position of a string (value) in the dictionary. |
| [ReadDictionaryString](imtreportcache_readdictionarystring.md "ReadDictionaryString") | Get the string (value) from a dictionary based on the position. |
| [WriteBegin](imtreportcache_writebegin.md "WriteBegin") | Start writing data to the cache. |
| [WriteEnd](imtreportcache_writeend.md "WriteEnd") | Finish writing data to the cache. |
| [WriteParamFrom](imtreportcache_writeparamfrom.md "WriteParamFrom") | Set the value for the "From" parameter. |
| [WriteParamTo](imtreportcache_writeparamto.md "WriteParamTo") | Set the value for the "To" parameter. |
| [WriteParamString](imtreportcache_writeparamstring.md "WriteParamString") | Set the value for the "String" parameter. |
| [WriteParamData](imtreportcache_writeparamdata.md "WriteParamData") | Set the value for the "Data" parameter. |
| [WriteParamKeySet](imtreportcache_writeparamkeyset.md "WriteParamKeySet") | Set the value for the "KeySet" parameter. |
| [WriteValue](imtreportcache_writevalue.md "WriteValue") | Write the value for a key in the cache. |
| [WriteMissingKeys](imtreportcache_writemissingkeys.md "WriteMissingKeys") | Add missing keys to the cache. |
| [WriteDictionaryString](imtreportcache_writedictionarystring.md "WriteDictionaryString") | Add a string (value) to the dictionary and return its position. |