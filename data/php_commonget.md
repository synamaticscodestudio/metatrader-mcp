# CommonGet (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Common Configuration ](php_common.md "Common Configuration")/ CommonGet | [](php_common.md "Common Configuration") [](php_time.md "Timing") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::CommonGet
Get the common configuration of the trading platform.
MTAPIRES MTWebAPI::CommonGet( MTConCommon &$common // Common configuration )  
---  
Parameters
&$common
[out] The MTConCommon structure that describes the common configuration of the trading platform. The structure parameters are described in section ["Data Structure"](webapi_common_data_structure.md "Data Structure").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.