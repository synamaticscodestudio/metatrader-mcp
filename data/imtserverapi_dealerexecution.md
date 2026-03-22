# DealerExecution (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Request Processing ](serverapi_dealer.md "Processing of requests")/ DealerExecution | [](imtserverapi_dealeranswer.md "DealerAnswer") [](imtserverapi_dealerrequesttotal.md "DealerRequestTotal") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DealerExecution
Apply a [trade execution](imtexecution.md "IMTExecution"). This method enables the use of the [gateway trading mechanism](gatewayapi_develop_gateway.md "Developing and Debugging Gateways") from the plugin: thus you can open, execute and cancel orders, calculate variation margin and perform other service operations. All these operations are available in the [IMTExecution::EnTradeExecutions](imtexecution_enum.htm#entradeexecutions) enumeration. Unlike [IMTGatewayAPI::DealerExecuteAsync](imtgatewayapi_dealerexecuteasync.md "DealerExecuteAsync") which is used in gateways, IMTServerAPI::DealerExecution is synchronous. It does not send an execution command to a queue but immediately applies the trade execution to the database and returns the result.
MTAPIRES IMTServerAPI::DealerExecution( LPCWSTR gateway_name, // gateway name LPCWSTR gateway_type, // gateway type IMTExecution* execution // trade execution object )  
---  
Parameters
gateway_name
[in] The name of the gateway from which the trade execution arrived. The value is used for logging information about the applied trade execution into a trade server journal.
gateway_type
[in] Gateway module name ([IMTConGateway::Module](imtcongateway_module.md "Module")) from which the trade execution arrived. The value is written to the [IMTDeal::Gateway](imtdeal_gateway.md "Gateway") field of the deals executed as a result of the application of a trade execution.
execution
[in] Filled [trade execution object](imtexecution.md "IMTExecution"). The [IMTExecution::GatewayID](imtexecution_gatewayid.md "GatewayID") field must be filled in the object, since the execution runs in the context of settings of a particular gateway, including the settings of available groups, allowed symbols, and price translation rules. 
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
Upon the execution of this method, an operation corresponding to the [passed trade execution type](imtexecution_enum.htm#entradeexecutions) is performed in the platform.