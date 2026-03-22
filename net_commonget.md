# CommonGet (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class") / [ Common Configuration ](net_common.md "Common Configuration")/ CommonGet | [](net_common.md "Common Configuration") [](net_time.md "Timing") |
| --- | --- | --- |
| --- | --- |

MT5WebAPI.CommonGet
Get the common configuration of the trading platform.
MTRetCode MT5WebAPI.CommonGet( out MTConCommon common // Common configuration )  
---  
Parameters
out common
[out] The MTConCommon structure that describes the common configuration of the trading platform. The structure parameters are described in section ["Data Structure"](webapi_common_data_structure.md "Data Structure").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.